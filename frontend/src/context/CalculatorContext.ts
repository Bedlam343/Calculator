import { createContext } from "react";
import { operator } from "util/operators";

export type CalculatorContextType = {
  operand1: string;
  operand2: string;
  operator: operator | null;
  setOperand: (operand: string) => void;
  setOperator: (operator: operator) => void;
  calculate: () => void;
  clear: () => void;
};

export type CalculatorStateType = {
  operand1: string;
  operand2: string;
  operator: operator | null;
};

export const initialCalculatorState: CalculatorStateType = {
  operand1: "",
  operand2: "",
  operator: null,
};

const CalculatorContext = createContext<CalculatorContextType>({
  ...initialCalculatorState,
  setOperand: (operand) => {},
  setOperator: (operator) => {},
  calculate: () => {},
  clear: () => {},
});

export default CalculatorContext;
