import React from "react";
import AddEvent from "./AddEvent";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
    textAlign: "center",
  },
}));

const AddPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Select a date from the calendar to add a new event
      </Typography>
      <AddEvent />
    </div>
  );
};

export default AddPanel;
