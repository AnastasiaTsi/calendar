import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { setDate } from "../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";

const CalendarView = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());

  const date = useSelector((state) => state.date);

  useEffect(() => {
    dispatch(setDate(value));
  }, [value]);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default CalendarView;
