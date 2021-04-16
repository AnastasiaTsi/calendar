import React, { useEffect, useState } from "react";
import { StyledButton, StyledBackdrop, PaperModal } from "../styles";
import { Typography, Modal, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { BEARER, API, KEY } from "../constants";
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../redux/actions";
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

const AddEvent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({ name: "", description: "" });

  const date = useSelector((state) => state.date);
  const list = useSelector((state) => state.list);

  const handleSave = () => {
    if (info.name === "" || info.description === "") return;
    axios
      .post(
        `${API}/api/1.0.0/test/events/${KEY}/new`,

        {
          event_name: info.name,
          event_description: info.description,
          event_date: date,
        },
        {
          headers: {
            Authorization: `Bearer ${BEARER}`,
          },
        }
      )
      .then((response) => {
        dispatch(setList([...list, response.data.return]));
        setOpen(false);
      })
      .catch((error) => {
        if (error.response) {
          // console.log("Problem With Response ", error.response.status);
        } else if (error.request) {
          // console.log("Problem With Request ");
        } else {
          // console.log("we have an error " + error);
        }
      });
  };

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
              <Typography style={{ color: primary }} variant="h4">
                Add new event
              </Typography>
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
            />

            <Grid
              container
              direction="row"
              style={{ justifyContent: "space-between", padding: "4%" }}
            >
              <StyledButton onClick={() => handleSave()} endIcon={<DoneIcon />}>
                Save
              </StyledButton>
            </Grid>
          </Grid>
        </PaperModal>
      </Modal>
    </>
  );
};

export default AddEvent;
