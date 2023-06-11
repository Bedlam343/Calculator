import { Typography } from "@mui/material";
import cssClasses from "./Cell.module.css";

const Cell: React.FC<{ children: number | string; type?: string }> = ({
  children,
  type,
}) => {
  const { box, operand, operator, other, text } = cssClasses;
  const cellColor =
    type && type === "operator"
      ? operator
      : type && type === "other"
      ? other
      : operand;
  const cellClickHandler = (): void => {};
  return (
    <div className={cellColor} onClick={cellClickHandler}>
      <div className={box}>
        <Typography className={text} variant="h5" align="center">
          {children}
        </Typography>
      </div>
    </div>
  );
};

export default Cell;
