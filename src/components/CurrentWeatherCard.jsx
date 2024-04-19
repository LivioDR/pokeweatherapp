import React from "react";
import weatherCodes from "@/utilities/weatherCodes.js";

const CurrentWeatherCard = (props) => {
    const {time, timezone, temperature, windspeed, weathercode } = {...props.data}

    console.log(props.data)

    return(
        <div className="currentWeatherCard">
            <div>
            <h3>{time.split("T")[1]} {timezone}</h3>
            <img 
                src={weatherCodes[weathercode].image}
                alt={weatherCodes[weathercode].description}
                width={200}
                height={200}
                />
            </div>
            <p>{weatherCodes[weathercode].description}</p>
            <p>Temperature: {temperature}°C</p>
            <p>Wind Speed: {windspeed} km/h</p>
            
        </div>
    )
}
export default CurrentWeatherCard