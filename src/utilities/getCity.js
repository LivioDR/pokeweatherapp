import getLanguage from "./getLanguage.js";

const getCity = async(lat, lon) => {
    const limit = 1

    let res = await fetch('/api/weather',{
        method: 'POST',
        body: JSON.stringify({
            lat: lat,
            lon: lon,
            limit: 1,
        })
    }).then(response => response.json()).then(res => res.message)

    let lang = getLanguage()

    if(res[0].local_names.hasOwnProperty(lang)){
        return `${res[0].local_names[lang]}, ${res[0].state.length > 0 ? res[0].state + ", " : ""}${res[0].country}`
    }
    else{
        return res[0].state.length > 0 ? `${res[0].name}, ${res[0].state}, ${res[0].country}` : `${res[0].name}, ${res[0].country}` 
    }
}
export default getCity