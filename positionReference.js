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

      const scale = 2;
      this.Ftop = (scale * (Ptop * D)) / W;
      this.Fright = (scale * (Pright * D)) / W;
      this.Fleft = (scale * (Pleft * D)) / W;

      this.W = W;
    }
    this.left = left;
    this.right = right;
    this.top = top;
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

    const U = this.right.position.x;
    const Vx = this.top.position.x;
    const Vy = this.top.position.y;

    const x = (square(r1) - square(r2) + square(U)) / (2 * U);
    const y =
      (square(r1) - square(r3) + square(Vx) + square(Vy) - 2 * Vx * x) /
      (2 * Vy);

    const opResult = square(r1) - square(x) - square(y);

    const z = sqrt(Math.abs(opResult));

    return this.translateToOtherPlane({ x, y, z });
  }

  translateToOtherPlane({ x, y, z }) {
    // return {
    //   x: x,
    //   y: z - this.canvas.height / 2 - 225,
    // };

    return {
      x: x * 0.5 + this.canvas.width * 0.3,
      y: z * 0.5 - this.canvas.height * 0.8,
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
