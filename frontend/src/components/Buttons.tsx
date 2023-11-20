import { Grid } from "@mui/material";
import GRID from "util/grid";
import { OPERATOR, OPERAND } from "util/constants";
import { ReactNode } from "react";
import Operator from "./Operator";
import Operand from "./Operand";

const Buttons = () => {
  return (
    <Grid container columns={4} spacing={0.5}>
      {GRID.map((row, i) => {
        return row.map((col, j) => {
          let cell: ReactNode = null;

          if (col.type === OPERATOR) {
            cell = <Operator key={i + j} operator={col} />;
          } else if (col.type === OPERAND) {
            cell = <Operand key={i + j} operand={col} />;
          }

          return (
            <Grid item xs={1} key={i + j}>
              {cell}
            </Grid>
          );
        });
      })}
    </Grid>
  );
};

export default Buttons;
