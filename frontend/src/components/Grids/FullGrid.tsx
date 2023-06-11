import { Grid } from "@mui/material";
import Cell from "./Cell";

const FullGrid = () => {
  return (
    <div style={{ width: "18em" }}>
      <Grid container columns={4} spacing={0.5}>
        <Grid item xs={1}>
          <Cell type="other">AC</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell type="other">+/-</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell type="other">%</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell type="operator">/</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>{7}</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>{8}</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>{9}</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell type="operator">x</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>{4}</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>{5}</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>{6}</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell type="operator">-</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>{1}</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>{2}</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>{3}</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell type="operator">+</Cell>
        </Grid>
        <Grid item xs={2}>
          <Cell>0</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell>.</Cell>
        </Grid>
        <Grid item xs={1}>
          <Cell type="operator">=</Cell>
        </Grid>
      </Grid>
    </div>
  );
};

export default FullGrid;
