const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should render a string for a lightgreen traingle logo', () => {
        const expectedString = '<polygon points="0, -85 -85, 85 85, 85" fill="lightgreen" />';
        const shape = new Triangle('lightgreen');
        expect(shape.render()).toEqual(expectedString);
    });
});

describe('circle', () => {
    test('should render a string for a pink circle logo', () => {
        const expectedString = '<circle cx="0" cy="0" r="85" fill="pink" />';
        const shape = new Circle('pink');
        expect(shape.render()).toEqual(expectedString);
    });
});

describe('square', () => {
    test('should render a string for a lightblue square logo', () => {
        const expectedString = '<rect x="-85" y="-85" width="170" height="170" fill="lightblue" />';
        const shape = new Square('lightblue');
        expect(shape.render()).toEqual(expectedString);
    });
});



// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
// example
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');