class CanvasWriter {
  constructor() {
    this.points = [];
    this.index = -1;
  }

  write(x, y, canvas) {
    this.points.push({ x, y });
    this.index++;

    if (this.index > 0) {
      const start = this.points[this.index - 1];
      const end = this.points[this.index];
      const distance = Math.sqrt(
        Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
      );
      if (distance > SKIPPED_DISTANCE) {
        return;
      }

      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(this.points[this.index - 1].x, this.points[this.index - 1].y);
      ctx.lineTo(this.points[this.index].x, this.points[this.index].y);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  reset() {
    this.points = [];
    this.index = -1;
  }

  peek(count = 20) {
    console.log(this.points.slice(-count));
  }
}

class FileWriter {
  constructor() {
    this.points = [];
  }

  write(x, y) {
    this.points.push({ x, y });
  }

  reset() {
    this.points = [];
  }

  download(filename = "drawing.txt") {
    const data = this.points.map((point) => `${point.x} ${point.y}`).join("\n");
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}

class VideoSerializer {
  constructor() {
    this.state = [];
  }

  write(left, right, top, isPenDown) {
    this.state.push({
      left: JSON.parse(JSON.stringify(left.box)),
      right: JSON.parse(JSON.stringify(right.box)),
      top: JSON.parse(JSON.stringify(top.box)),
      isPenDown,
    });
  }

  reset() {
    this.state = [];
  }

  download(filename = "video.json") {
    const data = JSON.stringify(this.state);
    const blob = new Blob([data], { type: "text/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}
