const {Circle} = require('./shapes');
const {Square} = require('./shapes');
const {Triangle} = require('./shapes');

// square test:
test('Square', () => {
    const sqr = new Square(100, "blue");

    const result = sqr.render();

    expect(result).toBe('<rect width="100" height="100" fill="blue" />');

});

// triangle test:
test('Triangle', () => {
    const t = new Triangle(50,50,"blue");

    const result = t.render();

    expect(result).toBe('<polygon points="0,0 50,0 25,50" fill="blue" />');

});

// circle class test:
test('Circle', () => {
    const c =  new Circle(50,"blue");
    
    const result = c.render();

    expect(result).toBe('<circle cx="50" cy="50" r="50" fill="blue" />');
});
