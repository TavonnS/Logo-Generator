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
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Rectangle', 'Triangle'],
        message: 'What shape are you making?'
    },
    
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color is your shape? Enter color keyword or hexidecimal color:'
    }
    ];

module.exports = prompt;
