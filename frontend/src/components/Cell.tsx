import { Box, Typography } from "@mui/material";
import classes from "./Cell.module.css";

const Cell: React.FC<{ children: string | number }> = ({ children }) => {
  const numberClickHandler = () => {};
  return (
    <Box className={classes.box} onClick={numberClickHandler}>
      <Typography className={classes.text} variant="h5" align="center">
        {children}
      </Typography>
    </Box>
  );
};

export default Cell;
