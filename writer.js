class CanvasWriter {
  constructor() {
    this.points = [];
    this.index = -1;
  }

  write(x, y, canvas) {
    this.points.push({ x, y });
    this.index++;

    if (this.index > 0) {
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(this.points[this.index - 1].x, this.points[this.index - 1].y);
      ctx.lineTo(this.points[this.index].x, this.points[this.index].y);
      ctx.strokeStyle = "black";
      ctx.stroke();
    }
  }

  reset() {
    this.points = [];
    this.index = -1;
  }
}

class FileWriter {
  constructor() {
    this.points = [];
  }

  write(x, y) {
    this.points.push({ x, y });
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
