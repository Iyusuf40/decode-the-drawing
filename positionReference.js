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
  }

  updatePosition(ctx, drawingCanvas = null) {
    const { redBox, blueBox, greenBox } = this.searchBalls(ctx);
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
        drawingCanvasCtx.strokeStyle = "white";
        drawingCanvasCtx.stroke();
      });
    }
    this.topReferencePoint.updatePositionAndArea(redBox);
    this.leftReferencePoint.updatePositionAndArea(blueBox);
    this.rightReferencePoint.updatePositionAndArea(greenBox);
  }

  searchBalls(ctx) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const threshold = 30;

    let redBox = null;
    let blueBox = null;
    let greenBox = null;

    const step = 4 * 200;

    for (let i = 0; i < data.length; i += step) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      if (r > g + threshold && r > b + threshold && !redBox) {
        const searcher = (i) => {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          return r > g + threshold && r > b + threshold;
        };
        redBox = this.searchBall(searcher, i, imageData.width);
      }
      if (b > r + threshold && b > g + threshold && !blueBox) {
        const searcher = (i) => {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          return b > r + threshold && b > g + threshold;
        };
        blueBox = this.searchBall(searcher, i, imageData.width);
      }
      if (g > r + threshold && g > b + threshold && !greenBox) {
        const searcher = (i) => {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          return g > r + threshold && g > b + threshold;
        };
        greenBox = this.searchBall(searcher, i, imageData.width);
      }
      if (redBox && blueBox && greenBox) {
        break;
      }
    }

    [redBox, blueBox, greenBox].forEach((box) => {
      if (
        !box ||
        box.minX === Infinity ||
        box.minY === Infinity ||
        box.maxX === 0 ||
        box.maxY === 0
      ) {
        console.log(box);
        throw new Error("Unexpected box");
      }
    });

    return { redBox, blueBox, greenBox };
  }

  searchBall(searcher, startIndex, imageDataWidth) {
    const box = {
      minX: Infinity,
      minY: Infinity,
      maxX: 0,
      maxY: 0,
    };
    let cursor = startIndex;

    const assign = (cursor) => {
      assertCursorIsAligned(cursor);
      const point = {
        x: (cursor / 4) % imageDataWidth,
        y: Math.floor(cursor / 4 / imageDataWidth),
      };
      box.minX = Math.min(box.minX, point.x);
      box.minY = Math.min(box.minY, point.y);
      box.maxX = Math.max(box.maxX, point.x);
      box.maxY = Math.max(box.maxY, point.y);
    };

    const assertCursorIsAligned = (cursor) => {
      if (cursor % 4 !== 0) {
        throw new Error("cursor not aligned");
      }
    };

    const searchLineForward = (startOfLine, endOfLine) => {
      let current = startOfLine;
      while (current <= endOfLine) {
        if (searcher(current)) return current;
        current += 4;
      }
      return null;
    };

    const searchLineBackward = (startOfLine, endOfLine) => {
      let current = endOfLine;
      while (current >= startOfLine) {
        if (searcher(current)) return current;
        current -= 4;
      }
      return null;
    };

    const getStartOfLine = (index) => {
      assertCursorIsAligned(index);
      return Math.floor(index / 4 / imageDataWidth) * imageDataWidth * 4;
    };

    const getEndOfLine = (index) => {
      assertCursorIsAligned(index);
      return (
        (Math.floor(index / 4 / imageDataWidth) + 1) * imageDataWidth * 4 - 4
      );
    };

    const goToNextLine = (index) => {
      assertCursorIsAligned(index);
      return (Math.floor(index / 4 / imageDataWidth) + 1) * imageDataWidth * 4;
    };

    const goToPreviousLine = (index) => {
      assertCursorIsAligned(index);
      return (Math.floor(index / 4 / imageDataWidth) - 1) * imageDataWidth * 4;
    };

    const searchBack = () => {
      const currentY = Math.floor(cursor / 4 / imageDataWidth);
      if (currentY < 0) return;

      const lineStart = getStartOfLine(cursor);
      const lineEnd = getEndOfLine(cursor);

      let leftMost = searchLineBackward(lineStart, lineEnd);
      let rightMost = searchLineForward(lineStart, lineEnd);

      if (leftMost !== null) assign(leftMost);
      if (rightMost !== null) assign(rightMost);

      if (leftMost !== null || rightMost !== null) {
        cursor = goToPreviousLine(cursor);
        searchBack();
      }
    };

    const searchForward = () => {
      const currentY = Math.floor(cursor / 4 / imageDataWidth);
      const maxRows = Math.floor(
        (imageDataWidth * imageDataWidth * 4) / (imageDataWidth * 4)
      );
      if (currentY >= maxRows) return;

      const lineStart = getStartOfLine(cursor);
      const lineEnd = getEndOfLine(cursor);

      let leftMost = searchLineBackward(lineStart, lineEnd);
      let rightMost = searchLineForward(lineStart, lineEnd);

      if (leftMost !== null) assign(leftMost);
      if (rightMost !== null) assign(rightMost);

      if (leftMost !== null || rightMost !== null) {
        cursor = goToNextLine(cursor);
        searchForward();
      }
    };

    assign(startIndex);
    cursor = goToPreviousLine(startIndex);
    searchBack();
    cursor = goToNextLine(startIndex);
    searchForward();

    return box;
  }
}

class BallDistanceDecoder {
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
    // return true;
    if (!this.audioAnalyser) return false;

    this.audioAnalyser.getByteFrequencyData(this.dataArray);
    let average = this.getAverageVolume(this.dataArray);

    return average > 1.1;
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
    throw new Error("Must be implemented");
  }
}

class TriangulationHandler extends BallDistanceDecoder {
  getCurrentPosition() {
    const distortionCorrectionLeft =
      (this.left.box.maxX - this.left.box.minX) /
      (this.left.box.maxY - this.left.box.minY);
    const distortionCorrectionRight =
      (this.right.box.maxX - this.right.box.minX) /
      (this.right.box.maxY - this.right.box.minY);

    let r1 = this.getLeftBallDistance(
      (this.left.box.maxY - this.left.box.minY) / distortionCorrectionLeft
    );
    let r2 = this.getRightBallDistance(
      (this.right.box.maxY - this.right.box.minY) / distortionCorrectionRight
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
    return { x: Math.floor(newPos.x), y: Math.floor(newPos.y) };
  }
}

class TrilaterationHandler extends BallDistanceDecoder {
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
