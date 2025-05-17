const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const loadVideoButton = document.getElementById("loadVideoButton");
const fileInput = document.getElementById("videoInput");
const coordinatesInput = document.getElementById("coordinatesInput");
const loadCoordinatesButton = document.getElementById("loadCoordinatesButton");
const replayVideoButton = document.getElementById("replayVideoButton");
const playVideoButton = document.getElementById("playVideoButton");
const pauseVideoButton = document.getElementById("pauseVideoButton");
const drawingCanvas = document.getElementById("drawingCanvas");

let videoElement = null;
let positionReference = null;
let animationFramHandle = null;
const canvasWriter = new CanvasWriter();
const fileWriter = new FileWriter();

const startPoint = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

function resetStartPoint() {
  startPoint.x = canvas.width / 2;
  startPoint.y = canvas.height / 2;
}

const DRAW_BALL_AREAS = true;
const DRAW_LIVE = true;
const DOWNLOAD_COORDINATES_AS_FILE = true;

let decision = {
  moveRightScale: 0,
  moveLeftScale: 0,
  moveForwardScale: 0,
  moveBackwardScale: 0,
};

function resetDecision() {
  decision.moveRightScale = 0;
  decision.moveLeftScale = 0;
  decision.moveForwardScale = 0;
  decision.moveBackwardScale = 0;
}

function getRightAffinity(refPoint) {
  decision.moveRightScale = refPoint.getAreaIncreaseRatio();
}

function getRightAversion(refPoint) {
  decision.moveLeftScale = refPoint.getAreaDecreaseRatio();
}

function getLeftAffinity(refPoint) {
  decision.moveLeftScale = refPoint.getAreaIncreaseRatio();
}

function getLeftAversion(refPoint) {
  decision.moveRightScale = refPoint.getAreaDecreaseRatio();
}

function updateForwardBackwardScale(leftRefpoint, rightRefpoint) {
  if (leftRefpoint.gotBigger() && rightRefpoint.gotBigger()) {
    decision.moveForwardScale = Math.max(
      leftRefpoint.getAreaIncreaseRatio(),
      rightRefpoint.getAreaIncreaseRatio()
    );
  }

  if (leftRefpoint.gotSmaller() && rightRefpoint.gotSmaller()) {
    decision.moveBackwardScale = Math.max(
      leftRefpoint.getAreaDecreaseRatio(),
      rightRefpoint.getAreaDecreaseRatio()
    );
  }
}

const rightReferencePoint = new ReferencePoint(
  getRightAffinity,
  getRightAversion
);

const leftReferencePoint = new ReferencePoint(getLeftAffinity, getLeftAversion);
const topReferencePoint = new ReferencePoint(
  () => {},
  () => {}
);

loadCoordinatesButton.addEventListener("click", () => {
  coordinatesInput.click();
});

coordinatesInput.addEventListener("change", handleCoordinatesFile);

function handleCoordinatesFile(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileContent = event.target.result;
      const coordinates = parseCoordinates(fileContent);
      drawImageFromCoordinates(coordinates);
    };
    reader.readAsText(file);
  }
}

function parseCoordinates(fileContent) {
  const coordinates = [];
  if (!fileContent) {
    return coordinates;
  }
  const lines = fileContent.trim().split("\n");
  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts.length === 2) {
      const x = parseInt(parts[0], 10);
      const y = parseInt(parts[1], 10);
      if (!isNaN(x) && !isNaN(y)) {
        coordinates.push({ x, y });
      }
    }
  }
  return coordinates;
}

function clearDrawingCanvas() {
  const drawingCanvasCtx = drawingCanvas.getContext("2d");
  drawingCanvasCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  canvasWriter.reset();
  resetStartPoint();
  resetDecision();
}

function drawImageFromCoordinates(coordinates) {
  const canvas = document.getElementById("drawingCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  if (coordinates.length > 0) {
    ctx.moveTo(coordinates[0].x, coordinates[0].y);
    for (let i = 1; i < coordinates.length; i++) {
      ctx.lineTo(coordinates[i].x, coordinates[i].y);
    }
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

function updateCanvas() {
  if (videoElement) {
    resetDecision();
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const debugCanvas = DRAW_BALL_AREAS ? canvas : null;
    positionReference.updatePosition(ctx, debugCanvas);
    updateForwardBackwardScale(leftReferencePoint, rightReferencePoint);
    // console.log("\n\n", JSON.stringify(decision, null, 2));

    const { x, y } = getDrawingCoordinates(decision);
    if (DRAW_LIVE) {
      canvasWriter.write(x, y, drawingCanvas);
    }

    if (DOWNLOAD_COORDINATES_AS_FILE) {
      fileWriter.write(x, y);
    }

    animationFramHandle = requestAnimationFrame(updateCanvas);
  }
}

function getDrawingCoordinates(decision) {
  const xScaler = 6;
  const yScaler = 1.5;
  if (decision.moveRightScale) {
    startPoint.x += decision.moveRightScale * xScaler;
  }
  if (decision.moveLeftScale) {
    startPoint.x -= decision.moveLeftScale * xScaler;
  }
  if (decision.moveForwardScale) {
    startPoint.y -= decision.moveForwardScale * yScaler;
  }
  if (decision.moveBackwardScale) {
    startPoint.y += decision.moveBackwardScale * yScaler;
  }

  return { x: startPoint.x, y: startPoint.y };
}

loadVideoButton.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const videoURL = URL.createObjectURL(file);
    videoElement = document.createElement("video");
    videoElement.src = videoURL;
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;

    videoElement.addEventListener("loadeddata", () => {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      videoElement.loop = false;
      positionReference = new PositionReference(
        canvas.width,
        canvas.height,
        rightReferencePoint,
        leftReferencePoint,
        topReferencePoint
      );
      clearDrawingCanvas();
      videoElement.play();
      updateCanvas();
    });

    videoElement.addEventListener("ended", () => {
      videoElement.loop = false;
      cancelAnimationFrame(animationFramHandle);
      if (DOWNLOAD_COORDINATES_AS_FILE) {
        fileWriter.download();
      }
    });
  }
});

replayVideoButton.addEventListener("click", () => {
  if (videoElement) {
    videoElement.currentTime = 0;
    videoElement.play();
    clearDrawingCanvas();
    updateCanvas();
  }
});

playVideoButton.addEventListener("click", () => {
  if (videoElement) {
    videoElement.play();
    updateCanvas();
  }
});

pauseVideoButton.addEventListener("click", () => {
  if (videoElement) {
    videoElement.pause();
    cancelAnimationFrame(animationFramHandle);
  }
});
