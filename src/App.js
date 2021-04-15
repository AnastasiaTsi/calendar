import React, { useEffect } from "react";
import Calendar from "./components/CalendarView";
import Grid from "@material-ui/core/Grid";
import Add from "./components/AddPanel";
import { makeStyles } from "@material-ui/core/styles";
import { KEY, BEARER } from "./constants";
import axios from "axios";
import { setList } from "./redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `url(tropical-background.jpg)`,
    minHeight: "100vh",
    backgroundSize: "cover",
    overflow: "hidden",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .post(`https://api.corvium.com/api/1.0.0/heartbeat`, {
        headers: {
          Authorization: `Bearer ${BEARER}`,
        },
      })
      .then((response) => {
        console.log(response);
        // dispatch(setList(response.data.return));
      })
      .catch((error) => {
        if (error.response) {
          console.log("Problem With Response ", error.response.status);
        } else if (error.request) {
          console.log("Problem With Request ");
        } else {
          console.log("we have an error " + error);
        }
      });
  };

  return (
    <div className={classes.root}>
      <Grid
        style={{ margin: "2%", marginRight: "2%" }}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid
          style={{
            textAlign: "-webkit-center",
            marginBottom: "2%",
            backgroundColor: "gold",
          }}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6} style={{ backgroundColor: "lavender" }}>
            <Calendar />
          </Grid>
          <Grid
            item
            justify="center"
            xs={6}
            // style={{ backgroundColor: "pink" }}
          >
            <Add />
          </Grid>
        </Grid>
        <Grid
          style={{ backgroundColor: "purple" }}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item justify="center">
            <Calendar />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
