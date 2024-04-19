import React from "react";
import { Jersey_10 } from 'next/font/google' 

const jersey = Jersey_10({ weight: "400", subsets: ["latin"] })


const headerStyle = {
    width: '100%',
    height: '2em',
    backgroundColor: 'blue',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    fontSize: '2em',
    padding: '10px',
    paddingLeft: '50px',
    alignItems: 'center',
}


const header = () => {
    return(
        <div id="header" style={headerStyle} className={jersey.className}>
            PokeWeather NextApp
        </div>
    )
}

export default header