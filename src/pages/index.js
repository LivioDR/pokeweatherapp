import Head from "next/head";
import Header from "../components/Header.jsx"
import WeatherPage from "./WeatherPage.jsx";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeWeather NextApp</title>
        <meta name="description" content="PokeWeather App to forecast the weather for the next 24 hours on your current location" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      </Head>
      <main>
        <Header/>
        <WeatherPage/>
      </main>
    </>
  );
}
