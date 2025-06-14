class PositionReference {
  constructor(
    videoWidth = 1280,
    videoHeight = 720,
    leftReferencePoint,
    rightReferencePoint,
    topReferencePoint,
    triangle
  ) {
    this.videoWidth = videoWidth;
    this.videoHeight = videoHeight;
    this.rightReferencePoint = rightReferencePoint;
    this.leftReferencePoint = leftReferencePoint;
    this.topReferencePoint = topReferencePoint;
    this.triangle = triangle;
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
    if (drawingCanvas) {
      const drawingCanvasCtx = drawingCanvas.getContext("2d");
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
      drawingCanvasCtx.strokeStyle = "blue";
      drawingCanvasCtx.stroke();
    }
    this.topReferencePoint.updatePositionAndArea(redBox);
    this.leftReferencePoint.updatePositionAndArea(blueBox);
    this.rightReferencePoint.updatePositionAndArea(greenBox);
    const rTob = distance(
      this.topReferencePoint.position,
      this.leftReferencePoint.position
    );
    const rTog = distance(
      this.topReferencePoint.position,
      this.rightReferencePoint.position
    );

    const bTor = distance(
      this.leftReferencePoint.position,
      this.rightReferencePoint.position
    );
    this.redToBlueDist = rTob;
    this.redToGreenDist = rTog;
    this.blueToGreenDist = bTor;
  }

  getRGB_Distances() {
    return {
      redToBlue: this.redToBlueDist,
      redToGreen: this.redToGreenDist,
      blueToGreen: this.blueToGreenDist,
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

class Triangle {
  constructor(
    topReferencePoint,
    leftReferencePoint,
    rightReferencePoint,
    canvasMidWidth,
    canvasMidHeight
  ) {
    this.top = topReferencePoint;
    this.left = leftReferencePoint;
    this.right = rightReferencePoint;
    this.mid = 0;
    this.initMid = null;
    this.area = 0;
    this.previousArea = 0;
    this.canvasMidWidth = canvasMidWidth;
    this.canvasMidHeight = canvasMidHeight;
    this.initArea = 0;
    this.redToBlueDist = 0;
    this.redToGreenDist = 0;
    this.blueToGreenDist = 0;
  }

  setRGB_distances(distances) {
    this.redToBlueDist = distances.redToBlue;
    this.redToGreenDist = distances.redToGreen;
    this.blueToGreenDist = distances.blueToGreen;
  }

  triangleBoundingBoxAreaRatio() {
    return this.area / this.initArea;
  }

  getHypot() {
    const newPos = this.getNewPos();

    return distance(this.initMid, newPos);
  }

  getNewPos() {
    const areaRatio = this.area / this.initArea;
    if (this.initArea === 0 || areaRatio === 1) {
      return this.initMid;
    }

    const scaleFactor = Math.sqrt(areaRatio);

    const newPos = {
      x: this.initMid.x * scaleFactor,
      y: this.initMid.y * scaleFactor,
    };

    return newPos;
  }

  getDrawingCoordinates() {
    return this.getXY();
  }

  getXY() {
    const newPos = this.getNewPos();
    const angle = this.getAngleOffMid();

    const correctPos = rotateAroundCenter(newPos, this.initMid, angle);
    return correctPos;
  }

  getAngleOffMid() {
    const triangleMid = midTriangle(
      this.top.position,
      this.left.position,
      this.right.position
    );
    return 0;
  }

  update() {
    if (this.previousArea === 0) {
      this.initArea = this.area;
    }
    this.previousArea = this.area;
    this.area = this.calculateArea();
    this.mid = midTriangle(
      this.top.position,
      this.left.position,
      this.right.position
    );
    if (this.initMid === null) {
      this.initMid = this.mid;
    }
  }

  calculateArea() {
    const topPoint = this.top.position;
    const leftPoint = this.left.position;
    const rightPoint = this.right.position;
    const box = {
      minX: Math.min(leftPoint.x, rightPoint.x, topPoint.x),
      minY: Math.min(leftPoint.y, rightPoint.y, topPoint.y),
      maxX: Math.max(leftPoint.x, rightPoint.x, topPoint.x),
      maxY: Math.max(leftPoint.y, rightPoint.y, topPoint.y),
    };

    const area = (box.maxX - box.minX) * (box.maxY - box.minY);
    return area;
  }
}

function calculateNewDistanceBasedOnArea(
  initialDistance,
  initialArea,
  newArea
) {
  const areaRatio = initialArea / newArea;
  const distanceRatio = Math.sqrt(areaRatio);
  const newDistance = initialDistance * distanceRatio;

  return newDistance;
}

function distance(point1, point2) {
  const dx = Math.abs(point2.x - point1.x);
  const dy = Math.abs(point2.y - point1.y);
  return Math.sqrt(dx * dx + dy * dy);
}

function anglesOfTriangleFromCosineRule(a, b, c) {
  if (a + b <= c || a + c <= b || b + c <= a) {
    throw new Error("Error: The given sides cannot form a triangle.");
  }

  const cosA = (b * b + c * c - a * a) / (2 * b * c);
  const angleA_rad = Math.acos(cosA);
  const angleA_deg = angleA_rad * (180 / Math.PI);

  const cosB = (a * a + c * c - b * b) / (2 * a * c);
  const angleB_rad = Math.acos(cosB);
  const angleB_deg = angleB_rad * (180 / Math.PI);

  const cosC = (a * a + b * b - c * c) / (2 * a * b);
  const angleC_rad = Math.acos(cosC);
  const angleC_deg = angleC_rad * (180 / Math.PI);

  return {
    angleA: angleA_deg,
    angleB: angleB_deg,
    angleC: angleC_deg,
  };
}

function computeXFromAngleChange(h, b, thetaDegrees) {
  const theta = (thetaDegrees * Math.PI) / 180;

  // Binary search for x
  let low = -1000,
    high = 1000;
  let epsilon = 1e-6;
  let mid;

  while (high - low > epsilon) {
    mid = (low + high) / 2;
    const angle = Math.atan(h / (mid + b / 2)) + Math.atan(h / (-mid + b / 2));
    if (angle < theta) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return mid;
}

function midTriangle(a, b, c) {
  const midX = (a.x + b.x + c.x) / 3;
  const midY = (a.y + b.y + c.y) / 3;
  return { x: midX, y: midY };
}

function calculateAngleFromOppositeAdjacent(opposite, adjacent) {
  const angleRadians = Math.atan2(opposite, adjacent);

  return angleRadians;
}

function calculateOpposite(angleRad, adjacent) {
  if (angleRad === 0) {
    return 0;
  }

  const opposite = Math.tan(angleRad) * Math.abs(adjacent);

  return opposite * Math.sign(adjacent);
}

function rotateAroundCenter(v, center, angle) {
  // Translate point to 0,0
  let translatedX = v.x - center.x;
  let translatedY = v.y - center.y;

  let rotatedX = translatedX * Math.cos(angle) - translatedY * Math.sin(angle);
  let rotatedY = translatedX * Math.sin(angle) + translatedY * Math.cos(angle);

  // Translate back to center.x, center.y
  return {
    x: rotatedX + center.x,
    y: rotatedY + center.y,
  };
}
