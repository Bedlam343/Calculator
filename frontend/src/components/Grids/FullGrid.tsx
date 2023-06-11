import { Box, Grid } from "@mui/material";
import Cell from "./Cell";
import classes from "./FullGrid.module.css";

const FullGrid = () => {
  const { box } = classes;
  return (
    <Box className={box}>
      <Grid container columns={4} spacing={0.5}>
        <Grid item xs={1}>
          <Cell>AC</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>+/-</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>%</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>/</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>7</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>8</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>9</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>x</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>4</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>5</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>6</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>-</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>1</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>2</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>3</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>+</Cell>
        </Grid>
        <Grid item xs={2}>
          <Cell>0</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>.</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>=</Cell>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FullGrid;
