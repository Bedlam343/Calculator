import { useState, useContext, ReactNode } from "react";
import CalculatorContext, {
  CalculatorContextType,
  CalculatorStateType,
  initialCalculatorState,
} from "context/CalculatorContext";

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
      // if no operator, set operand1
      setCalculatorState((state) => ({ ...state, operand1: operand1 + operand }));
      return;
    }
    setCalculatorState((state) => ({ ...state, operand2: operand2 + operand }));
  };

  const setOperator = (operator: string) => {
    setCalculatorState((state) => ({ ...state, operator }));
  };

  const calculatorContext: CalculatorContextType = {
    ...calculatorState,
    setOperand,
    setOperator,
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
