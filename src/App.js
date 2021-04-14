import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Calendar from "./components/CalendarView";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calendar />
      </header>
    </div>
  );
}

export default App;
