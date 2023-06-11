import { Grid, Box } from "@mui/material";
import Cell from "./Cell";
import classes from "./NumbersGrid.module.css";

const numbers: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const NumbersGrid = () => {
  return (
    <Box className={classes.box}>
      <Grid
        container
        className={classes.containerGrid}
        spacing={0.5}
        columns={3}
      >
        {numbers.map((number) => (
          <Grid className={classes.itemGrid} item xs={1}>
            <Cell>{number}</Cell>
          </Grid>
        ))}
        <Grid className={classes.itemGrid} item xs={3}>
          <Cell>0</Cell>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NumbersGrid;
