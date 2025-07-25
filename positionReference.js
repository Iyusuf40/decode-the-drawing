class PositionReference {
  constructor(
    videoWidth = 1280,
    videoHeight = 720,
    leftReferencePoint,
    rightReferencePoint,
    topReferencePoint
  ) {
    this.videoWidth = videoWidth;
    this.videoHeight = videoHeight;
    this.rightReferencePoint = rightReferencePoint;
    this.leftReferencePoint = leftReferencePoint;
    this.topReferencePoint = topReferencePoint;
    this.origin = {
      x: videoWidth / 2,
      y: videoHeight,
    };
  }

  updatePosition(ctx, drawingCanvas = null) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const threshod = 25;
    const redBox = {
      minX: Infinity,
      minY: Infinity,
      maxX: 0,
      maxY: 0,
    };
    const blueBox = {
      minX: Infinity,
      minY: Infinity,
      maxX: 0,
      maxY: 0,
    };
    const greenBox = {
      minX: Infinity,
      minY: Infinity,
      maxX: 0,
      maxY: 0,
    };

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const point = {
        x: (i / 4) % imageData.width,
        y: Math.floor(i / 4 / imageData.width),
      };

      if (r > g + threshod && r > b + threshod) {
        redBox.minX = Math.min(redBox.minX, point.x);
        redBox.minY = Math.min(redBox.minY, point.y);
        redBox.maxX = Math.max(redBox.maxX, point.x);
        redBox.maxY = Math.max(redBox.maxY, point.y);
      }
      if (b > r + threshod && b > g + threshod) {
        blueBox.minX = Math.min(blueBox.minX, point.x);
        blueBox.minY = Math.min(blueBox.minY, point.y);
        blueBox.maxX = Math.max(blueBox.maxX, point.x);
        blueBox.maxY = Math.max(blueBox.maxY, point.y);
      }
      if (g > r + threshod && g > b + threshod) {
        greenBox.minX = Math.min(greenBox.minX, point.x);
        greenBox.minY = Math.min(greenBox.minY, point.y);
        greenBox.maxX = Math.max(greenBox.maxX, point.x);
        greenBox.maxY = Math.max(greenBox.maxY, point.y);
      }
    }
    const containerBox = {
      minX: Infinity,
      minY: Infinity,
      maxX: 0,
      maxY: 0,
    };
    containerBox.minX = Math.min(redBox.minX, blueBox.minX, greenBox.minX);
    containerBox.minY = Math.min(redBox.minY, blueBox.minY, greenBox.minY);
    containerBox.maxX = Math.max(redBox.maxX, blueBox.maxX, greenBox.maxX);
    containerBox.maxY = Math.max(redBox.maxY, blueBox.maxY, greenBox.maxY);
    if (drawingCanvas && DRAW_BALL_AREAS) {
      const drawingCanvasCtx = drawingCanvas.getContext("2d", {
        willReadFrequently: true,
      });
      if (drawingCanvas.id === "drawingCanvas") {
        drawingCanvasCtx.clearRect(
          0,
          0,
          drawingCanvas.width,
          drawingCanvas.height
        );
      }
      [redBox, blueBox, greenBox].forEach((box) => {
        drawingCanvasCtx.beginPath();
        drawingCanvasCtx.rect(
          box.minX,
          box.minY,
          box.maxX - box.minX,
          box.maxY - box.minY
        );
        drawingCanvasCtx.strokeStyle = "red";
        drawingCanvasCtx.stroke();
      });

      drawingCanvasCtx.beginPath();
      drawingCanvasCtx.rect(
        containerBox.minX,
        containerBox.minY,
        containerBox.maxX - containerBox.minX,
        containerBox.maxY - containerBox.minY
      );
    }
    this.topReferencePoint.updatePositionAndArea(redBox);
    this.leftReferencePoint.updatePositionAndArea(blueBox);
    this.rightReferencePoint.updatePositionAndArea(greenBox);
  }
}

