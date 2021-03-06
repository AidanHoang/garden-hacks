import React from 'react'
import Map from "../Map/Map"

export default function HomeHi() {
    return (
        <>
            <div className="home-center">
                <h1>Garden Dome</h1>
                <p>COVID के दौरान बगीचों में जाने का सबसे आसान तरीका। गार्डन डोम सुरक्षा स्तरों के आधार पर क्षेत्रों को दिखाता है (COVID मामलों के माध्यम से)</p>
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
