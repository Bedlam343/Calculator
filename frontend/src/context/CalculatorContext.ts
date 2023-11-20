import { createContext } from "react";

export type CalculatorContextType = {
  operand1: string;
  operand2: string;
  operator: string;
  setOperand: (operand: string) => void;
  setOperator: (operator: string) => void;
  calculate: () => void;
  clear: () => void;
};

export type CalculatorStateType = {
  operand1: string;
  operand2: string;
  operator: string;
};

export const initialCalculatorState: CalculatorStateType = {
  operand1: "",
  operand2: "",
  operator: "",
};

const CalculatorContext = createContext<CalculatorContextType>({
  ...initialCalculatorState,
  setOperand: () => {},
  setOperator: () => {},
  calculate: () => {},
  clear: () => {},
});

export default CalculatorContext;
