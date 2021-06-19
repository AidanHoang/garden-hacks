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
        {
            id: 2,
            name: "Radha Nagar Beatch, Andaman and Nicobar",
            details: "10 live cases",
            position: { lat: 11.9847, lng: 92.9508 },
            icon: iconList.safe
        },
        {
            id: 3,
            name: "Colva Beatch, South Goa",
            details: "325 live cases",
            position: { lat: 15.2505, lng: 73.9120 },
            icon: iconList.moderate
        },
        {
            id: 4,
            name: "Palolem Beatch, South Goa",
            details: "291 live cases",
            position: { lat: 15.0100, lng: 74.0230 },
            icon: iconList.moderate
        },
        {
            id: 5,
            name: "Valkara Beatch, Kerala",
            details: "102 live cases",
            position: { lat: 8.7356, lng: 76.7032 },
            icon: iconList.safe
        },
        {
            id: 6,
            name: "Camdolam Beatch, Goa",
            details: "472 live cases",
            position: { lat: 15.5128, lng: 73.7689 },
            icon: iconList.moderate
        },
        {
            id: 7,
            name: "Agonda Beatch, Goa",
            details: "272 live cases",
            position: { lat: 15.0456, lng: 73.9889 },
            icon: iconList.moderate
        },
        {
            id: 8,
            name: "Puri Beatch, Odisha",
            details: "122 live cases",
            position: { lat: 19.7947, lng: 85.8253 },
            icon: iconList.safe
        },
        {
            id: 9,
            name: "Calamgute Beatch, North Goa",
            details: "259 live cases",
            position: { lat: 15.5495, lng: 73.7535 },
            icon: iconList.moderate
        },
        {
            id: 10,
            name: "Cavelossin Beatch, Goa",
            details: "55 live cases",
            position: { lat: 15.1715, lng: 73.9415 },
            icon: iconList.safe
        },
        {
            id: 11,
            name: "Mandrem Beatch, Goa",
            details: "321 live cases",
            position: { lat: 15.6631, lng: 73.7419 },
            icon: iconList.moderate
        },
        {
            id: 12,
            name: "Marina Beatch, Tamil Nadu",
            details: "522 live cases",
            position: { lat: 13.0500, lng: 80.2824 },
            icon: iconList.danger
        },
        {
            id: 13,
            name: "Benaulim Beach, South Goa",
            details: "152 live cases",
            position: { lat: 15.2508, lng: 73.9202 },
            icon: iconList.moderate
        },
        {
            id: 14,
            name: "Muzhappilangad Drive-in Beach, Kannur",
            details: "72 live cases",
            position: { lat: 11.7932, lng: 75.4441 },
            icon: iconList.safe
        },
        {
            id: 15,
            name: "Ganpatipule Beach, Maharashtra",
            details: "572 live cases",
            position: { lat: 17.1470, lng: 73.2656 },
            icon: iconList.danger
        },
        {
            id: 16,
            name: "Tarkarli Beach, Malvan",
            details: "262 live cases",
            position: { lat: 16.0137, lng: 73.4898 },
            icon: iconList.danger
        },
        {
            id: 17,
            name: "Mandarmani Beach, Kolkata",
            details: "291 live cases",
            position: { lat: 21.664608, lng: 87.706906 },
            icon: iconList.safe
        },
        {
            id: 18,
            name: "Elephanta Beach, Havelock Beach, Andaman",
            details: "10 live cases",
            position: { lat: 12.0081, lng: 92.9416 },
            icon: iconList.safe
        },
        {
            id: 19,
            name: "Dona Paula Beach, Panaji",
            details: "72 live cases",
            position: { lat: 15.4533, lng: 73.8013 },
            icon: iconList.safe
        },
        {
            id: 20,
            name: "Yarada Beach, Visakhapatnam",
            details: "96 live cases",
            position: { lat: 17.6549, lng: 83.2692 },
            icon: iconList.safe
        },
        {
            id: 21,
            name: "Arambol Beach, North Goa",
            details: "392 live cases",
            position: { lat: 15.6847, lng: 73.7033 },
            icon: iconList.moderate
        },
        {
            id: 22,
            name: "Dhanushkodi Beach, Rameswaram",
            details: "472 live cases",
            position: { lat: 9.2151, lng: 79.3585 },
            icon: iconList.moderate
        },
        {
            id: 23,
            name: "Wandoor Beach, Port Blair",
            details: "102 live cases",
            position: { lat: 11.5958, lng: 92.6079 },
            icon: iconList.safe
        },
        {
            id: 24,
            name: "Varca Beach, South Goa",
            details: "472 live cases",
            position: { lat: 15.2209, lng: 73.9290 },
            icon: iconList.moderate
        },
        {
            id: 25,
            name: "Marari Beach, Kerala",
            details: "396 live cases",
            position: { lat: 9.6008, lng: 76.2983 },
            icon: iconList.moderate
        },
        {
            id: 26,
            name: "Bangaram Island Beach, Lakshadweep",
            details: "49 live cases",
            position: { lat: 10.9427, lng: 72.2879 },
            icon: iconList.safe
        },
        {
            id: 27,
            name: "Majorda Beach, South Goa",
            details: "472 live cases",
            position: { lat: 15.3112, lng: 73.9018 },
            icon: iconList.moderate
        },
        {
            id: 28,
            name: "Kala Pathar Beach, Havelock",
            details: "472 live cases",
            position: { lat: 12.0006, lng: 93.0071 },
            icon: iconList.danger
        },
        {
            id: 29,
            name: "Paradise Beach, Pondicherry",
            details: "72 live cases",
            position: { lat: 11.8735, lng: 79.8213 },
            icon: iconList.safe
        },
        {
            id: 30,
            name: "Auroville Beach, Pondicherry",
            details: "72 live cases",
            position: { lat: 11.9865, lng: 79.8497 },
            icon: iconList.safe
        },
        {
            id: 31,
            name: "Rushikonda Beach, Visakhapatnam",
            details: "96 live cases",
            position: { lat: 17.7825, lng: 83.3851 },
            icon: iconList.safe
        },
        {
            id: 32,
            name: "Ram Krishna Beach, Visakhapatnam",
            details: "96 live cases",
            position: { lat: 17.7142, lng: 83.3237 },
            icon: iconList.safe
        },
        {
            id: 33,
            name: "Chandrabhaga Beach, Orissa",
            details: "96 live cases",
            position: { lat: 19.8662, lng: 86.1154 },
            icon: iconList.safe
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
