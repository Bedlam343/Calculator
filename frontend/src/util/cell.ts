type OPERAND = "operand";
type OPERATOR = "operator";

type cell = {
  type: OPERAND | OPERATOR;
  value: string;
};

export default cell;