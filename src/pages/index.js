import Head from "next/head";
import Header from "../components/Header.jsx"
import WeatherPage from "./WeatherPage.jsx";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        {/* <title>PokeWeather NextApp</title>
        <meta name="description" content="PokeWeather App to forecast the weather for the next 24 hours on your current location" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        {/* META TAGS BY https://metatags.io */}
        {/* <!-- Primary Meta Tags --> */}
        <title>PokeWeather App</title>
        <meta name="title" content="PokeWeather App" />
        <meta name="description" content="PokeWeather App provides the weather on your current location for the next 24 hours with a playful pokemon animation to represent it." />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextpokeweather.netlify.app/" />
        <meta property="og:title" content="PokeWeather App" />
        <meta property="og:description" content="PokeWeather App provides the weather on your current location for the next 24 hours with a playful pokemon animation to represent it." />
        <meta property="og:image" content="../../public/meta-image.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nextpokeweather.netlify.app/" />
        <meta property="twitter:title" content="PokeWeather App" />
        <meta property="twitter:description" content="PokeWeather App provides the weather on your current location for the next 24 hours with a playful pokemon animation to represent it." />
        <meta property="twitter:image" content="../../public/meta-image.jpg" />
        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </Head>
      <main>
        <Header/>
        <WeatherPage/>
      </main>
    </>
  );
}
