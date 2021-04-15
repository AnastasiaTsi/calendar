import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

const TweetField = ({ name, description, date }) => {
  return (
    <Paper style={{ padding: "5%", minWidth: "300px" }}>
      <Typography style={{ padding: "2%" }} variant="h5" gutterBottom>
        {name}
      </Typography>
      <Typography style={{ padding: "2%" }} gutterBottom>
        {description}
      </Typography>
      <Typography style={{ padding: "2%" }} variant="subtitle2" gutterBottom>
        {date}
      </Typography>
    </Paper>
  );
};

export default TweetField;
