const inquirer = require('inquirer');
const fs = require('fs');
const prompt = require('./lib/prompt');


inquirer.prompt(prompt)
.then((answers) => {
    console.log(answers);
    // function for writing shape code based on answers:
    const shapeChoice = function (answers) {
        if(answers.shape == 'Circle') {
            return `<circle cx="150" cy="100" r="100" fill="${answers.shapeColor}" />
            <text x="50%" y="50%" fill="${answers.textColor}" alignment-baseline="middle" text-anchor="middle" font-size="50px">${answers.text}</text>
            `;
        } else if (answers.shape == 'Square') {
            return `<rect width="200px" height="200px" fill="${answers.shapeColor}" />
            <text x="33%" y="50%" fill="${answers.textColor}" alignment-baseline="middle" text-anchor="middle" font-size="50px">${answers.text}</text>
            `;
        } else {
            return `<polygon points="0,0 300,0 150,200" fill="${answers.shapeColor}" />
            <text x="50%" y="50%" fill="${answers.textColor}" alignment-baseline="middle" text-anchor="middle" font-size="50px">${answers.text}</text>
            `;
        }
    };
   
    const svgMake = 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeChoice(answers)}
     </svg>     
    `;

    fs.writeFile('./examples/logo.svg', svgMake, (err) => {
        if (err) {
            return err;
        }
        console.log('Generated logo.svg in examples directory!')})


});






 