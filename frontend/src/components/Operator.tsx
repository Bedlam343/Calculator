import { Box, Typography } from "@mui/material";
import { useCalculatorContext } from "context/CalculatorContextProvider";
import cell from "util/cell";

type OperatorProps = {
  operator: cell;
};

const Operator = ({ operator: { value } }: OperatorProps) => {
  const { setOperator, calculate, clear } = useCalculatorContext();

  const handleClick = () => {
    if (value === "AC") {
      clear();
      return;
    }

    if (value === "=") {
      calculate();
      return;
    }

    setOperator(value);
  };

  return (
    <Box sx={styles.box} onClick={handleClick}>
      <Typography color="white">{value}</Typography>
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
