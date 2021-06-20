import React from 'react'
import Map from "../Map/Map"
import "./Home.css"
export default function Home() {
    return (
        <>
            <div className="home-center">
                <h1>Garden Dome</h1>
                <p>Easiest way to visit gardens during COVID. Garden Dome shows the regions based on safety levels (via COVID cases)</p>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" alt="safe" className="Marker__info" /> : Few COVID cases and it's safe to visit</h2>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" alt="risky" className="Marker__info" /> : Moderate COVID cases and it's a bit risky to visit </h2>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" alt="danger" className="Marker__info" /> : More number of COVID cases and it's very dangerous to visit</h2>
            </div>
            <div className="Map">
                <Map />
            </div>
        </>
    )
}