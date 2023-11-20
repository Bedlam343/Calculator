import cell from "util/cell";
import { OPERATOR } from "util/constants";

const add: cell = { type: OPERATOR, value: "+" };
const subtract: cell = { type: OPERATOR, value: "-" };
const multiply: cell = { type: OPERATOR, value: "x" };
const divide: cell = { type: OPERATOR, value: "/" };
const mod: cell = { type: OPERATOR, value: "mod" };
const percent: cell = { type: OPERATOR, value: "%" };
const equals: cell = { type: OPERATOR, value: "=" };
const allClear: cell = { type: OPERATOR, value: "AC" };

const operators = {
  add,
  subtract,
  multiply,
  divide,
  percent,
  equals,
  mod,
  allClear,
};

export default operators;
