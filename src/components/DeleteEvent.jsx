import React, { useState } from "react";
import {
  StyledButton,
  StyledDelete,
  StyledBackdrop,
  PaperModal,
} from "../styles";
import { Grid, Typography, Modal } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { BEARER, API, KEY } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../redux/actions";
import axios from "axios";

const DeleteEvent = ({ event }) => {
  const [openDelete, setOpenDelete] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list);

  const deleteEvent = () => {
    axios
      .delete(`${API}/api/1.0.0/test/events/${KEY}/${event._id}`, {
        headers: {
          Authorization: `Bearer ${BEARER}`,
        },
      })
      .then((response) => {
        const newList = list;

        list.forEach((listEvent, index) => {
          if (listEvent._id === event._id) {
            newList.splice(index, 1);
            dispatch(setList([...newList]));
            setOpenDelete(false);
          }
        });
      })
      .catch((error) => {
        if (error.response) {
          // console.log("Problem With Response ", error.response.status);
        } else if (error.request) {
          // console.log("Problem With Request ");
        } else {
          /**
           * its deleted successfully but keeps on returning error
           */
          // console.log("we have an error - " + error);
          const newList = list;
          list.forEach((listEvent, index) => {
            if (listEvent._id === event._id) {
              newList.splice(index, 1);
              dispatch(setList([...newList]));
              setOpenDelete(false);
            }
          });
        }
      });
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
