import React from "react";
import Calendar from "./CalendarView";
import { Button, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "gold",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    textAlign: "center",
  },
}));

const AddEvent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Select a date from the calendar to add a new event
      </Typography>
      <Button>add new event</Button>
    </div>
  );
};

export default AddEvent;
