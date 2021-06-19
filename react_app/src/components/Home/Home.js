import React from 'react'
import Map from "../Map/Map"
import "./Home.css"
export default function Home() {
    return (
        <>
            <div className="home-center">
                <h1>Garden Hacks</h1>
                <p>Easy way to visit gardens during COVID. Garden Dome shows the region which is not safe(i.e. having more COVID cases)</p>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" className="Marker__info" /> : Few COVID cases and its safe to visit</h2>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" className="Marker__info" /> : Moderate COVID cases and it's a bit risky to visit </h2>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" className="Marker__info" /> : More number of COVID cases and it's very dangerous to visit</h2>
            </div>
            <div className="Map">
                <Map />
            </div>
        </>
    )
}