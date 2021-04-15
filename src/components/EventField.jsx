import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Delete from "./DeleteEvent";
import Edit from "./EditEvent";

const TextField = ({ event }) => {
  let date = event.event_date;
  date = date.substring(0, 10);
  return (
    <>
      <Grid item xs={12} sm={6} lg={3}>
        <Paper style={{ padding: "2%", borderRadius: "15px" }}>
          <Typography variant="h5" gutterBottom style={{ color: "#3d3d3d" }}>
            {event.event_name}
          </Typography>

          {event.event_description && (
            <Typography gutterBottom>{event.event_description}</Typography>
          )}
          {event.event_date && (
            <Typography variant="subtitle2" gutterBottom>
              {date}
            </Typography>
          )}

          <div style={{ textAlign: "right" }}>
            <Edit event={event} />
            <Delete event={event} />
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default TextField;
