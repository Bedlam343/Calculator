import { Box, Typography } from "@mui/material";
import { useCalculatorContext } from "context/CalculatorContextProvider";
import cell from "util/cell";

type OperatorProps = {
  operator: cell;
};

const Operator = ({ operator: { value } }: OperatorProps) => {
  const { setOperator } = useCalculatorContext();

  return (
    <Box sx={styles.box} onClick={() => setOperator(value)}>
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
