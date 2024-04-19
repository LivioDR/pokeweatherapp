import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import getWeather from "@/utilities/getWeather";
import React, { useEffect, useState } from "react";


const WeatherPage = () => {
    
    const [location, setLocation] = useState({});
    const [geoEnabled, setGeoEnabled] = useState(false);
    const [geoErrorMsg, setGeoErrorMsg] = useState('');
    const [apiData, setApiData] = useState({});
    const [apiResponseReceived, setApiResponseReceived] = useState(false)

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
            setApiData(results)
        }
        if(geoEnabled){
            getData()
        }
    },[geoEnabled])

    useEffect(() => {
        if(apiData.hasOwnProperty('current_weather')){
            setApiResponseReceived(true)
            console.log("Api Response Received:")
            console.log(apiData)
        }
    },[apiData])

    return(
        <>
        { geoEnabled &&
        <>
        <h1>Your current position</h1>
        <p>Latitude: {location.lat}</p>
        <p>Longitude: {location.lon}</p>
        </>
        }
        <>
        {
            apiResponseReceived && 
            <>
                <CurrentWeatherCard data={{...apiData.current_weather, timezone: apiData.timezone}}/>
                {/* <p>{`${apiData?.current_weather?.temperature}${apiData?.current_weather_units?.temperature}`}</p> */}
            </>
        }
        </>
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