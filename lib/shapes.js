class Shape {
  constructor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="0, -85 -85, 85 85, 85" fill="${this.color}" />`
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="0" cy="0" r="85" fill="${this.color}" />`
  }
}

class Square extends Shape {
  render() {
    return `<rect x="-85" y="-85" width="170" height="170" fill="${this.color}" />`
  }
}

module.exports = { Triangle, Circle, Square };

// The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest.
// place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class
// and use inheritance to reuse the code in the child classes.
