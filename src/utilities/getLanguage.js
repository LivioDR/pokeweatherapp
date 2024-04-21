const getLanguage = () => {
    let lang = navigator.language
    if(lang.includes("-")){
        return lang.toLowerCase().split("-")[0]
    }
    else
        return lang.toLowerCase()
}

export default getLanguage