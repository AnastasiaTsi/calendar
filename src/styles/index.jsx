import { withStyles } from "@material-ui/core/styles";
import { Button, Card, Backdrop, Paper } from "@material-ui/core";

// colors
const primary = "#0b2f21"; //dark green
const secondary = "#daf6eb"; // light green
const red = "#ffbdba"; // delete red
const darkRed = "#e57772"; //dark red

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

export const StyledDelete = withStyles({
  root: {
    padding: "10px 26px 10px 26px",
    border: "solid 1px",
    backgroundColor: red,
    borderColor: red,
    color: "white",
    textTransform: "none",
    borderRadius: 65,
    "&:hover": {
      backgroundColor: darkRed,
      boxShadow: "none",
      color: "white",
    },
  },
})(Button);
