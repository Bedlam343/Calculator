import { Box, Typography } from "@mui/material";
import { useCalculatorContext } from "context/CalculatorContextProvider";
import { operator } from "util/operators";

type OperatorProps = {
  operator: operator;
};

const Operator = ({ operator }: OperatorProps) => {
  const { setOperator, calculate, clear } = useCalculatorContext();
  const { symbol } = operator;

  const handleClick = () => {
    if (symbol === "AC") {
      clear();
      return;
    }

    if (symbol === "=") {
      calculate();
      return;
    }

    setOperator(operator);
  };

  return (
    <Box sx={styles.box} onClick={handleClick}>
      <Typography color="white">{symbol}</Typography>
    </Box>
  );
};

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "4em",
    minHeight: "4em",
    background: "rgb(238, 156, 4)",
    "&:hover": {
      cursor: "pointer",
      opacity: "75%",
    },
  },
};

export default Operator;
