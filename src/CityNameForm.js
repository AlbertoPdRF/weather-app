import React from 'react';
import './CityNameForm.css';

class CityNameForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onCityNameChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCityNameSubmission();
  }

  componentDidMount() {
    this.props.onCityNameSubmission();
  }

  render() {
    return (
      <div className="City-name-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            City
          </label>
          <input
            type="text"
            value={this.props.cityName}
            onChange={this.handleChange}
          />
          <button>
            Get weather!
          </button>
        </form>
      </div>
    );
  }
}

export default CityNameForm;
