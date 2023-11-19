import { Grid, Typography } from "@mui/material";

type ScreenProps = {
  expression: string;
};

const Screen = ({ expression }: ScreenProps) => {
  return (
    <>
      <Grid sx={styles.grid} item xs={1}>
        <Typography>{expression}</Typography>
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

// type InputType = {
//   target: { value: string };
// };

// type ScreenProps = {
//   expression: string;
//   onChange: (expression: string) => void;
//   onEnter: () => void;
// };

// const Screen = ({ expression, onChange, onEnter }: ScreenProps) => {
//   const inputHandler = ({ target: { value } }: InputType) => {
//     onChange(value);
//   };
//   return (
//     <Grid sx={styles.cell} item xs={1}>
//       <TextField
//         value={expression}
//         onChange={inputHandler}
//         sx={styles.text}
//         inputProps={{ style: { textAlign: "right", fontSize: 30 } }}
//       />
//     </Grid>
//   );
// };

// const styles = {
//   cell: {
//     minHeight: "6em",
//     background: "#282727",
//     display: "flex",
//     alignItems: "flex-end",
//   },
//   text: {
//     height: "2em",
//     width: "100%",
//     padding: "0em 0em 2em 0",
//     input: { color: "white" },
//     "& fieldset": { border: "none" },
//   },
// };

export default Screen;
