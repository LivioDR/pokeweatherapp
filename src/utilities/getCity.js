import API_KEY from "./API_KEY.js";
import getLanguage from "./getLanguage.js";

const getCity = async(lat, lon) => {
    const limit = 1
    let res = await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${API_KEY}`).then(res => res.json())
    let lang = getLanguage()

    if(res[0].local_names.hasOwnProperty(lang)){
        return `${res[0].local_names[lang]}, ${res[0].state.length > 0 ? res[0].state + ", " : ""}${res[0].country}`
    }
    else{
        return res[0].state.length > 0 ? `${res[0].name}, ${res[0].state}, ${res[0].country}` : `${res[0].name}, ${res[0].country}` 
    }
}
export default getCity