class TrilaterationHandler {
  constructor(canvas) {
    this.canvas = canvas;
    this.left = null;
    this.right = null;
    this.top = null;
    this.initLeft = null;
    this.initRight = null;
    this.initTop = null;
    this.Ftop = 0;
    this.Fright = 0;
    this.Fleft = 0;
    this.audioAnalyser = null;
    this.dataArray = null;
    this.getAverageVolume = null;
  }

  update(left, right, top) {
    if (this.initLeft === null) {
      this.initLeft = JSON.parse(JSON.stringify(left));
      this.initRight = JSON.parse(JSON.stringify(right));
      this.initTop = JSON.parse(JSON.stringify(top));
      const Ptop = top.box.maxY - top.box.minY;
      const Pright = right.box.maxY - right.box.minY;
      const Pleft = left.box.maxY - left.box.minY;

      const W = 6;
      const D = 18;

      this.Ftop = (Ptop * D) / W;
      this.Fright = (Pright * D) / W;
      this.Fleft = (Pleft * D) / W;

      this.W = W;
    }
    this.left = left;
    this.right = right;
    this.top = top;
  }

  setAudioAnalyser(analyser, dataArray, getAverageVolume) {
    this.audioAnalyser = analyser;
    this.dataArray = dataArray;
    this.getAverageVolume = getAverageVolume;
  }

  isPenDown() {
    return true;
    // if (!this.audioAnalyser) return false;

    // this.audioAnalyser.getByteFrequencyData(this.dataArray);
    // let average = this.getAverageVolume(this.dataArray);

    // return average > 1;
  }

  getBallDistance(P, side) {
    let val = 0,
      f = 0;
    switch (side) {
      case "left":
        f = this.Fleft;
        break;
      case "right":
        f = this.Fright;
        break;
      case "top":
        f = this.Ftop;
        break;
    }
    if (!f) throw new Error("Unknown side");
    val = (this.W * f) / P;
    return centimeterToPixel(val);
  }

  getTopBallDistance(P) {
    return this.getBallDistance(P, "top");
  }

  getRightBallDistance(P) {
    return this.getBallDistance(P, "right");
  }

  getLeftBallDistance(P) {
    return this.getBallDistance(P, "left");
  }

  getCurrentPosition() {
    let r1 = this.getLeftBallDistance(this.left.box.maxY - this.left.box.minY);
    let r2 = this.getRightBallDistance(
      this.right.box.maxY - this.right.box.minY
    );
    let r3 = this.getTopBallDistance(this.top.box.maxY - this.top.box.minY);

    const finalLeft = { ...this.left.position };
    let zeroRight = { ...this.right.position };
    let finalRight = { ...this.right.position };
    let finalTop = { ...this.top.position };
    finalRight = rotatePoint(
      finalRight,
      finalLeft,
      getLineAngle(finalLeft, zeroRight)
    );
    finalTop = rotatePoint(
      finalTop,
      finalLeft,
      getLineAngle(finalLeft, zeroRight)
    );

    const U = finalRight.x;
    const Vx = finalTop.x;
    const Vy = finalTop.y;

    const x = (square(r1) - square(r2) + square(U)) / (2 * U);
    const y =
      (square(r1) - square(r3) + square(Vx) + square(Vy) - 2 * Vx * x) /
      (2 * Vy);

    const opResult = square(r1) - square(x) - square(y);

    let z = sqrt(Math.abs(opResult));

    const finalPos = rotatePoint(
      { x, y: z },
      finalLeft,
      -getLineAngle(finalLeft, zeroRight)
    );

    return this.translateToOtherPlane({
      ...finalPos,
    });
  }

  translateToOtherPlane({ x, y }) {
    const scale = 0.6;
    return {
      x: x * scale + this.canvas.width * 0.3,
      y: y * scale - this.canvas.height * 0.1,
    };
  }
}

class TriangulationHandler {
  constructor(canvas) {
    this.canvas = canvas;
    this.left = null;
    this.right = null;
    this.top = null;
    this.initLeft = null;
    this.initRight = null;
    this.initTop = null;
    this.Ftop = 0;
    this.Fright = 0;
    this.Fleft = 0;
    this.audioAnalyser = null;
    this.dataArray = null;
    this.getAverageVolume = null;
  }

