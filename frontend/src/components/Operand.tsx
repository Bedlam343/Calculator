import { Box, Typography } from "@mui/material";
import cell from "util/cell";

type OperandProps = {
  operand: cell;
  onClick: () => void;
};

const Operand = ({ operand: { value }, onClick }: OperandProps) => {
  return (
    <Box sx={styles.box}>
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
