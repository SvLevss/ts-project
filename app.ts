import { Shape } from "./ShapeInterface"
import { Rectangle } from "./Rectangle"
import { Square } from "./Square"
import { ShapesContainer } from "./ShapesContainer"
import { Cipher } from "./Cipher.1"
import { Decipher } from "./Decipher.1"

const inputStr = 'Hello word!';
const choiceC = new Cipher('a'.charCodeAt(0), 'z'.charCodeAt(0), 50);
const strS: string = choiceC.cipher(inputStr);
console.log(inputStr, strS, choiceC.decipher(strS));
const choiceD = new Decipher('a'.charCodeAt(0), 'z'.charCodeAt(0), 50);
const strA: string = choiceD.cipher(inputStr);
console.log(inputStr, strA, choiceD.decipher(strA));

const shapes: Array<Shape> = [
    new Rectangle(3, 4),
    new Square(5)
];

const container = new ShapesContainer(shapes);

const sumOfShapes: number = container.getSquare();
const sumOfPerim: number = container.getPerimeter();
console.log(sumOfShapes, sumOfPerim);

