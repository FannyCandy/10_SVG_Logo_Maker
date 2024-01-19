const inquirer = require('inquirer');
const fs = require('fs');
const Text = require("./lib/text");
const { Triangle, Circle, Square } = require("./lib/shapes");

function generateContent(answers) {
    let content = '';
    const text = new Text(answers.text, answers.textColor);

    if (answers.shape === 'Triangle') {
        const triangle = new Triangle(answers.shapeColor);
        content += `
        <svg viewBox="-150 -100 300 200" xmlns="http://www.w3.org/2000/svg">
        ${triangle.render()}
        ${text.render()}
        </svg>
         `
    } else if (answers.shape === 'Circle') {
        const circle = new Circle(answers.shapeColor);
        content += `
        <svg viewBox="-150 -100 300 200" xmlns="http://www.w3.org/2000/svg">
        ${circle.render()}
        ${text.render()}
        </svg>
         `
    } else if (answers.shape === 'Square') {
        const square = new Square(answers.shapeColor);
        content += `
        <svg viewBox="-150 -100 300 200" xmlns="http://www.w3.org/2000/svg">
        ${square.render()}
        ${text.render()}
        </svg>
         `
    } else {
        content += `
        <svg viewBox="-150 -100 300 200" xmlns="http://www.w3.org/2000/svg">
        ${text.render()}
        </svg>
         `
    }

    fs.writeFile(`./examples/${answers.shape}_logo.svg`, content, (err) => {
        err ? console.log(err) : console.log(`"${answers.shape}_log.svg generated in examples folder."`);
    });
}

function promptUser() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Please enter up to 3 characters.',
                validate: (input) => {
                    if (input.length > 3 || input.length === 0) {
                        return 'only allow enter 1 to 3 characters';
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a color keyword OR a hexadecimal number for your text.',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please select a shape.',
                choices: ['Triangle', 'Circle', 'Square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Please enter a color keyword OR a hexadecimal number for your shape.',
            }
        ])
        .then((answers) => generateContent(answers))
        .catch((err) => {
            console.log(err);
        });
}

promptUser();


// text -- enter up to three characters
// text color -- enter a color keyword (OR a hexadecimal number)
// a shape -- presented with a list of shapes to choose from: circle, triangle, and square
// the shape's color -- enter a color keyword (OR a hexadecimal number)

// -- SVG file is created named `logo.svg`
// -- output text "Generated logo.svg" is printed in the command line
// -- open `logo.svg` file in the browser with a 300x200 pixel image


{/* <svg viewBox="-150 -100 300 200" xmlns="http://www.w3.org/2000/svg">

    <polygon points="0, -85 -85, 85 85, 85" fill="lightgreen" />
    <circle cx="0" cy="0" r="85" fill="pink" />
    <rect x="-85" y="-85" width="170" height="170" fill="lightblue" />

    <text x="0" y="55" font-size="55" text-anchor="middle" font-family="monospace" fill="white">SVG</text>

</svg> */}