import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

// colors
const primary = "#405363"; //dark blue
const secondary = "#e2f1ed"; // light blue-green from A
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
