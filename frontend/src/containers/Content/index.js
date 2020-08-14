import React, { Component } from 'react';
import { message, Card, Input } from 'antd';
import "antd/dist/antd.css";
import './style.css';

import recommendation from '../../variables/recommendation';
import backgroundColor from '../../variables/backgroundColor';

const api_key = process.env.REACT_APP_WEATHER_API_KEY
const { Search } = Input;

class Content extends Component {
  state = {
    city: '',
    weatherData: null,
    recommendation: null,
  }

  onChange = event => {
    const { value } = event.target;
    this.setState({
      city: value,
    });
  };

  onSearch = async () => {
    const { city } = this.state;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`);
    const data = await response.json();

    if (data.name) {
      data.main.temp = data.main.temp.toFixed(0);
      data.main.feels_like = data.main.feels_like.toFixed(0);

      this.setState({
        weatherData: data,
        recommendation: recommendation(data.main.temp),
      });

      const color = backgroundColor(data.weather[0].icon);
      this.props.changeColor(color);

      const countCity = await fetch('http://localhost:4000/city/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          city: data.name,
        }),
      });
      const countCityResult = await countCity.json();
    } else {
      this.setState({
        weatherData: null,
      });
    }

    if (data.cod === '404') {
      message.warning(`Город ${city} не найден`);
    }
  };

  render () {
    const { weatherData, recommendation } = this.state;
    let icon = weatherData ? weatherData.weather[0].icon : '';

    return (
      <div className="content">
        <div className="content_inputwrapper">
          <Search
            placeholder="Введите город"
            onSearch={this.onSearch}
            className="content_input"
            onChange={this.onChange}
            value={this.state.city}
          />
        </div>
        {weatherData ? (
          <div className="content_cardwrapper">
            <Card title={`${weatherData.name}, ${weatherData.sys.country}`} style={{ width: 300 }}>
              <div className="content_temp-block">
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  className="content_img"
                />
                <div className="content_temp">
                  <p><b>{weatherData.main.temp}°C</b></p>
                </div>
              </div>
              <p style={{textAlign: 'center'}}>Ощущается как: <b>{weatherData.main.feels_like}°C</b></p>
              <hr />
              <p style={{textAlign: 'center'}}>Скорость ветра: <b>{weatherData.wind.speed} м/сек</b></p>
              <hr />
              <p style={{textAlign: 'center'}}><b>Совет:</b> {recommendation}</p>
            </Card>
          </div>
        ) : (
          <div className="content_enptycard">
            <p>Введите ваш город в поисковую строку</p>
          </div>
        )}
        
      </div>
    )
  }
}

export default Content