import React, { useState } from "react";
import {
  StyledButton,
  StyledBackdrop,
  PaperModal,
  MyTextField,
} from "../styles";
import { Typography, Modal, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// -- icons --
import DoneIcon from "@material-ui/icons/Done";

const AddEvent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledButton onClick={() => setOpen(true)}>
        <Typography>Add new event</Typography>
      </StyledButton>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal"
        aria-describedby="simple-modal"
        BackdropComponent={StyledBackdrop}
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
              <Typography color="primary" variant="h4">
                Add a new event
              </Typography>
            </Grid>
            <MyTextField
              label="Title"
              placeholder="Enter title"
              fullWidth
              variant="outlined"
              // onChange={(e) => handleTitle(e.target.value.trim())}
            />
            <MyTextField
              label="Description"
              placeholder="Enter description"
              fullWidth
              rowsMax={6}
              variant="outlined"
              multiline
              // onChange={(e) =>
              //   setInfo({ ...info, description: e.target.value.trim() })
              // }
            />

            <Grid
              container
              direction="row"
              style={{ justifyContent: "space-between", padding: "4%" }}
            >
              <Button
                // onClick={() => handleSave()}
                endIcon={<DoneIcon />}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </PaperModal>
      </Modal>
    </>
  );
};

export default AddEvent;
