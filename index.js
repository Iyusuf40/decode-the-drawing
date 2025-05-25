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
let triangle = null;
let animationFramHandle = null;
let videoFileName = "";
const canvasWriter = new CanvasWriter();
const fileWriter = new FileWriter();

// configuration

const DRAW_BALL_AREAS = true;
const DRAW_DECODED_DRAWING_LIVE = true;
const DOWNLOAD_COORDINATES_AS_FILE_ON_VIDEO_END = false;

function init() {
  const rightReferencePoint = new ReferencePoint("rightRef");
  const leftReferencePoint = new ReferencePoint("leftRef");
  const topReferencePoint = new ReferencePoint("topRef");
  positionReference = new PositionReference(
    canvas.width,
    canvas.height,
    leftReferencePoint,
    rightReferencePoint,
    topReferencePoint
  );
  triangle = new Triangle(
    topReferencePoint,
    leftReferencePoint,
    rightReferencePoint,
    canvas.width / 2,
    canvas.height / 2
  );
}

function resetDrawings() {
  const drawingCanvasCtx = drawingCanvas.getContext("2d");
  drawingCanvasCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  canvasWriter?.reset();
  fileWriter?.reset();
}

function updateCanvas() {
  if (videoElement) {
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const debugCanvas = DRAW_BALL_AREAS ? canvas : null;
    positionReference.updatePosition(ctx, debugCanvas);
    triangle.setRGB_distances(positionReference.getRGB_Distances());
    triangle.update();

    const { x, y } = triangle.getDrawingCoordinates();
    if (DRAW_DECODED_DRAWING_LIVE) {
      canvasWriter.write(x, y, drawingCanvas);
    }

    if (DOWNLOAD_COORDINATES_AS_FILE_ON_VIDEO_END) {
      fileWriter.write(x, y);
    }

    animationFramHandle = requestAnimationFrame(updateCanvas);
  }
}

// event handlers

loadCoordinatesButton.addEventListener("click", () => {
  coordinatesInput.click();
});

coordinatesInput.addEventListener("change", handleCoordinatesFile);

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
    videoFileName = file.name;

    videoElement.addEventListener("loadeddata", () => {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      videoElement.loop = false;
      resetDrawings();
      videoElement.play();
      updateCanvas();
    });

    videoElement.addEventListener("ended", () => {
      videoElement.loop = false;
      cancelAnimationFrame(animationFramHandle);
      if (DOWNLOAD_COORDINATES_AS_FILE_ON_VIDEO_END) {
        fileWriter.download(`${videoFileName}.txt`);
      }
    });
  }
});

replayVideoButton.addEventListener("click", () => {
  if (videoElement) {
    cancelAnimationFrame(animationFramHandle);
    videoElement.currentTime = 0;
    videoElement.play();
    resetDrawings();
    init();
    updateCanvas();
  }
});

playVideoButton.addEventListener("click", () => {
  if (videoElement) {
    videoElement.pause();
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

document.addEventListener("DOMContentLoaded", () => {
  if (DRAW_DECODED_DRAWING_LIVE) {
    drawingCanvas.style.display = "block";
  } else {
    drawingCanvas.style.display = "none";
  }
  init();
});

// utilities

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
