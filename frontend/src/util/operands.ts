import cell from "util/cell";
import { OPERAND } from "util/constants";

const empty: cell = { type: OPERAND, value: "" };
const zero: cell = { type: OPERAND, value: "0" };
const one: cell = { type: OPERAND, value: "1" };
const two: cell = { type: OPERAND, value: "2" };
const three: cell = { type: OPERAND, value: "3" };
const four: cell = { type: OPERAND, value: "4" };
const five: cell = { type: OPERAND, value: "5" };
const six: cell = { type: OPERAND, value: "6" };
const seven: cell = { type: OPERAND, value: "7" };
const eight: cell = { type: OPERAND, value: "8" };
const nine: cell = { type: OPERAND, value: "9" };

const decimal: cell = { type: OPERAND, value: "." };

const operands = {
  empty,
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  decimal,
};

export default operands;
