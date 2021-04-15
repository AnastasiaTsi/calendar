import React, { useEffect } from "react";
import Calendar from "./components/CalendarView";
import Grid from "@material-ui/core/Grid";
import Add from "./components/AddPanel";
import EventField from "./components/EventField";
import { makeStyles } from "@material-ui/core/styles";
import { BEARER, API, KEY } from "./constants";
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

  const list = useSelector((state) => state.list);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .post(
        `${API}/api/1.0.0/test/events/${KEY}/list`,
        {
          limit: 100,
          sort: "created_at",
        },
        {
          headers: {
            Authorization: `Bearer ${BEARER}`,
          },
        }
      )
      .then((response) => {
        dispatch(setList(response.data.return.docs));
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
          }}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={6}>
            <Calendar />
          </Grid>
          <Grid item justify="center" xs={6}>
            <Add />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {list &&
            list.map((event, index) => {
              return <EventField key={index} event={event} />;
            })}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
