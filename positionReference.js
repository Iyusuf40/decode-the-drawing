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
    return this.getCurrentPositionDistorted();
    // return this.getCurrentPositionNonDistorted();
  }

  getCurrentPositionNonDistorted() {
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

    return this.translateToOtherPlane({ x, y: z });
  }

  getCurrentPositionDistorted() {
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
    return {
      x: x * 0.2 + this.canvas.width * 0.5,
      y: y * 0.2 + this.canvas.height * 0.01,
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

function getLineAngle(p1, p2) {
  return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 4;
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

function vecSub(v1, v2) {
  return {
    x: v1.x - v2.x,
    y: v1.y - v2.y,
  };
}

function vecAdd(v1, v2) {
  return {
    x: v1.x + v2.x,
    y: v1.y + v2.y,
  };
}

/**
 * A collection of helper functions for 3D vector mathematics,
 * replicating the functionality needed from Python's numpy library.
 */
const VectorMath = {
  /**
   * Subtracts vector v2 from vector v1.
   * @param {{x: number, y: number, z: number}} v1
   * @param {{x: number, y: number, z: number}} v2
   * @returns {{x: number, y: number, z: number}} The resulting vector.
   */
  subtract: (v1, v2) => ({ x: v1.x - v2.x, y: v1.y - v2.y, z: v1.z - v2.z }),

  /**
   * Adds two vectors.
   * @param {{x: number, y: number, z: number}} v1
   * @param {{x: number, y: number, z: number}} v2
   * @returns {{x: number, y: number, z: number}} The resulting vector.
   */
  add: (v1, v2) => ({ x: v1.x + v2.x, y: v1.y + v2.y, z: v1.z + v2.z }),

  /**
   * Calculates the dot product of two vectors.
   * @param {{x: number, y: number, z: number}} v1
   * @param {{x: number, y: number, z: number}} v2
   * @returns {number} The dot product.
   */
  dot: (v1, v2) => v1.x * v2.x + v1.y * v2.y + v1.z * v2.z,

  /**
   * Calculates the cross product of two vectors.
   * @param {{x: number, y: number, z: number}} v1
   * @param {{x: number, y: number, z: number}} v2
   * @returns {{x: number, y: number, z: number}} The resulting vector.
   */
  cross: (v1, v2) => ({
    x: v1.y * v2.z - v1.z * v2.y,
    y: v1.z * v2.x - v1.x * v2.z,
    z: v1.x * v2.y - v1.y * v2.x,
  }),

  /**
   * Multiplies a vector by a scalar value.
   * @param {{x: number, y: number, z: number}} v
   * @param {number} s The scalar.
   * @returns {{x: number, y: number, z: number}} The resulting vector.
   */
  multiplyScalar: (v, s) => ({ x: v.x * s, y: v.y * s, z: v.z * s }),

  /**
   * Calculates the magnitude (or norm) of a vector.
   * @param {{x: number, y: number, z: number}} v
   * @returns {number} The magnitude of the vector.
   */
  norm: (v) => Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z),
};

/**
 * Solves for the intersection point of three spheres using trilateration.
 * This is a direct JavaScript translation of the provided Python script's logic.
 *
 * @param {{x: number, y: number, z: number}} p1 Center of the first sphere.
 * @param {{x: number, y: number, z: number}} p2 Center of the second sphere.
 * @param {{x: number, y: number, z: number}} p3 Center of the third sphere.
 * @param {number} distA Distance from the intersection point to p1.
 * @param {number} distB Distance from the intersection point to p2.
 * @param {number} distC Distance from the intersection point to p3.
 * @returns {{x: number, y: number, z: number} | null} The coordinates of the intersection point, or null if no solution exists.
 */
function solveTrilateration(p1, p2, p3, distA, distB, distC) {
  // Create a new coordinate system based on the positions of the three reference points.
  // ex is the unit vector in the direction from p1 to p2.
  let ex_unnormalized = VectorMath.subtract(p2, p1);
  const d = VectorMath.norm(ex_unnormalized);
  if (d === 0) {
    console.error("Points p1 and p2 cannot be the same.");
    return null;
  }
  const ex = VectorMath.multiplyScalar(ex_unnormalized, 1 / d);

  // i is the x-component of the vector from p1 to p3 in the new coordinate system.
  const i = VectorMath.dot(ex, VectorMath.subtract(p3, p1));

  // ey is the unit vector in the y-direction of the new coordinate system.
  let ey_unnormalized = VectorMath.subtract(
    VectorMath.subtract(p3, p1),
    VectorMath.multiplyScalar(ex, i)
  );
  const ey_norm = VectorMath.norm(ey_unnormalized);
  if (ey_norm === 0) {
    console.error("Points p1, p2, and p3 cannot be collinear.");
    return null;
  }
  const ey = VectorMath.multiplyScalar(ey_unnormalized, 1 / ey_norm);

  // ez is the unit vector in the z-direction, found by the cross product of ex and ey.
  const ez = VectorMath.cross(ex, ey);

  // j is the y-component of the vector from p1 to p3 in the new coordinate system.
  const j = VectorMath.dot(ey, VectorMath.subtract(p3, p1));

  // --- Plug and chug using the formulas from Wikipedia ---
  // Calculate the coordinates (x, y, z) in the transformed coordinate system.
  const x =
    (Math.pow(distA, 2) - Math.pow(distB, 2) + Math.pow(d, 2)) / (2 * d);
  const y =
    (Math.pow(distA, 2) -
      Math.pow(distC, 2) +
      Math.pow(i, 2) +
      Math.pow(j, 2)) /
      (2 * j) -
    (i / j) * x;

  const z_squared = Math.pow(distA, 2) - Math.pow(x, 2) - Math.pow(y, 2);
  if (z_squared < 0) {
    console.error(
      "No real solution for z exists. The spheres do not intersect at a single point."
    );
    return null;
  }
  const z = Math.sqrt(z_squared);

  // --- Convert the point back to the original coordinate system ---
  // triPt = P1 + x*ex + y*ey + z*ez
  const triPt_x = VectorMath.multiplyScalar(ex, x);
  const triPt_y = VectorMath.multiplyScalar(ey, y);
  const triPt_z = VectorMath.multiplyScalar(ez, z);

  const finalPoint = VectorMath.add(
    p1,
    VectorMath.add(triPt_x, VectorMath.add(triPt_y, triPt_z))
  );

  return finalPoint;
}
