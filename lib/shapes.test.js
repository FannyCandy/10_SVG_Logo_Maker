













// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
// example
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');