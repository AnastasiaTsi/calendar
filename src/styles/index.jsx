import { withStyles } from "@material-ui/core/styles";
import { Button, Card } from "@material-ui/core";

// colors
const primary = "#0b2f21"; //dark green
const secondary = "#daf6eb"; // light green
const red = "#FF5F58"; // delete red

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
