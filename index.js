const inquirer = require('inquirer');
const fs = require('fs');
const prompt = require('./lib/prompt');

inquirer.prompt(prompt)
.then((answers) => {
    console.log(answers);
    
    const shapeChoice = function (answers) {
        if(answers.shape === 'Circle') {
            return circle;
        } else if (answers.shape === 'Square') {
            return rect;
        } else {
            return polygon;
        }
    };

    const svgMake = 
    `<svg width: '300px' height: '200px'>
        <${shapeChoice} width: '300px' height: '200px' fill: '${answers.shapeColor}' />
            <text x="50%" y="50%" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
    </svg>     
    `;
    fs.writeFile('./examples/logo.svg', svgMake, (err) => {
        if (err) {
            return err;
        }
        console.log('Generated logo.svg in examples directory!')})


});






 