import { withStyles } from "@material-ui/core/styles";
import { Button, Card, Backdrop, Paper, TextField } from "@material-ui/core";

// colors
const primary = "#0b2f21"; //dark green
const secondary = "#daf6eb"; // light green
// const red = "#FF5F58"; // delete red

export const MyTextField = withStyles({
  paddingBottom: "7%",
  borderColor: secondary,
  "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl": {
    borderRadius: "50px",
  },
  "& label.Mui-focused": {
    color: primary,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: secondary,
    },
    "&:hover fieldset": {
      borderColor: secondary,
    },
    "&.Mui-focused fieldset": {
      borderColor: secondary,
    },
  },
})(TextField);

export const PaperModal = withStyles({
  root: {
    outline: "none",
    padding: 20,
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    maxWidth: 450,
    height: "fit-content",
    margin: "auto",
    position: "absolute",
    overflowY: "auto",
    overflowX: "hidden",
    maxHeight: "100%",
  },
})(Paper);

export const StyledButton = withStyles({
  root: {
    padding: "10px 26px 10px 26px",
    fontWeight: "bold",
    backgroundColor: secondary,
    color: primary,
    textTransform: "none",
    borderRadius: 65,
    "&:hover": {
      backgroundColor: "#b1c6c1",
      borderColor: "#b1c6c1",
      boxShadow: "none",
    },
    "&.active": {
      color: secondary,
      backgroundColor: primary,
      borderColor: primary,
      boxShadow: "none",
    },
  },
})(Button);

export const StyledCard = withStyles({
  root: {
    color: "white",
    padding: "3%",
    width: "100%",
    borderRadius: "25px",
    position: "absolute",
    textAlign: "center",
  },
})(Card);

export const StyledBackdrop = withStyles({
  root: {
    backdropFilter: "blur(7px) !important",
    backgroundColor: "rgb(0, 0, 0, 0)",
  },
})(Backdrop);
