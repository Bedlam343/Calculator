type OPERAND = "operand";
type OPERATOR = "operator";

type cell = {
  type: OPERAND | OPERATOR;
  value: string;
  call?: () => string | null;
};

export default cell;