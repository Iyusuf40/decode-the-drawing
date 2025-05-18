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
    this.containerBox = {
      minX: Infinity,
      minY: Infinity,
      maxX: 0,
      maxY: 0,
    };
  }

  updatePosition(ctx, drawingCanvas = null) {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const threshod = 50;
    this.containerBox = {
      minX: Infinity,
      minY: Infinity,
      maxX: 0,
      maxY: 0,
    };
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
    this.containerBox.minX = Math.min(
      this.containerBox.minX,
      redBox.minX,
      blueBox.minX,
      greenBox.minX
    );
    this.containerBox.minY = Math.min(
      this.containerBox.minY,
      redBox.minY,
      blueBox.minY,
      greenBox.minY
    );
    this.containerBox.maxX = Math.max(
      this.containerBox.maxX,
      redBox.maxX,
      blueBox.maxX,
      greenBox.maxX
    );
    this.containerBox.maxY = Math.max(
      this.containerBox.maxY,
      redBox.maxY,
      blueBox.maxY,
      greenBox.maxY
    );
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
        this.containerBox.minX,
        this.containerBox.minY,
        this.containerBox.maxX - this.containerBox.minX,
        this.containerBox.maxY - this.containerBox.minY
      );
      drawingCanvasCtx.strokeStyle = "blue";
      drawingCanvasCtx.stroke();
    }
    this.topReferencePoint.updatePositionAndArea(redBox);
    this.leftReferencePoint.updatePositionAndArea(blueBox);
    this.rightReferencePoint.updatePositionAndArea(greenBox);
  }
}

class ReferencePoint {
  constructor(type = "") {
    this.type = type;
    this.position = { x: 0, y: 0 };
    this.previousPosition = { x: 0, y: 0 };
    this.area = 0;
    this.previousArea = 0;
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
    this.box = box;
  }

  getArea() {
    return this.area;
  }
}

class Triangle {
  constructor(topReferencePoint, leftReferencePoint, rightReferencePoint) {
    this.top = topReferencePoint;
    this.left = leftReferencePoint;
    this.right = rightReferencePoint;
    this.area = 0;
    this.previousArea = 0;
    this.topToRightDistance = 0;
    this.topToLeftDistance = 0;
    this.previousTopToRightDistance = 0;
    this.previousTopToLeftDistance = 0;
    this.initArea = 0;
  }

  getAreaChange() {
    if (this.initArea === 0) {
      return 360;
    }
    const areaRatio = this.area / this.initArea;
    let y = 360 * areaRatio;
    y = 360 + (360 - y);
    return y;
  }

  getDistanceChange() {
    if (this.right.previousArea === 0 || this.left.previousArea === 0) {
      return 640;
    }

    const areaRatio = this.right.getArea() / this.left.getArea();

    const x = 640 * areaRatio;

    return x;
  }

  distanceChanged() {
    if (
      this.previousTopToRightDistance === 0 &&
      this.previousTopToLeftDistance === 0
    ) {
      return false;
    }
    return (
      this.topToLeftDistance !== this.previousTopToLeftDistance ||
      this.topToRightDistance !== this.previousTopToRightDistance
    );
  }

  update() {
    if (this.previousArea === 0) {
      this.initArea = this.area;
    }
    this.previousArea = this.area;
    this.previousTopToRightDistance = this.topToRightDistance;
    this.previousTopToLeftDistance = this.topToLeftDistance;
    this.area = this.calculateArea();
    this.updateDistances();
  }

  updateDistances() {
    this.topToRightDistance = distance(this.top.position, this.right.position);
    this.topToLeftDistance = distance(this.top.position, this.left.position);
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
  return Math.sqrt(
    Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
  );
}

function calculateNewDistanceBasedOnArea(initialArea, newArea) {
  if (newArea === 0 || initialArea === 0) return 1;
  const areaRatio = initialArea / newArea;
  const distanceRatio = Math.sqrt(Math.abs(areaRatio));
  return distanceRatio * Math.sign(areaRatio);
}
