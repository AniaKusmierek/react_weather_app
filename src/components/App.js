import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const keyAPI = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  state = {
    value: "",
    city: "",
    sunrise: "",
    sunset: "",
    pressure: "",
    temp: "",
    wind: "",
    err: false,
  };

  render() {
    return (
      <div className="App">
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
