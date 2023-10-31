const prompt = 
[
    {
        type: 'input',
        name: 'text',
        message: 'What text do you want to display? Enter three characters:'
    },    

    {
        type: 'input',
        name: 'textColor',
        message: 'What color is your text? Enter color keyword or hexidecimal color:'
    },   

    {
        type: 'checkbox',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle'],
        message: 'What shape are you making?'
    },
    
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color is your shape? Enter color keyword or hexidecimal color:'
    }
    ];



    )
.then((answers) => {
    console.log(answers);
    /*
    const svgMake = 
    `<svg width: 300px height: 200px>
        <${answers.shape} width: 300px height: 200px fill: ${answers.shapeColor}>
            <text x="50%" y="50%" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
    </svg>     
    `;


fs.writeFile('./examples/logo.svg', svgMake, (err) => {
        if (err) {
            return err;
        }
        console.log('Generated logo.svg in examples directory!')}); */
});

module.exports = inquirer;
