import React, { useState } from "react";
import {
  StyledButton,
  StyledDelete,
  StyledBackdrop,
  PaperModal,
} from "../styles";
import { Grid, Paper, Typography, Modal } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const DeleteEvent = () => {
  const [openDelete, setOpenDelete] = useState(false);

  const deleteEvent = () => {
    console.log("delete");
  };

  return (
    <>
      <StyledDelete onClick={() => setOpenDelete(true)}>
        <DeleteForeverIcon />
      </StyledDelete>

      <Modal
        open={openDelete}
        BackdropComponent={StyledBackdrop}
        onClose={() => setOpenDelete(false)}
      >
        <PaperModal elevation={8}>
          <Grid container>
            <Grid
              container
              direction="row"
              style={{
                justifyContent: "space-between",
                padding: "4%",
                height: "120px",
                alignItems: "baseline",
              }}
            >
              <Typography style={{ color: "#3d3d3d" }} variant="h4">
                Delete Event
              </Typography>
            </Grid>
          </Grid>
          <Typography style={{ textAlign: "center" }} gutterBottom>
            This action will delete this event permanently
          </Typography>
          <Grid
            container
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <StyledDelete onClick={() => deleteEvent()}>Delete</StyledDelete>
            <StyledButton onClick={() => setOpenDelete(false)}>
              Go back
            </StyledButton>
          </Grid>
        </PaperModal>
      </Modal>
    </>
  );
};

export default DeleteEvent;
