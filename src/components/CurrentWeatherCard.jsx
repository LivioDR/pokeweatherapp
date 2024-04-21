import React from "react";
import weatherCodes from "@/utilities/weatherCodes.js";

const containerStyle = {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '90%',
    margin: '5% auto',
    maxWidth: '800px',
    backgroundColor: '#3D3D3D',
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
    marginTop: '5%',
}
const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '1.5em',
    textAlign: 'left',
    width: '35%',
    marginLeft: '10px',
    alignItems: 'center',
}

const cardBodyStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
}

const currentCardTextPStyles = {
    margin: '10% 0%',
}

const imgStyle = {
    width: '65%',
    height: '65%',
    objectFit: 'contain',
    margin: '5%',
}

const CurrentWeatherCard = (props) => {    
    const {time, timezone, temperature, weathercode, windspeed, units } = {...props.data}
    return(
        <div className="currentWeatherCard" style={containerStyle}>
            <div className="currentCardHeaderText" style={headerStyle}>
                <h3>{time.split("T").join(" ").replaceAll("-","/")}</h3>
                <h3>{timezone}</h3>
            </div>
            <div className="currentCardBody" style={cardBodyStyle}>
                <div className="currentCardText" style={textStyle}>
                    <h3 style={currentCardTextPStyles}>{weatherCodes[weathercode].description}</h3>
                    <p style={currentCardTextPStyles}><i class="fi fi-rr-temperature-high"></i> {Math.round(Number(temperature))}{units.temperature}</p>
                    <p style={currentCardTextPStyles}><i class="fi fi-sr-wind"></i> {Math.round(Number(windspeed))} {units.windspeed}</p>
                </div>
                <img 
                src={weatherCodes[weathercode].image}
                alt={weatherCodes[weathercode].description}
                style={imgStyle}
                />

            </div>
        </div>
    )
}
export default CurrentWeatherCard