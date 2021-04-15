import React from "react";
import { StyledButton } from "../styles";
import { Grid, Paper, Typography } from "@material-ui/core";
import Delete from "./DeleteEvent";
import Edit from "./EditEvent";

const TextField = ({ name, description, date }) => {
  const deleteEvent = () => {
    console.log("delete");
  };

  return (
    <>
      <Grid item xs={12} sm={6} lg={3}>
        <Paper style={{ padding: "2%", borderRadius: "15px" }}>
          <Typography variant="h5" gutterBottom style={{ color: "#3d3d3d" }}>
            {name}
          </Typography>
          <Typography gutterBottom>{description}</Typography>
          <Typography variant="subtitle2" gutterBottom>
            {date}
          </Typography>
          <div style={{ textAlign: "right" }}>
            <Edit />
            <Delete />
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default TextField;
