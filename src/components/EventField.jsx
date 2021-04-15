import React, { useState } from "react";
import {
  StyledButton,
  StyledDelete,
  StyledBackdrop,
  PaperModal,
} from "../styles";
import { Grid, Paper, Typography, Modal } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Delete from "./DeleteEvent";

const TextField = ({ name, description, date }) => {
  const [openDelete, setOpenDelete] = useState(false);

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
            <StyledButton>edit</StyledButton>
            <Delete />
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default TextField;
