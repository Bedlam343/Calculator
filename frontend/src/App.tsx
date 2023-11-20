import Calculator from "components/Calculator";
import CalculatorContextProvider from "context/CalculatorContextProvider";

const App = () => {
  return (
    <CalculatorContextProvider>
      <Calculator />
    </CalculatorContextProvider>
  );
};

export default App;
