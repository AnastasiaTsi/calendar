import React from "react";
import Calendar from "./components/CalendarView";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    textAlign: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <Calendar />
          </Grid>
          <Grid item>
            <Calendar />
          </Grid>
        </Grid>
        <Calendar />
      </Grid>
    </div>
  );
};

export default App;
