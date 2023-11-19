// import { Grid } from "@mui/material";

// import Screen from "./components/Screen";
// import FullGrid from "./components/Grids/FullGrid";
// import cssClasses from "./App.module.css";
// import { useState } from "react";
import Calculator from "components/Calculator";

const App = () => {
  return <Calculator />;
};

// type CalculatorState = {
//   operand1: number;
//   operand2: number;
//   operator: string;
//   expression: string;
// };

// const initialState: CalculatorState = {
//   operand1: 0,
//   operand2: 0,
//   operator: "",
//   expression: "",
// };

// function App() {
//   const { box, grid } = cssClasses;
//   const [calculatorState, setCalculatorState] = useState<CalculatorState>({
//     ...initialState,
//   });

//   const { operand1, operand2, operator, expression } = calculatorState;

//   const updateCalculatorState = (input: string) => {};

//   const calculate = () => {};

//   return (
//     <div className={box}>
//       <Grid sx={{ width: "18em" }} container columns={1} spacing={0.5}>
//         <Grid className={grid} item xs={1}>
//           <Screen
//             expression={expression}
//             onChange={updateCalculatorState}
//             onEnter={calculate}
//           />
//         </Grid>
//         <Grid className={grid} item xs={1}>
//           <FullGrid />
//         </Grid>
//       </Grid>
//     </div>
//   );
// }

export default App;
