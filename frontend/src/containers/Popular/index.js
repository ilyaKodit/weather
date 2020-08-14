import React, { Component } from 'react';
import './style.css';

import { Card } from 'antd';
import "antd/dist/antd.css";

const api_key = process.env.REACT_APP_WEATHER_API_KEY;
const url = process.env.REACT_APP_URL;

class Popular extends Component {
  state = {
    weatherCities: null,
  }

  async componentDidMount () {

    const cities = await fetch(`${url}/city`);
    const result = await cities.json();
    let { data } = result;
    data.sort((a, b) => {
      return b.count - a.count;
    });
    if (data.length > 6) {
      data = data.slice(0, 6);
    }

    const requests = data.map((elem) => {
      return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${elem.city}&units=metric&appid=${api_key}`);
    });

    Promise.all(requests)
      .then(responses => {
        return responses;
      })
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(weathers => {
        weathers.forEach((elem) => {
          elem.main.temp = elem.main.temp.toFixed(0);
        })
        this.setState({
          weatherCities: weathers,
        });
      })
  }

  render () {
    const { weatherCities } = this.state;

    return (
      <div className="popular">
        {weatherCities && weatherCities.map((city, index) => {
          return (
            <Card title={city.name} className="popular_card" key={index}>
              <div className="popular_temp-block">
                <img
                  src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                  className="popular_img"
                />
                <div className="popular_temp">
                  <p><b>{city.main.temp}°C</b></p>
                </div>
              </div>
            </Card>
          );
        })}
        
      </div>
    )
  }
}

export default Popular