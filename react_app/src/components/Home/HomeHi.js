import React from 'react'
import Map from "../Map/Map"

export default function HomeHi() {
    return (
        <>
            <div className="home-center">
                <h1>Garden Hacks</h1>
                <p>COVID के दौरान बीच ट्रिप की योजना बनाने का आसान तरीका। सर्फ अप उस क्षेत्र को दिखाता है जो सुरक्षित नहीं है (अर्थात अधिक COVID मामले होने पर)
                </p>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/blue-dot.png" className="Marker__info" /> : कुछ COVID मामले और यह यात्रा करने के लिए सुरक्षित है</h2>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png" className="Marker__info" /> : मध्यमध्यम COVID मामले और यह यात्रा करने के लिए थोड़ा जोखिम भरा है</h2>
                <h2><img src="http://maps.google.com/mapfiles/ms/icons/red-dot.png" className="Marker__info" /> : अधिक संख्या में COVID मामले और यहां जाना बहुत खतरनाक है</h2>
            </div>
            <div className="Map">
                <Map />
            </div>
        </>
    )
}
