const inquirer = require('inquirer');
const fs = require('fs');
const prompt = require('./lib/prompt');


inquirer.prompt(prompt)
.then((answers) => {
    console.log(answers);
    // function for writing shape code based on type:
    const shapeChoice = function (answers) {
        if(answers.shape === 'Circle') {
            return `circle cx: '150' cy: '100' r: '100' fill: '${answers.shapeColor}'`;
        } else if (answers.shape === 'Square') {
            return `rect width: '200px' height: '200px' fill: '${answers.shapeColor}'`;
        } else {
            return `polygon points: '0,0 300,0 150,200' fill: '${answers.shapeColor}'`;
        }
    };
   
    const svgMake = 
    `<svg width: '300px' height: '200px'>
        <${shapeChoice(answers.shape)} />
            <text x="50%" y="50%" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
    </svg>     
    `;

    fs.writeFile('./examples/logo.svg', svgMake, (err) => {
        if (err) {
            return err;
        }
        console.log('Generated logo.svg in examples directory!')})


});






 