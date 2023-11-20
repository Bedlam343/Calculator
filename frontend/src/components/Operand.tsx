import { Box, Typography } from "@mui/material";
import cell from "util/cell";
import { useCalculatorContext } from "context/CalculatorContextProvider";

type OperandProps = {
  operand: cell;
};

const Operand = ({ operand: { value } }: OperandProps) => {
  const { setOperand } = useCalculatorContext();

  return (
    <Box sx={styles.box} onClick={() => setOperand(value)}>
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
    background: "rgb(103, 103, 103)",
    "&:hover": {
      cursor: "pointer",
      opacity: "75%",
    },
  },
};

export default Operand;
