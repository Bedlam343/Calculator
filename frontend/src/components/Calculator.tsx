import { Box, Grid } from "@mui/material";
import Buttons from "components/Buttons";
import Screen from "components/Screen";
import { useState } from "react";

const Calculator = () => {
  const [expression, setExpression] = useState<string>("");

  return (
    <Box sx={styles.box}>
      <Grid sx={styles.grid} container columns={1}>
        <Screen expression={expression} />
        <Buttons />
      </Grid>
    </Box>
  );
};

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  grid: {
    width: "18em",
  },
};

export default Calculator;
