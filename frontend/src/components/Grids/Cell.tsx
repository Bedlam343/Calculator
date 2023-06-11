import { Typography } from "@mui/material";
import cssClasses from "./Cell.module.css";

const Cell: React.FC<{ children: string | number }> = ({ children }) => {
  const { box, text } = cssClasses;
  const numberClickHandler = () => {};
  return (
    <div className={box} onClick={numberClickHandler}>
      <Typography className={text} variant="h5" align="center">
        {children}
      </Typography>
    </div>
  );
};

export default Cell;
