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
  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result />
      </div>
    );
  }
}

export default App;
