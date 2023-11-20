import { OPERAND } from "util/constants";

export type operand = {
  type: 'operand';
  value: string;
};

const empty: operand = { type: OPERAND, value: "" };
const zero: operand = { type: OPERAND, value: "0" };
const one: operand = { type: OPERAND, value: "1" };
const two: operand = { type: OPERAND, value: "2" };
const three: operand = { type: OPERAND, value: "3" };
const four: operand = { type: OPERAND, value: "4" };
const five: operand = { type: OPERAND, value: "5" };
const six: operand = { type: OPERAND, value: "6" };
const seven: operand = { type: OPERAND, value: "7" };
const eight: operand = { type: OPERAND, value: "8" };
const nine: operand = { type: OPERAND, value: "9" };

const decimal: operand = { type: OPERAND, value: "." };

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
