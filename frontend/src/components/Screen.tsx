import { Grid, Typography } from "@mui/material";
import cssClasses from "./Screen.module.css";

const Screen: React.FC<{ value: string }> = ({ value }) => {
  const { screen, text } = cssClasses;
  return (
    <Grid className={screen} item xs={1}>
      <Typography className={text} variant="h4">
        {value}
      </Typography>
    </Grid>
  );
};

export default Screen;
