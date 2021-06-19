import React, { useState } from "react";
import { GoogleMap, InfoWindow, Marker, GoogleApiWrapper } from "@react-google-maps/api";
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';


function Map() {
    // export class Map extends Component {

    
    const iconList = {
        safe:
            "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        moderate:
            "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
        danger:
            "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    };

    // const google = window.google;

    const google = window.google = window.google ? window.google : {}

    const markers = [
        {
            id: 1,
            name: "Baga Beatch, Goa",
            details: "472 live cases",
            position: { lat: 15.5553, lng: 73.7517 },
            icon: iconList.moderate
        },
       
    ];

    const [activeMarker, setActiveMarker] = useState(null);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };


    const handleOnLoad = (map) => {
        const bounds = new google.maps.LatLngBounds();
        markers.forEach(({ position }) => bounds.extend(position));
        map.fitBounds(bounds);
    };



    return (
        <GoogleMap
            onLoad={handleOnLoad}
            onClick={() => setActiveMarker(null)}
            mapContainerStyle={{ width: "65vw", height: "65vh" }}
        >
            {markers.map(({ id, name, details, position, icon }) => (
                <Marker
                    key={id}
                    position={position}
                    icon={icon}
                    onClick={() => handleActiveMarker(id)}
                >
                    {activeMarker === id ? (
                        <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                            <div>
                                {name} <br />
                                {details}
                            </div>
                        </InfoWindow>
                    ) : null}
                </Marker>
            ))}
            <Marker >

            </Marker>
        </GoogleMap>
    );
}

export default Map;
