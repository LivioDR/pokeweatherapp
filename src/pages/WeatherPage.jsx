import React, { useEffect, useState } from "react";


const WeatherPage = () => {
    
    const [location, setLocation] = useState({});
    const [geoEnabled, setGeoEnabled] = useState(false);
    const [geoErrorMsg, setGeoErrorMsg] = useState('');

    useEffect(()=>{
        const success = (pos) => {
            console.log(pos.coords)
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

    useEffect(()=>{
        console.log('Location updated')
        console.log(location)
    },[location])

    return(
        <>
        { geoEnabled &&
        <>
        <h1>Your current position</h1>
        <p>Latitude: {location.lat}</p>
        <p>Longitude: {location.lon}</p>
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