  update(left, right, top) {
    if (this.initLeft === null) {
      this.initLeft = JSON.parse(JSON.stringify(left));
      this.initRight = JSON.parse(JSON.stringify(right));
      this.initTop = JSON.parse(JSON.stringify(top));
      const Ptop = top.box.maxY - top.box.minY;
      const Pright = right.box.maxY - right.box.minY;
      const Pleft = left.box.maxY - left.box.minY;

      const W = 6;
      const D = 18;

      this.Ftop = (Ptop * D) / W;
      this.Fright = (Pright * D) / W;
      this.Fleft = (Pleft * D) / W;

      this.W = W;
    }
    this.left = left;
    this.right = right;
    this.top = top;
  }

  setAudioAnalyser(analyser, dataArray, getAverageVolume) {
    this.audioAnalyser = analyser;
    this.dataArray = dataArray;
    this.getAverageVolume = getAverageVolume;
  }

  isPenDown() {
    return true;
    // if (!this.audioAnalyser) return false;

    // this.audioAnalyser.getByteFrequencyData(this.dataArray);
    // let average = this.getAverageVolume(this.dataArray);

    // return average > 1;
  }

  getBallDistance(P, side) {
    let val = 0,
      f = 0;
    switch (side) {
      case "left":
        f = this.Fleft;
        break;
      case "right":
        f = this.Fright;
        break;
      case "top":
        f = this.Ftop;
        break;
    }
    if (!f) throw new Error("Unknown side");
    val = (this.W * f) / P;
    return centimeterToPixel(val);
  }

  getTopBallDistance(P) {
    return this.getBallDistance(P, "top");
  }

  getRightBallDistance(P) {
    return this.getBallDistance(P, "right");
  }

  getLeftBallDistance(P) {
    return this.getBallDistance(P, "left");
  }

  getCurrentPosition() {
    let r1 = this.getLeftBallDistance(this.left.box.maxY - this.left.box.minY);
    let r2 = this.getRightBallDistance(
      this.right.box.maxY - this.right.box.minY
    );
    let base = centimeterToPixel(9);

    const angles = anglesOfTriangleFromCosineRule(r2, r1, base);
    const baseLeft = { x: this.canvas.width / 2 - base / 2, y: 0 };
    const baseRight = {
      x: this.canvas.width / 2 + base / 2,
      y: 0,
    };
    let newPos = findThirdVertex(
      baseLeft,
      baseRight,
      angles.angleA,
      angles.angleB
    );
    newPos = { x: newPos.x + 500, y: newPos.y - 200 };
    const scale = 0.5;
    newPos.x *= scale;
    newPos.y *= scale;
    return newPos;
  }
}

class ReferencePoint {
  constructor(type = "") {
    this.type = type;
    this.position = { x: 0, y: 0 };
    this.previousPosition = { x: 0, y: 0 };
    this.area = 0;
    this.previousArea = 0;
    this.initArea = 0;
    this.box = null;
  }

  static fromBox(box) {
    const refPoint = new ReferencePoint();
    refPoint.updatePositionAndArea(box);
    return refPoint;
  }

  updatePositionAndArea(box) {
    this.previousPosition = this.position;
    this.previousArea = this.area;
    this.position = {
      x: (box.minX + box.maxX) / 2,
      y: (box.minY + box.maxY) / 2,
    };
    this.area = (box.maxX - box.minX) * (box.maxY - box.minY);
    if (this.initArea === 0) {
      this.initArea = this.area;
    }
    this.box = box;
  }

  getArea() {
    return this.area;
  }
}

function square(n) {
  return Math.pow(n, 2);
}

function sqrt(n) {
  return Math.sqrt(n);
}

