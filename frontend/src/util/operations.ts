const add = (a: string, b: string): string => {
  return String(Number(a) + Number(b));
};

const subtract = (a: string, b: string): string => {
  return String(Number(a) - Number(b));
};

const multiply = (a: string, b: string): string => {
  return String(Number(a) * Number(b));
};

const divide = (a: string, b: string): string => {
  if (b === "0") return String(Infinity);
  return String(Number(a) / Number(b));
};

const percent = (a: string): string => {
  return String(Number(a) / 100);
};

const mod = (a: string, b: string): string => {
  return String(Number(a) % Number(b));
};

export default {
  add,
  subtract,
  multiply,
  divide,
  percent,
  mod,
};
