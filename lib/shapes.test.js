const { Circle } = require('./shapes');
const { Triangle } = require('./shapes');
const { Square } = require('./shapes');

// const sqr = new Square();

// const tri = new Triangle();

// circle class test:
describe('Circle test', () => {
    describe('render', () => {
      it('should render a svg shape', () => {
        const crc = new Circle();        
        expect(crc.render(50, 'blue')).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
      });
    });
  });
  



