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
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const ignoreColorThreshold = 80;
    const includeColorThreshold = 100;
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

      if (
        r > includeColorThreshold &&
        g < ignoreColorThreshold &&
        b < ignoreColorThreshold
      ) {
        redBox.minX = Math.min(redBox.minX, point.x);
        redBox.minY = Math.min(redBox.minY, point.y);
        redBox.maxX = Math.max(redBox.maxX, point.x);
        redBox.maxY = Math.max(redBox.maxY, point.y);
      }
      if (
        r < ignoreColorThreshold &&
        g < ignoreColorThreshold &&
        b > includeColorThreshold
      ) {
        blueBox.minX = Math.min(blueBox.minX, point.x);
        blueBox.minY = Math.min(blueBox.minY, point.y);
        blueBox.maxX = Math.max(blueBox.maxX, point.x);
        blueBox.maxY = Math.max(blueBox.maxY, point.y);
      }
      if (
        r < ignoreColorThreshold &&
        g > includeColorThreshold &&
        b < ignoreColorThreshold
      ) {
        greenBox.minX = Math.min(greenBox.minX, point.x);
        greenBox.minY = Math.min(greenBox.minY, point.y);
        greenBox.maxX = Math.max(greenBox.maxX, point.x);
        greenBox.maxY = Math.max(greenBox.maxY, point.y);
      }
    }
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
    }
    this.topReferencePoint.updatePositionAndArea(redBox);
    this.leftReferencePoint.updatePositionAndArea(blueBox);
    this.rightReferencePoint.updatePositionAndArea(greenBox);
    this.rightReferencePoint.update();
    this.leftReferencePoint.update();
    this.topReferencePoint.update();
  }
}

class ReferencePoint {
  constructor(onSizeIncrease, onSizeDecrease) {
    this.position = { x: 0, y: 0 };
    this.previousPosition = { x: 0, y: 0 };
    this.area = 0;
    this.previousArea = 0;
    this.onSizeIncrease = onSizeIncrease;
    this.onSizeDecrease = onSizeDecrease;
  }

  updatePositionAndArea(box) {
    this.previousPosition = this.position;
    this.previousArea = this.area;
    this.position = {
      x: (box.minX + box.maxX) / 2,
      y: (box.minY + box.maxY) / 2,
    };
    this.area = (box.maxX - box.minX) * (box.maxY - box.minY);
  }

  getAreaIncreaseRatio() {
    if (!this.previousArea) {
      // first update, therefore assume no change
      return 1;
    }
    return this.area / this.previousArea;
  }

  getAreaDecreaseRatio() {
    if (!this.previousArea) {
      // first update, therefore assume no change
      return 1;
    }
    return this.previousArea / this.area;
  }

  gotBigger() {
    return this.area > this.previousArea;
  }

  gotSmaller() {
    return this.area < this.previousArea;
  }

  update() {
    if (!this.previousArea || !this.previousPosition) {
      // first update, therefore skip
      return;
    }

    if (this.area > this.previousArea) {
      this.onSizeIncrease(this);
    }

    if (this.area < this.previousArea) {
      this.onSizeDecrease(this);
    }
  }
}
