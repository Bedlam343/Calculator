import { useState, useContext, ReactNode } from "react";
import CalculatorContext, {
  CalculatorContextType,
  CalculatorStateType,
  initialCalculatorState,
} from "context/CalculatorContext";
import { operator } from "util/operators";

type PropsType = {
  children: ReactNode;
};

const CalculatorContextProvider = ({ children }: PropsType) => {
  const [calculatorState, setCalculatorState] = useState<CalculatorStateType>({
    ...initialCalculatorState,
  });

  const { operand1, operand2, operator } = calculatorState;

  const setOperand = (operand: string) => {
    if (!operator) {
      // If operator not set, set operand1
      const newOperand1 = operand1 + operand;
      // make sure operand1 is a valid number
      if (isNaN(Number(newOperand1))) return;

      setCalculatorState((state) => ({
        ...state,
        operand1: operand1 + operand,
      }));
      return;
    }

    const newOperand2 = operand2 + operand;
    if (isNaN(Number(newOperand2))) return;
    setCalculatorState((state) => ({ ...state, operand2: operand2 + operand }));
  };

  const setOperator = (operator: operator) => {
    if (!operand1) return;
    setCalculatorState((state) => ({ ...state, operator }));
  };

  const calculate = () => {
    if (!operand1 || !operand2 || !operator) return;

    const result = operator.call!(operand1, operand2);
    setCalculatorState({
      ...initialCalculatorState,
      operand1: result,
    });
  };

  const clear = () => {
    setCalculatorState({ ...initialCalculatorState });
  };

  const calculatorContext: CalculatorContextType = {
    ...calculatorState,
    setOperand,
    setOperator,
    calculate,
    clear,
  };

  return (
    <CalculatorContext.Provider value={calculatorContext}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const calculatorContext = useContext(CalculatorContext);
  return calculatorContext;
};

export default CalculatorContextProvider;
