import React from 'react';

const Forecast = (props) => (
    <div className="forecast-container">
        {props.city && props.country && 
        <div className="flex-container forecast">
            <div className="forecast-day">
                <p className="day-title">Tomorrow: </p><p>{props.forecastTemp1} °C</p>
            </div>
            <div className="forecast-day">
                <p className="day-title">2.day: </p><p>{props.forecastTemp2} °C</p>
            </div>
            <div className="forecast-day">
                <p className="day-title">3.day: </p><p>{props.forecastTemp3} °C</p>
            </div>
            <div className="forecast-day">
                <p className="day-title">4.day: </p><p>{props.forecastTemp4} °C</p>
            </div>
            <div className="forecast-day">
                <p className="day-title">5.day: </p><p>{props.forecastTemp5} °C</p>
            </div>
        </div>
        }
    </div>
)

export default Forecast;