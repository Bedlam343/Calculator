import { useState } from "react";
import { Grid } from "@mui/material";

import Screen from "./components/Screen";
import FullGrid from "./components/Grids/FullGrid";
import cssClasses from "./App.module.css";

function App() {
  const [screenValue, setScreenValue] = useState("0");
  const { box, grid } = cssClasses;
  return (
    <div className={box}>
      <Grid sx={{ width: "18em" }} container columns={1} spacing={0.5}>
        <Grid className={grid} item xs={1}>
          <Screen value={screenValue} />
        </Grid>
        <Grid className={grid} item xs={1}>
          <FullGrid />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
