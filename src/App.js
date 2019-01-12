import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Forecast from './components/Forecast';

const API_KEY = "c1158ceab0a07507b4b692350d17ce1c";

class App extends Component {
  // from React v16
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    forecastTemp1: undefined,
    forecastTemp2: undefined,
    forecastTemp3: undefined,
    forecastTemp4: undefined,
    forecastTemp5: undefined
  }

  // able to use arrow functions in React version higher then 16!
  // does not have to bind functions, 'this' keyword can be used independently
  getWeather = async (e) => {
    //prevent from refreshing the page after update
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);

    const api_call_forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const forecastData = await api_call_forecast.json();
    console.log(forecastData);

    if (city && country) {
      //setting state
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        forecastTemp1: forecastData.list[1].main.temp,
        forecastTemp2: forecastData.list[9].main.temp,
        forecastTemp3: forecastData.list[17].main.temp,
        forecastTemp4: forecastData.list[25].main.temp,
        forecastTemp5: forecastData.list[33].main.temp
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value!",
        forecastTemp1: undefined,
        forecastTemp2: undefined,
        forecastTemp3: undefined,
        forecastTemp4: undefined,
        forecastTemp5: undefined
      });
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                  <Forecast 
                    city={this.state.city}
                    country={this.state.country}
                    forecastTemp1={this.state.forecastTemp1}
                    forecastTemp2={this.state.forecastTemp2}
                    forecastTemp3={this.state.forecastTemp3}
                    forecastTemp4={this.state.forecastTemp4}
                    forecastTemp5={this.state.forecastTemp5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
