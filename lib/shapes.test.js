import { Circle } from "./shapes";
import { Triangle } from "./shapes";
import { Square } from "./shapes";

const sqr = new Square();

const tri = new Triangle();

// circle class test:
const crc = new Circle(50, blue);
expect(crc.render()).toEqual('<circle cx="50" cy="50" r="50" fill="blue" />');
