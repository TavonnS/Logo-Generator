export class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }

  render() {
    return `<circle cx="50" cy="50" r="${this.radius}" fill="${this.color}" />`;
  }
};

  export class Triangle {
    constructor(base, height, fillColor) {
      this.base = base;
      this.height = height;
      this.fillColor = fillColor;
    }

    render() {
      return 
      `<polygon points="0,0 ${this.base},0 ${this.base / 2},${this.height}" fill="${this.fillColor}" />`;
    }
  };

export class Square {
    constructor(sideLength, fillColor) {
      this.sideLength = sideLength;
      this.fillColor = fillColor;
    }
  
    render() {
      return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.fillColor}" />`;
    }
  };

