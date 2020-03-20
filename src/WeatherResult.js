import React from 'react';
import './WeatherResult.css';

class WeatherResult extends React.Component {
  render() {
    return (
      <div className="Weather-result">
        <span className="City-country">
          {this.props.weather.city}, {this.props.weather.country}
        </span>
        <img
          src={`http://openweathermap.org/img/wn/${this.props.weather.icon}@2x.png`}
          alt={`${this.props.weather.main} icon`}
        />
        <span className="Description">
          {this.props.weather.main} ({this.props.weather.description})
        </span>
        <span className="Temp-now">
          {this.props.weather.temp.now} ºC
        </span>
        <span>
          Feels like: {this.props.weather.temp.feels_like} ºC
          <br />
          Min: {this.props.weather.temp.min} ºC / Max: {this.props.weather.temp.max} ºC
        </span>
      </div>
    );
  }
}

export default WeatherResult;
