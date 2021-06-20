import React from 'react'
import Map from "../Map/Map"
import "./Home.css"
export default function Home() {
    return (
        <>
            <div className="home-center">
                <h1>Garden Hacks</h1>
                <p>Easiest way to visit gardens during COVID. Garden Dome shows the regions based on safety levels (via COVID cases)</p>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" className="Marker__info" /> : Small Amount of COVID cases | Its safe to visit</h2>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" className="Marker__info" /> : Moderate Amount of COVID cases | It's a bit risky to visit </h2>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" className="Marker__info" /> : Large Amount of COVID cases | It's very dangerous to visit</h2>
            </div>
            <div className="Map">
                <Map />
            </div>
        </>
    )
}