const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const loadVideoButton = document.getElementById("loadVideoButton");
const loadSerializedVideoButton = document.getElementById(
  "loadSerializedVideoButton"
);
const fileInput = document.getElementById("videoInput");
const serializedVideoInput = document.getElementById("serializedVideoInput");
const coordinatesInput = document.getElementById("coordinatesInput");
const loadCoordinatesButton = document.getElementById("loadCoordinatesButton");
const replayVideoButton = document.getElementById("replayVideoButton");
const playVideoButton = document.getElementById("playVideoButton");
const pauseVideoButton = document.getElementById("pauseVideoButton");
const drawingCanvas = document.getElementById("drawingCanvas");

let videoElement = null;
let positionReference = null;
let positionDecoder = null;
let animationFramHandle = null;
let videoFileName = "";
const canvasWriter = new CanvasWriter();
const fileWriter = new FileWriter();
const videoSerializer = new VideoSerializer();
let pixelsPerCmCache = 0;

// configuration

let DRAW_BALL_AREAS = true;
let DRAW_DECODED_DRAWING_LIVE = true;
let DOWNLOAD_COORDINATES_AS_FILE_ON_VIDEO_END = false;
let DOWNLOAD_VIDEO_AS_FILE_ON_VIDEO_END = false;

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
  // positionDecoder = new TrilaterationHandler(canvas);
  positionDecoder = new TriangulationHandler(canvas);
}

function resetDrawings() {
  const drawingCanvasCtx = drawingCanvas.getContext("2d", {
    willReadFrequently: true,
  });
  drawingCanvasCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
  canvasWriter?.reset();
  fileWriter?.reset();
  videoSerializer?.reset();
}

function updateCanvas() {
  if (videoElement) {
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
    const debugCanvas = DRAW_BALL_AREAS ? canvas : null;
    positionReference.updatePosition(ctx, debugCanvas);
    positionDecoder.update(
      positionReference.leftReferencePoint,
      positionReference.rightReferencePoint,
      positionReference.topReferencePoint
    );

    const { x, y } = positionDecoder.getCurrentPosition();
    if (positionDecoder.isPenDown()) {
      if (DRAW_DECODED_DRAWING_LIVE) {
        canvasWriter.write(x, y, drawingCanvas);
      }

      if (DOWNLOAD_COORDINATES_AS_FILE_ON_VIDEO_END) {
        fileWriter.write(x, y);
      }
    }

    if (DOWNLOAD_VIDEO_AS_FILE_ON_VIDEO_END) {
      videoSerializer.write(
        positionReference.leftReferencePoint,
        positionReference.rightReferencePoint,
        positionReference.topReferencePoint
      );
    }

    animationFramHandle = requestAnimationFrame(updateCanvas);
  }
}

function playSerializedVideo(serializedVideo) {
  for (const state of serializedVideo) {
    positionDecoder.update(state.left, state.right, state.top);
    const { x, y } = positionDecoder.getCurrentPosition();
    canvasWriter.write(x, y, drawingCanvas);
  }
}

// event handlers

loadSerializedVideoButton.addEventListener("click", () => {
  serializedVideoInput.click();
});

serializedVideoInput.addEventListener("change", handleSerializedVideoFile);

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
    videoFileName = file.name;

    videoElement.addEventListener("loadeddata", () => {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      videoElement.loop = false;

      // Audio analysis setup
      const audioContext = new AudioContext();
      const source = audioContext.createMediaElementSource(videoElement);
      const analyser = audioContext.createAnalyser();

      source.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 2048;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      // Function to get the average volume
      function getAverageVolume(array) {
        let values = 0;
        let average;

        let length = array.length;
        for (let i = 0; i < length; i++) {
          values += array[i];
        }

        average = values / length;
        return average;
      }
      resetDrawings();
      init();
      positionDecoder.setAudioAnalyser(analyser, dataArray, getAverageVolume);
      videoElement.play();
      updateCanvas();
    });

    videoElement.addEventListener("ended", () => {
      videoElement.loop = false;
      cancelAnimationFrame(animationFramHandle);
      if (DOWNLOAD_COORDINATES_AS_FILE_ON_VIDEO_END) {
        fileWriter.download(`${videoFileName}.txt`);
      }
      if (DOWNLOAD_VIDEO_AS_FILE_ON_VIDEO_END) {
        videoSerializer.download(`${videoFileName}.json`);
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

document.addEventListener("keydown", (event) => {
  if (event.key === "d") {
    DRAW_BALL_AREAS = !DRAW_BALL_AREAS;
  }
  if (event.key === " ") {
    event.preventDefault();
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play();
        updateCanvas();
      } else {
        videoElement.pause();
        cancelAnimationFrame(animationFramHandle);
      }
    }
  }
  if (["1", "2", "3", "4", "5", "6"].includes(event.key)) {
    const imagesData = [
      circleVideoData,
      starVideoData,
      houseVideoData,
      questionMarkVideoData,
      treeVideoData,
      animeCharacterVideoData,
    ];
    const imageData = imagesData[parseInt(event.key) - 1];
    resetDrawings();
    const serializedVideo = imageData.map((state) => {
      return {
        left: ReferencePoint.fromBox(state.left),
        right: ReferencePoint.fromBox(state.right),
        top: ReferencePoint.fromBox(state.top),
      };
    });
    playSerializedVideo(serializedVideo);
  }
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
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (coordinates.length > 0) {
    for (let i = 1; i < coordinates.length; i++) {
      canvasWriter.write(coordinates[i].x, coordinates[i].y, canvas);
    }
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

function handleSerializedVideoFile(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileContent = event.target.result;
      const data = JSON.parse(fileContent);
      const serializedVideo = data.map((state) => {
        return {
          left: ReferencePoint.fromBox(state.left),
          right: ReferencePoint.fromBox(state.right),
          top: ReferencePoint.fromBox(state.top),
        };
      });
      playSerializedVideo(serializedVideo);
    };
    reader.readAsText(file);
  }
}
