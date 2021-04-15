import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const TweetField = ({ name, description, date }) => {
  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Paper style={{ padding: "2%", borderRadius: "15px" }}>
        <Typography variant="h5" gutterBottom style={{ color: "#3d3d3d" }}>
          {name}
        </Typography>
        <Typography gutterBottom>{description}</Typography>
        <Typography variant="subtitle2" gutterBottom>
          {date}
        </Typography>
        <div style={{ backgroundColor: "green", textAlign: "right" }}>
          <button>edit</button>
          <button>delete</button>
        </div>
      </Paper>
    </Grid>
  );
};

export default TweetField;
