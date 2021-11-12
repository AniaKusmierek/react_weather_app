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
  handleCitySubmit = (e) => {
    e.preventDefault();

    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${keyAPI}&units=metric`;
    fetch(API)
      .then((res) => {
        if (res.ok) {
          return res;
        }
        throw Error("Cannot find the town provided...");
      })
      .then((res) => res.json())
      .then((data) => {
        const time = new Date().toLocaleString();
        this.setState((prevState) => ({
          err: false,
          date: time,
          city: prevState.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          pressure: data.main.pressure,
          temp: data.main.temp,
          wind: data.wind.speed,
        }));
      })
      .catch((error) => {
        this.setState((prevState) => {
          return {
            err: true,
            city: prevState.value,
          };
        });
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