function getPixelsPerCm() {
  if (pixelsPerCmCache) return pixelsPerCmCache;
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = "-9999px";
  div.style.left = "-9999px";
  div.style.width = "1cm";

  document.body.appendChild(div);

  const pixelsPerCm = div.getBoundingClientRect().width;

  document.body.removeChild(div);

  pixelsPerCmCache = pixelsPerCm;
  return pixelsPerCmCache;
}

function centimeterToPixel(cm) {
  const pixelsPerCm = getPixelsPerCm();
  return cm * pixelsPerCm;
}

function getLineAngle(p1, p2) {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x);
}

function rotatePoint(point, center, angle) {
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);

  const px = point.x - center.x;
  const py = point.y - center.y;

  const x_new = px * cos - py * sin;
  const y_new = px * sin + py * cos;

  return {
    x: x_new + center.x,
    y: y_new + center.y,
  };
}

function anglesOfTriangleFromCosineRule(a, b, c) {
  // Validate triangle inequality
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error(
      "Invalid triangle: sides do not satisfy triangle inequality"
    );
  }

  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error("Invalid triangle: all sides must be positive");
  }

  // Calculate angle A (opposite to side a) using cosine rule: cos(A) = (b² + c² - a²) / (2bc)
  const cosA = (b * b + c * c - a * a) / (2 * b * c);
  const angleA = Math.acos(cosA);

  // Calculate angle B (opposite to side b) using cosine rule: cos(B) = (a² + c² - b²) / (2ac)
  const cosB = (a * a + c * c - b * b) / (2 * a * c);
  const angleB = Math.acos(cosB);

  // Calculate angle C (opposite to side c) using cosine rule: cos(C) = (a² + b² - c²) / (2ab)
  const cosC = (a * a + b * b - c * c) / (2 * a * b);
  const angleC = Math.acos(cosC);

  return {
    angleA,
    angleB,
    angleC,
  };
}

function findThirdVertex(p1, p2, angleAtP1, angleAtP2) {
  // Validate input angles
  if (
    angleAtP1 <= 0 ||
    angleAtP2 <= 0 ||
    angleAtP1 >= Math.PI ||
    angleAtP2 >= Math.PI
  ) {
    throw new Error("Angles must be between 0 and π (exclusive)");
  }

  if (angleAtP1 + angleAtP2 >= Math.PI) {
    throw new Error(
      "Sum of given angles must be less than π for a valid triangle"
    );
  }

  // Calculate the third angle
  const angleAtP3 = Math.PI - angleAtP1 - angleAtP2;

  // Calculate the distance between p1 and p2
  const sideC = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);

  if (sideC === 0) {
    throw new Error("Points p1 and p2 cannot be the same");
  }

  // Use Law of Sines to find the other side lengths
  // a/sin(A) = b/sin(B) = c/sin(C)
  const sideB = (sideC * Math.sin(angleAtP2)) / Math.sin(angleAtP3); // Side opposite to p2 (from p1 to p3)

  // Calculate the angle of the line from p1 to p2
  const baseAngle = Math.atan2(p2.y - p1.y, p2.x - p1.x);

  // There are two possible positions for p3 (above and below the line p1-p2)
  // Calculate both solutions

  // Solution 1: p3 above the line p1-p2
  const angle1FromP1 = baseAngle + angleAtP1;
  const p3 = {
    x: p1.x + sideB * Math.cos(angle1FromP1),
    y: p1.y + sideB * Math.sin(angle1FromP1),
  };

  return p3;
}

// Helper function to calculate angle between two vectors
function getAngleBetweenVectors(v1, v2) {
  const dot = v1.x * v2.x + v1.y * v2.y;
  const mag1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
  const mag2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);

  if (mag1 === 0 || mag2 === 0) return 0;

  const cosAngle = dot / (mag1 * mag2);
  // Clamp to prevent floating point errors
  const clampedCos = Math.max(-1, Math.min(1, cosAngle));
  return Math.acos(clampedCos);
}

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

function convertAngleToDeg(angle) {
  return {
    left: radiansToDegrees(angle.angleA),
    right: radiansToDegrees(angle.angleB),
  };
}
