import React from 'react'
import Map from "../Map/Map"
import "./Home.css"
export default function Home() {
    return (
        <>
            <div className="home-center">
                <h1>Garden Hacks</h1>
            </div>
            <div className="Map">
                <Map />
            </div>
        </>
    )
}