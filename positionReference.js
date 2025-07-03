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

class TriangulationHandler {
  constructor(canvas) {
    this.canvas = canvas;
    this.left = null;
    this.right = null;
    this.top = null;
    this.initLeft = null;
    this.initRight = null;
    this.initTop = null;
    this.angles = null;
    this.origin = {
      x: canvas.width / 2,
      y: canvas.height,
    };
  }

  update(left, right, top) {
    if (this.initLeft === null) {
      this.initLeft = JSON.parse(JSON.stringify(left));
      this.initRight = JSON.parse(JSON.stringify(right));
      this.initTop = JSON.parse(JSON.stringify(top));
    }
    this.left = left;
    this.right = right;
    this.top = top;
    this.angles = getTriangleAngles(
      distance(this.origin, this.left.position),
      distance(this.origin, this.right.position),
      distance(this.left.position, this.right.position)
    );
  }

  getCurrentPosition() {
    const currentPosition = getOriginPoint(
      this.initLeft.position,
      this.initRight.position,
      this.angles.angleAtLeftDegrees,
      this.angles.angleAtRightDegrees
    );

    return this.translateToOtherPlane(currentPosition);
  }

  translateToOtherPlane(currentPosition) {
    return {
      x: currentPosition.x,
      y: -this.origin.y + currentPosition.y + 100,
    };
  }

  draw() {
    const ctx = canvas.getContext("2d");
    // draw lines from origin to center of boxes

    // ctx.strokeStyle = "red";
    // ctx.beginPath();
    // ctx.moveTo(this.origin.x, this.origin.y);
    // ctx.lineTo(this.top.position.x, this.top.position.y);
    // ctx.stroke();

    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(this.origin.x, this.origin.y);
    ctx.lineTo(this.left.position.x, this.left.position.y);
    ctx.stroke();

    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(this.origin.x, this.origin.y);
    ctx.lineTo(this.right.position.x, this.right.position.y);
    ctx.stroke();

    // draw blue line between right and left
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.moveTo(this.left.position.x, this.left.position.y);
    ctx.lineTo(this.right.position.x, this.right.position.y);
    ctx.stroke();

    const angles = this.angles;
    // draw angles at their points
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText(
      `Origin Angle: ${angles.angleAtOriginDegrees.toFixed(2)}°`,
      this.origin.x + 10,
      this.origin.y - 10
    );
    ctx.fillText(
      `Left Angle: ${angles.angleAtLeftDegrees.toFixed(2)}°`,
      this.left.position.x + 10,
      this.left.position.y + 10
    );
    ctx.fillText(
      `Right Angle: ${angles.angleAtRightDegrees.toFixed(2)}°`,
      this.right.position.x + 10,
      this.right.position.y + 10
    );
    // console.log(this.left.position, this.right.position, this.origin);
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

  getDrawingCoordinates(angle) {
    return this.getXY(angle);
  }

  getXY(angle) {
    const newPos = this.getNewPos();

    const correctPos = rotateAroundCenter(newPos, this.initMid, angle);
    return correctPos;
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

function distance(point1, point2) {
  const dx = Math.abs(point2.x - point1.x);
  const dy = Math.abs(point2.y - point1.y);
  return Math.sqrt(dx * dx + dy * dy);
}

function radiansToDegrees(radians) {
  return radians * (180 / Math.PI);
}

function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function getTriangleAngles(origin2left, origin2right, left2right) {
  const sides = [origin2left, origin2right, left2right].sort((a, b) => a - b);
  if (sides[0] + sides[1] <= sides[2]) {
    console.error(
      "Invalid triangle: The given side lengths do not form a valid triangle."
    );
    return null;
  }
  const a = origin2right;
  const b = origin2left;
  const c = left2right;
  const angleAtOriginRad = Math.acos((b * b + a * a - c * c) / (2 * b * a));
  const angleAtLeftRad = Math.acos((b * b + c * c - a * a) / (2 * b * c));
  const angleAtRightRad = Math.acos((a * a + c * c - b * b) / (2 * a * c));
  return {
    angleAtOrigin: angleAtOriginRad,
    angleAtLeft: angleAtLeftRad,
    angleAtRight: angleAtRightRad,
    angleAtOriginDegrees: radiansToDegrees(angleAtOriginRad),
    angleAtLeftDegrees: radiansToDegrees(angleAtLeftRad),
    angleAtRightDegrees: radiansToDegrees(angleAtRightRad),
  };
}

function getOriginPoint(
  leftPoint,
  rightPoint,
  angleAtLeftDegrees,
  angleAtRightDegrees
) {
  const angleAtLeftRad = degreesToRadians(angleAtLeftDegrees);
  const angleAtRightRad = degreesToRadians(angleAtRightDegrees);

  if (
    angleAtLeftRad <= 0 ||
    angleAtRightRad <= 0 ||
    angleAtLeftRad >= Math.PI ||
    angleAtRightRad >= Math.PI
  ) {
    console.error(
      "Invalid input angles: Angles must be positive and less than 180 degrees."
    );
    return null;
  }

  const angleAtOriginRad = Math.PI - angleAtLeftRad - angleAtRightRad;

  if (angleAtOriginRad <= 0 || angleAtOriginRad >= Math.PI) {
    console.error(
      "Invalid triangle: Sum of given angles is too large or too small, or results in a degenerate triangle."
    );
    return null;
  }

  const left2right = distance(leftPoint, rightPoint);

  if (left2right === 0) {
    console.error(
      "Invalid triangle: Left and Right points are coincident, cannot form a triangle."
    );
    return null;
  }

  const origin2left =
    (left2right * Math.sin(angleAtRightRad)) / Math.sin(angleAtOriginRad);

  const origin2right =
    (left2right * Math.sin(angleAtLeftRad)) / Math.sin(angleAtOriginRad);

  if (
    origin2left <= 0 ||
    !Number.isFinite(origin2left) ||
    origin2right <= 0 ||
    !Number.isFinite(origin2right)
  ) {
    console.error(
      "Invalid triangle: Calculated side lengths are non-positive or infinite (likely due to angleAtOriginRad being close to 0 or PI)."
    );
    return null;
  }

  const dxLR = rightPoint.x - leftPoint.x;
  const dyLR = rightPoint.y - leftPoint.y;
  const baseAngleLR = Math.atan2(dyLR, dxLR);

  const angleLO = baseAngleLR + angleAtLeftRad;

  const originX = leftPoint.x + origin2left * Math.cos(angleLO);
  const originY = leftPoint.y + origin2left * Math.sin(angleLO);

  return { x: originX, y: originY };
}

function midTriangle(a, b, c) {
  const midX = (a.x + b.x + c.x) / 3;
  const midY = (a.y + b.y + c.y) / 3;
  return { x: midX, y: midY };
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
