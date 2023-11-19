import { Box, Typography } from "@mui/material";
import cell from "util/cell";

type OperatorProps = {
  operator: cell;
  onClick: () => void;
  key?: number;
};

const Operator = ({ operator: { call, value }, onClick }: OperatorProps) => {
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
    background: "rgb(238, 156, 4)",
    "&:hover": {
      cursor: "pointer",
      opacity: "75%",
    },
  },
};

export default Operator;
