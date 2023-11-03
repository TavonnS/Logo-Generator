const Circle = require('./shapes');

// const sqr = new Square();

// const tri = new Triangle();

// circle class test:
test('Circle', () => {
    const c =  new Circle();
    c.radius = "50";
    c.color = "blue";


    const result = c.render();

    expect(result).toBe('<circle cx="50" cy="50" r="50" fill="blue" />');
});
