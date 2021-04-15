import React, { useEffect } from "react";
import Calendar from "./components/CalendarView";
import Grid from "@material-ui/core/Grid";
import Add from "./components/AddPanel";
import EventField from "./components/EventField";
import { makeStyles } from "@material-ui/core/styles";
import { BEARER, API } from "./constants";
import axios from "axios";
// import { setList } from "./redux/actions/index";
// import { useSelector, useDispatch } from "react-redux";

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
  // const dispatch = useDispatch();

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .post(`${API}/api/1.0.0/heartbeat`, {
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
            // backgroundColor: "gold",
          }}
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            xs={6}
            // style={{ backgroundColor: "lavender" }}
          >
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
        <Grid container spacing={3}>
          <EventField
            name="Visit super market"
            description="i need to buy some stuff"
            date="oki doki"
          />
          <EventField
            name="Visit super market"
            description="i need to buy fffffffffffffff fffffffffffffffffff fffffffffffffffffff fffffffffffffffffff fffffffffffffffffff fffffffffffffffffff fffffffffffffffffff  fffffffffffffffffffsome stuff"
            date="oki doki"
          />
          <EventField
            name="Visit super market"
            description="i need to buy some stuff"
            date="oki doki"
          />

          <EventField
            name="Visit super market"
            description="i need to buy some stuff lorem ipjdha hsg sh ghjd gjad hfgkjad hgjdhfg j gd g gj sdkjfg hjk gfkg hfk gjdsgjsd gjkhdsjk gajdh gakdg agfahur  fhf asudfh ajkh fj fah fajhdf jkdshg kjdkjfhgkjd hdjfhgdjghkrgfhjfhg djsfh jdfhg djsfhgjkdfh ghjkdhfg jkhdfg jkhfdg jkhdfg jkhdfggjkhdfgjkhdfgjkhdfg  dfkjh dfgjkhd fgjkhdfg gkjlhsd fg"
            date="oki doki"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
