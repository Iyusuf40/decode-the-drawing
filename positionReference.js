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
    this.redToBlueDist = 0;
    this.redToGreenDist = 0;
    this.blueToGreenDist = 0;
  }

  updatePosition(ctx, drawingCanvas = null) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const threshod = 50;
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

    if (drawingCanvas) {
      const drawingCanvasCtx = drawingCanvas.getContext("2d");
      drawingCanvasCtx.beginPath();
      drawingCanvasCtx.moveTo(
        this.topReferencePoint.position.x,
        this.topReferencePoint.position.y
      );
      drawingCanvasCtx.lineTo(
        this.leftReferencePoint.position.x,
        this.leftReferencePoint.position.y
      );
      drawingCanvasCtx.lineTo(
        this.rightReferencePoint.position.x,
        this.rightReferencePoint.position.y
      );
      drawingCanvasCtx.closePath();
      drawingCanvasCtx.strokeStyle = "black";
      drawingCanvasCtx.stroke();

      const midTopLeft = {
        x:
          (this.topReferencePoint.position.x +
            this.leftReferencePoint.position.x) /
          2,
        y:
          (this.topReferencePoint.position.y +
            this.leftReferencePoint.position.y) /
          2,
      };
      const midTopRight = {
        x:
          (this.topReferencePoint.position.x +
            this.rightReferencePoint.position.x) /
          2,
        y:
          (this.topReferencePoint.position.y +
            this.rightReferencePoint.position.y) /
          2,
      };
      const midLeftRight = {
        x:
          (this.leftReferencePoint.position.x +
            this.rightReferencePoint.position.x) /
          2,
        y:
          (this.leftReferencePoint.position.y +
            this.rightReferencePoint.position.y) /
          2,
      };

      drawingCanvasCtx.fillStyle = "black";
      drawingCanvasCtx.font = "18px Arial";
      drawingCanvasCtx.fillText(
        rTob.toFixed(2),
        midTopLeft.x,
        midTopLeft.y - 5
      );
      drawingCanvasCtx.fillText(
        rTog.toFixed(2),
        midTopRight.x,
        midTopRight.y - 5
      );
      drawingCanvasCtx.fillText(
        bTor.toFixed(2),
        midLeftRight.x,
        midLeftRight.y - 5
      );

      const triangleMid = midTriangle(
        this.topReferencePoint.position,
        this.leftReferencePoint.position,
        this.rightReferencePoint.position
      );
      // draw triangleMid as a circle
      drawingCanvasCtx.beginPath();
      drawingCanvasCtx.arc(triangleMid.x, triangleMid.y, 5, 0, 2 * Math.PI);
      drawingCanvasCtx.fillStyle = "red";
      drawingCanvasCtx.fill();
      // write the tringleMid as well on the canvas
      drawingCanvasCtx.fillText(
        `(${triangleMid.x.toFixed(2)}, ${triangleMid.y.toFixed(2)})`,
        triangleMid.x,
        triangleMid.y - 5
      );

      // draw a triangle from (topReferencePoint.position.x, topReferencePoint.position.x)  to
      // (topReferencePoint.position.x, triangleMid.y) to (triangleMid.x, triangleMid.y)
      drawingCanvasCtx.beginPath();
      drawingCanvasCtx.moveTo(
        this.topReferencePoint.position.x,
        this.topReferencePoint.position.y
      );
      drawingCanvasCtx.lineTo(this.topReferencePoint.position.x, triangleMid.y);
      drawingCanvasCtx.lineTo(triangleMid.x, triangleMid.y);
      drawingCanvasCtx.closePath();
      drawingCanvasCtx.strokeStyle = "white";
      drawingCanvasCtx.stroke();
    }
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
    this.previous_x = canvasMidWidth;
    this.canvasMidWidth = canvasMidWidth;
    this.canvasMidHeight = canvasMidHeight;
    this.initArea = 0;
    this.initRedToBlueDist = 0;
    this.initRedToGreenDist = 0;
    this.initBlueToGreenDist = 0;
    this.redToBlueDist = 0;
    this.redToGreenDist = 0;
    this.blueToGreenDist = 0;
    this.initAngleAtRed = 0;
  }

  setRGB_distances(distances) {
    this.redToBlueDist = distances.redToBlue;
    this.redToGreenDist = distances.redToGreen;
    this.blueToGreenDist = distances.blueToGreen;
  }

  get_y_displacement() {
    const midHeight = this.canvasMidHeight;
    if (this.initArea === 0) {
      return midHeight;
    }

    const areaRatio = this.triangleBoundingBoxAreaRatio();
    let y = midHeight * areaRatio;
    // y = calculateNewDistanceBasedOnArea(midHeight, this.initArea, this.area);

    y = midHeight + (midHeight - y); // ensures y axis increases downwards of canvas
    return y;
  }

  triangleBoundingBoxAreaRatio() {
    return this.area / this.initArea;
  }

  get_x_displacement() {
    const midwidth = this.canvasMidWidth;

    const { opp, adj } = this.getOppositeAdjacent();
    const angle = calculateAngleFromOppositeAdjacent(opp, adj);
    const adjAsY = this.get_y_displacement();

    const oppAsX = calculateOpposite(angle, adjAsY);
    const x = oppAsX + midwidth;
    // console.table({
    //   angle,
    //   adjAsY,
    //   oppAsX,
    //   x,
    //   opp,
    //   adj,
    // });
    return x;
  }

  getOppositeAdjacent() {
    let adj = this.top.position.y - this.mid.y;
    let opp = this.mid.x - this.top.position.x;
    return { opp, adj };
  }

  getDrawingCoordinates() {
    return {
      x: this.get_x_displacement(),
      y: this.get_y_displacement(),
    };
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
