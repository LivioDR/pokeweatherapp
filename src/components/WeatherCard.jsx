import getWeather from "@/utilities/getWeather";
import React from "react";

const WeatherCard = (props) => {
    console.log(props)
    const lat = props.coords.lat
    const lon = props.coords.lon
    
    getWeather(lat,lon)
    
    return(
        <div>
            <h3>Weather Card Data</h3>
            <p>LAT: {lat}</p>
            <p>LON: {lon}</p>
        </div>
    )
}
export default WeatherCard