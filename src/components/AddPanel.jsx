import React from "react";
import AddEvent from "./AddEvent";
import { Typography, Card, Grid } from "@material-ui/core";
import { StyledCard } from "../styles";
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
    position: "relative",
  },
}));

const AddPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StyledCard
        style={{
          backgroundColor: "black",
          opacity: "0.7",
        }}
      >
        <Grid
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
          style={{ alignContent: "center" }}
        >
          <Typography variant="h4" gutterBottom>
            Select a date from the calendar to add a new event
          </Typography>
          <AddEvent />
        </Grid>
      </StyledCard>
      <StyledCard
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Grid
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
          style={{ alignContent: "center" }}
        >
          <Typography variant="h4" gutterBottom>
            Select a date from the calendar to add a new event
          </Typography>
          <AddEvent />
        </Grid>
      </StyledCard>
    </div>
  );
};

export default AddPanel;
