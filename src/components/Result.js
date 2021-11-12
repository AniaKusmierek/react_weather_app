import React from "react";

const Result = (props) => {
  const { city, date, sunrise, sunset, temp, pressure, wind, err } =
    props.weather;
  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <h1>
          The weather for <em>{city}</em>:
        </h1>
        <p>
          Today is <strong>{date}</strong>
        </p>
        <p>
          Sunrise at <strong>{sunriseTime}</strong>
        </p>
        <p>
          Sunset at <strong>{sunsetTime}</strong>
        </p>
        <p>
          Temperature is <strong>{temp} °C</strong>
        </p>
        <p>
          Pressure is <strong>{pressure} hPa</strong>
        </p>
        <p>
          Wind speed is <strong>{wind} m/s</strong>
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="result">
        {err ? `We couldn't find ${city}...` : content}
      </div>
    </>
  );
};

export default Result;
