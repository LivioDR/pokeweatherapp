import React from "react";
import weatherCodes from "@/utilities/weatherCodes.js";
import getLanguage from "@/utilities/getLanguage";
import weatherLanguages from "@/utilities/weatherLanguages";

const containerStyle = {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '28%',
    margin: '15px',
    minWidth: '250px',
    backgroundColor: '#3D3D3DD0',
    borderRadius: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}

const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'center',
    fontSize: 'xx-large',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '10px',
}
const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '25px',
    textAlign: 'left',
    width: '40%',
    marginLeft: '10px',
}

const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
}

const imgStyle = {
    width: '60%',
    height: '80%',
    objectFit: 'contain',

}

const ForecastWeatherCard = (props) => {
    const {time, temperature_2m, cloud_cover, precipitation_probability, snowfall, weather_code, wind_speed_10m } = {...props.data}
    let weatherDescription = weatherCodes[weather_code].description

    const lang = getLanguage()
    if(weatherLanguages.hasOwnProperty(lang)){
        weatherDescription = weatherLanguages[lang][weatherDescription]
    }

    return(
        <div className="forecastWeatherCard" style={containerStyle}>
            <div className="forecastCardHeaderText" style={headerStyle}>
                <h3>{time}</h3>
                <p>{weatherDescription}</p>
            </div>
            <div className="forecastCardBody" style={cardBodyStyle}>
                <div className="forecastCardText" style={textStyle}>
                    <p><i class="fi fi-rr-temperature-high"></i> {temperature_2m}</p>
                    <p><i class="fi fi-rs-cloud-sun"></i> {cloud_cover}</p>
                    {
                        precipitation_probability != "0%" &&
                        <p><i class="fi fi-rr-cloud-showers-heavy"></i> {precipitation_probability}</p>
                    }
                    {
                        snowfall != "0 cm" &&
                        <p><i class="fi fi-rr-snowflakes"></i> {snowfall}</p>
                    }
                    <p><i class="fi fi-sr-wind"></i> {wind_speed_10m}</p>
                </div>
                <img 
                src={weatherCodes[weather_code].image}
                alt={weatherDescription}
                style={imgStyle}
                />

            </div>
        </div>
    )
}
export default ForecastWeatherCard