import React from "react";

const CurrentWeatherCard = (props) => {
    const {time, timezone, temperature, windspeed } = {...props.data}
    
    return(
        <div className="currentWeatherCard">
            <h3>{time.split("T")[1]} {timezone}</h3>
            <p>Temperature: {temperature}°C</p>
            <p>Wind Speed: {windspeed} km/h</p>
            
        </div>
    )
}
export default CurrentWeatherCard