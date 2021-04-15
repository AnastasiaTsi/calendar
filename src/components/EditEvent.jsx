import React, { useState } from "react";
import { StyledButton, StyledBackdrop, PaperModal } from "../styles";
import { Grid, TextField, Typography, Modal } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../redux/actions";
import { BEARER, API, KEY } from "../constants";
// -- icons --
import DoneIcon from "@material-ui/icons/Done";

const primary = "#0b2f21"; //dark green
const secondary = "#daf6eb"; // light green

const useStyles = makeStyles((theme) => ({
  textField: {
    paddingBottom: "7%",
    borderColor: primary,
    "& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl": {
      borderRadius: "50px",
    },
    "& label.Mui-focused": {
      color: primary,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: primary,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: secondary,
      },
      "&:hover fieldset": {
        borderColor: primary,
      },
      "&.Mui-focused fieldset": {
        borderColor: primary,
      },
    },
  },
}));

const EditEvent = ({ event }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openEdit, setOpenEdit] = useState(false);
  const [info, setInfo] = useState({
    name: event.event_name,
    description: event.event_description,
  });
  const list = useSelector((state) => state.list);

  const handleEdit = () => {
    axios
      .put(
        `${API}/api/1.0.0/test/events/${KEY}/${event._id}`,
        {
          event_name: info.name,
          event_description: info.description,
          event_date: event.event_date,
        },
        {
          headers: {
            Authorization: `Bearer ${BEARER}`,
          },
        }
      )
      .then((response) => {
        const newEvent = response.date.return;
        const newList = list;

        list.map((event, index) => {
          if (event._id === newEvent._id) {
            newList[index] = newEvent;
          }
        });
        dispatch(setList([...newList]));
        setOpenEdit(false);
      })
      .catch((error) => {
        if (error.response) {
          // console.log("Problem With Response ", error.response.status);
        } else if (error.request) {
          // console.log("Problem With Request ");
        } else {
          // console.log("we have an error - " + error);
          /**
           * its updated successfully but keeps on returning error
           */
          const newEvent = {
            ...event,
            event_name: info.name,
            event_description: info.description,
          };
          const newList = list;

          list.map((event, index) => {
            if (event._id === newEvent._id) {
              newList[index] = newEvent;
            }
          });
          dispatch(setList([...newList]));
          setOpenEdit(false);
        }
      });
  };

  return (
    <>
      <StyledButton onClick={() => setOpenEdit(true)}>edit</StyledButton>

      <Modal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
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
              <Typography variant="h4">Edit event</Typography>
            </Grid>
            <TextField
              className={classes.textField}
              label="Name"
              placeholder="Enter name"
              fullWidth
              variant="outlined"
              onChange={(e) =>
                setInfo({ ...info, name: e.target.value.trim() })
              }
              defaultValue={event.event_name}
            />
            <TextField
              className={classes.textField}
              label="Description"
              placeholder="Enter description"
              fullWidth
              rowsMax={6}
              variant="outlined"
              multiline
              onChange={(e) =>
                setInfo({ ...info, description: e.target.value.trim() })
              }
              defaultValue={event.event_description}
            />

            <Grid
              container
              direction="row"
              style={{ justifyContent: "space-between", padding: "4%" }}
            >
              <StyledButton onClick={() => handleEdit()} endIcon={<DoneIcon />}>
                Save
              </StyledButton>
            </Grid>
          </Grid>
        </PaperModal>
      </Modal>
    </>
  );
};

export default EditEvent;
