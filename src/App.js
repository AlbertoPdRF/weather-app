import React from 'react';
import CityNameForm from './CityNameForm';
import WeatherResult from './WeatherResult';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: 'Madrid',
      weather: {
        main: null,
        description: null,
        icon: null,
        country: null,
        city: null,
        temp: {
          now: null,
          feels_like: null,
          min: null,
          max: null
        }
      }
  };

    this.handleCityNameChange = this.handleCityNameChange.bind(this);
    this.handleCityNameSubmission = this.handleCityNameSubmission.bind(this);
  }

  handleCityNameChange(cityName) {
    this.setState({cityName: cityName});
  }

  handleCityNameSubmission() {
    this.getWeather(this.state.cityName).then(data => {
      this.setState({
        weather: {
          main: data.weather[0].main,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          country: data.sys.country,
          city: data.name,
          temp: {
            now: Math.round(data.main.temp),
            feels_like: Math.round(data.main.feels_like),
            min: Math.round(data.main.temp_min),
            max: Math.round(data.main.temp_max)
          }
        }
      });
    }).catch(error => {
      throw new Error('Plese enter a proper location!');
    });
  }

  async getWeather(cityName) {
    try {
      const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e3ea2dd667a7bb272bb5b629e7d922db`, {mode: 'cors'});
      const weather = await weatherResponse.json();

      return weather;
    } catch (error) {
      throw new Error('Something went wrong, please try again later!');
    }
  }

  render() {
    const cityName = this.state.cityName;

    return (
      <div className="App">
        <CityNameForm
          cityName={cityName}
          onCityNameChange={this.handleCityNameChange}
          onCityNameSubmission={this.handleCityNameSubmission}
        />

        <WeatherResult
          weather={this.state.weather}
        />
      </div>
    );
  }
}

export default App;
