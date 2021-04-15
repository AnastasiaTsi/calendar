import React from "react";
import Calendar from "./components/CalendarView";
import Grid from "@material-ui/core/Grid";
import Add from "./components/AddPanel";
import { makeStyles } from "@material-ui/core/styles";
// import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(tropical-background.jpg)`,
    minHeight: "100vh",
    backgroundSize: "cover",
    overflow: "hidden",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
    // color: "white",
    textAlign: "center",
  },
}));

// const StyledGrid = withStyles({
//   root: {
//     justifyContent: "space-around",
//     borderRadius: "65px",
//     height: "50px",
//     alignSelf: "center",
//     alignItems: "center",
//   },
// })(Grid);

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        style={{ margin: "2%" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid
          style={{
            textAlign: "-webkit-center",
            margin: "0px",
            // backgroundColor: "black",
          }}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            justify="center"
            xs={6}
            // style={{ backgroundColor: "lavender" }}
          >
            <Calendar />
          </Grid>
          <Grid
            item
            justify="center"
            xs={6}
            // style={{ backgroundColor: "pink" }}
          >
            <Add />
          </Grid>
        </Grid>
        <Grid
          // style={{ textAlign: "-webkit-center", backgroundColor: "purple" }}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item justify="center">
            <Calendar />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
