import getWeather from "@/utilities/getWeather";
import React from "react";

const WeatherCard = (props) => {
    const lat = 42.983612
    const lon = -81.249725
    console.log(lat)
    console.log(lon)
    getWeather(lat,lon)
    
    return(
        <div>
            <p>LAT: {lat}</p>
            <p>LON: {lon}</p>
        </div>
    )
}
export default WeatherCard