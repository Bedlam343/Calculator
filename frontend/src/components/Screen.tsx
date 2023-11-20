import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useCalculatorContext } from "context/CalculatorContextProvider";

const Screen = () => {
  const [expression, setExpression] = useState<string>("");
  const { operand1, operand2, operator } = useCalculatorContext();

  const { symbol: operatorSymbol } = operator ?? { symbol: "" };

  useEffect(() => {
    setExpression(`${operand1} ${operatorSymbol} ${operand2}`);
  }, [operand1, operand2, operator]);

  return (
    <>
      <Grid sx={styles.grid} item xs={1}>
        <Typography color="whitesmoke" width="100%" align="right" fontSize={25}>
          {expression}
        </Typography>
      </Grid>
    </>
  );
};

const styles = {
  grid: {
    minHeight: "6em",
    background: "#282727",
    display: "flex",
    alignItems: "flex-end",
  },
};

export default Screen;
