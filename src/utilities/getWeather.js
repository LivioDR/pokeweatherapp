const getWeather = async(LAT, LON) => {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,apparent_temperature,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=temperature_2m,precipitation_probability,rain,showers,snowfall,weather_code,surface_pressure,cloud_cover,wind_speed_10m&timezone=auto`
    let response = await fetch(apiUrl).then(res => res.json())
    console.log(response)
}
export default getWeather
