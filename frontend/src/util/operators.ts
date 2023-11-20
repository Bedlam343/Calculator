import { OPERATOR } from "util/constants";
import operations from "util/operations";

export type operator = {
  type: "operator";
  name: string;
  symbol: string;
  call?: (a: string, b: string) => string;
};

const add: operator = {
  type: OPERATOR,
  name: "add",
  symbol: "+",
  call: operations.add,
};
const subtract: operator = {
  type: OPERATOR,
  name: "subtract",
  symbol: "-",
  call: operations.subtract,
};
const multiply: operator = {
  type: OPERATOR,
  name: "multiply",
  symbol: "x",
  call: operations.multiply,
};
const divide: operator = {
  type: OPERATOR,
  name: "divide",
  symbol: "/",
  call: operations.divide,
};
const mod: operator = {
  type: OPERATOR,
  name: "mod",
  symbol: "mod",
  call: operations.mod,
};
const percent: operator = {
  type: OPERATOR,
  name: "percent",
  symbol: "%",
  call: operations.percent,
};

const equals: operator = { type: OPERATOR, symbol: "=", name: "equals" };
const allClear: operator = { type: OPERATOR, symbol: "AC", name: "allClear" };

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
