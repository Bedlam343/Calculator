import operators from "util/operators";
import operands from "util/operands";

const GRID = [
  [operators.allClear, operators.flipSign, operators.modulo, operators.divide],
  [operands.seven, operands.eight, operands.nine, operators.multiply],
  [operands.four, operands.five, operands.six, operators.subtract],
  [operands.one, operands.two, operands.three, operators.add],
  [operands.empty, operands.zero, operands.decimal, operators.equals],
];

export default GRID;
