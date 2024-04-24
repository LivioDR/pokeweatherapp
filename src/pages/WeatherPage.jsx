import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import ForecastWeatherCard from "@/components/ForecastWeatherCard";
import getCity from "@/utilities/getCity.js"
import getWeather from "@/utilities/getWeather";
import React, { useEffect, useState } from "react";


const WeatherPage = () => {
    
    const [location, setLocation] = useState({});
    const [geoEnabled, setGeoEnabled] = useState(false);
    const [geoErrorMsg, setGeoErrorMsg] = useState('');
    const [apiData, setApiData] = useState({});
    const [apiResponseReceived, setApiResponseReceived] = useState(false)
    const [arrayOfForecast, setArrayOfForecast] = useState([])
    const [dataProcessed, setDataProcessed] = useState(false)

    const forecastContainerStyle = {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        overflowX: 'scroll',
        width: '100%',
    }

    useEffect(()=>{
        const success = (pos) => {
            setGeoEnabled(true)
            setLocation({
                lat: pos.coords.latitude,
                lon: pos.coords.longitude
            })
        }
        const error = (err) => {
            console.error(err.message)
            setGeoErrorMsg(err.message)
        }
        
        navigator.geolocation.getCurrentPosition(success, error)
        
    },[])
    
    useEffect(() => {
        const getData = async() => {
            let results = await getWeather(location.lat,location.lon)
            const city = await getCity(location.lat,location.lon)
            if(city != undefined && typeof(city) == 'string' && city.length > 0){
                results.timezone = city
            }
            setApiData(results)
        }
        if(geoEnabled){
            setGeoErrorMsg("Loading...")
            getData()
        }
    },[geoEnabled])

    useEffect(() => {
        if(apiData.hasOwnProperty('current_weather')){
            setApiResponseReceived(true)
            let array = []
            let timeNow = false
            let myTime = (new Date()).getHours()
            for(let i=0; i<apiData.hourly.time.length; i++){
                // Filtering out the past weather forecast for the day
                if(!timeNow && Number(apiData.hourly.time[i].split("T")[1].substring(0,2)) <= myTime){
                    continue;
                }
                else{
                    timeNow = true
                }
                // Then creating an array of weather objects
                const foreObj = {
                    cloud_cover: `${apiData.hourly.cloud_cover[i]}${apiData.hourly_units.cloud_cover}`,
                    precipitation_probability: `${apiData.hourly.precipitation_probability[i]}${apiData.hourly_units.precipitation_probability}`,
                    snowfall: `${apiData.hourly.snowfall[i]} ${apiData.hourly_units.snowfall}`,
                    temperature_2m: `${Math.round(Number(apiData.hourly.temperature_2m[i]))}${apiData.hourly_units.temperature_2m}`,
                    time: apiData.hourly.time[i].split("T")[1],
                    date: apiData.hourly.time[i].split("T")[0],
                    weather_code: apiData.hourly.weather_code[i],
                    wind_speed_10m: `${Math.round(Number(apiData.hourly.wind_speed_10m[i]))} ${apiData.hourly_units.wind_speed_10m}`,
                    timezone: apiData.timezone
                }
                array.push(foreObj)
            }
            // getting just the next 24 hours
            array = array.slice(0, 24)
            setArrayOfForecast(array)
        }
    },[apiData])

    useEffect(()=>{
        if(arrayOfForecast.length > 0){
            setDataProcessed(true)
        }
    },[arrayOfForecast])

    return(
        <>
        {
            apiResponseReceived && 
            dataProcessed &&
            <>
                <div className="wrapper">
                    <CurrentWeatherCard data={{...apiData.current_weather, units: apiData.current_weather_units, timezone: apiData.timezone}}/>
                    <div id="forecastContainer" style={forecastContainerStyle}>
                        {arrayOfForecast.map(item=><ForecastWeatherCard data={item} key={item.date + item.time}/>)}
                    </div>
                </div>
            </>
        }
        {
            geoEnabled &&
            !apiResponseReceived &&
            <>
            <h1>{geoErrorMsg}</h1>
            </>
        }
        {
            !geoEnabled &&
            <>
            <h1>{geoErrorMsg}</h1>
            <h2>Please enable geolocation to continue</h2>
            </>
        }
        </>
    )
}
export default WeatherPage