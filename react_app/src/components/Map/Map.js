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
            name: "Garden of the Sun, California",
            details: "472 live cases",
            position: { lat: 36.772983757015616, lng: -119.73374259299246 },
            icon: iconList.moderate
        },
        {
            id: 2,
            name: "Botanical Garden, California",
            details: "72 live cases",
            position: { lat: 37.7704447075985, lng: -122.4690568226829 },
            icon: iconList.safe
        },
        {
            id: 3,
            name: "Sherman Gardens, California",
            details: "232 live cases",
            position: { lat: 33.604955275817574, lng: -117.87403471498838 },
            icon: iconList.moderate
        },
        {
            id: 4,
            name: "Noguchi Garden, California",
            details: "92 live cases",
            position: { lat: 33.696343652446, lng: -117.88361258886542 },
            icon: iconList.safe
        },
        {
            id: 4,
            name: "Roger's Gardens, California",
            details: "512 live cases",
            position: { lat: 33.62202897150997, lng: -117.86487000674819 },
            icon: iconList.danger
        },
        {
            id: 5,
            name: "Forestiere Underground Gardens, California",
            details: "243 live cases",
            position: { lat: 36.815597871663805, lng: -119.88102805903031 },
            icon: iconList.danger
        },
        {
            id: 6,
            name: "United States Botanic Garden, Washington",
            details: "32 live cases",
            position: { lat: 38.88890597851199, lng: -77.01315494994833 },
            icon: iconList.safe
        },
        {
            id: 7,
            name: "Lewis Ginter Botanical Garden, Virginia",
            details: "235 live cases",
            position: { lat: 37.62088830178581, lng: -77.47172089764551 },
            icon: iconList.moderate
        },
        {
            id: 8,
            name: "New York Botanical Garden, New York",
            details: "128 live cases",
            position: { lat: 40.861867661541126, lng: -73.88069020208597 },
            icon: iconList.safe
        },
        {
            id: 9,
            name: "Fairchild Tropical Botanic Garden, Florida",
            details: "328 live cases",
            position: { lat: 25.67840919194113, lng: -80.27444733497425 },
            icon: iconList.moderate
        },
        {
            id: 10,
            name: "Atlanta Botanical Garden, Atlanta",
            details: "482 live cases",
            position: { lat: 33.79043766381052, lng: -84.37381447713118 },
            icon: iconList.danger
        },
        {
            id: 11,
            name: "Dallas Arboretum and Botanical Garden, Texas",
            details: "67 live cases",
            position: { lat: 32.82162741617674, lng: -96.71711091763339 },
            icon: iconList.safe
        },
        {
            id: 12,
            name: "Lotusland, California",
            details: "128 live cases",
            position: { lat: 34.44291988796123, lng: -119.65833043901365 },
            icon: iconList.safe
        },
        {
            id: 13,
            name: "Desert Botanical Garden, Arizona",
            details: "527 live cases",
            position: { lat: 33.462015404329776, lng: -111.94472314742382 },
            icon: iconList.danger
        },
        {
            id: 14,
            name: "The Topiary Park, Ohio",
            details: "314 live cases",
            position: { lat: 39.96120702629161, lng: -82.98760839047473 },
            icon: iconList.moderate
        },
        {
            id: 15,
            name: "Portland Japanese Garden, Oregon",
            details: "64 live cases",
            position: { lat: 45.5197235068326, lng: -122.70681502893103 },
            icon: iconList.safe
        },
        {
            id: 16,
            name: "Japanese Tea Garden, California",
            details: "215 live cases",
            position: { lat: 37.77132000486419, lng: -122.46850474676303 },
            icon: iconList.moderate
        },
        {
            id: 17,
            name: "Missouri Botanical Gardens, Missouri",
            details: "54 live cases",
            position: { lat: 38.612859396005085, lng: -90.2593368868013 },
            icon: iconList.safe
        },
        {
            id: 18,
            name: "Longwood Gardens, Pennsylvania",
            details: "312 live cases",
            position: { lat: 39.871197447933326, lng: -75.67505124258565 },
            icon: iconList.moderate
        },
        {
            id: 19,
            name: "Idaho Botanical Garden, Idaho",
            details: "256 live cases",
            position: { lat: 43.60679302505962, lng: -116.1338984766342 },
            icon: iconList.moderate
        },
        {
            id: 20,
            name: "DanWalt Gardens, Montana",
            details: "412 live cases",
            position: { lat: 45.92775412380726, lng: -108.5326588867566 },
            icon: iconList.danger
        },
        {
            id: 21,
            name: "Northern Plains Botanic Garden, North Dakota",
            details: "89 live cases",
            position: { lat: 47.09043590097439, lng: -96.80309401449647 },
            icon: iconList.safe
        },
        {
            id: 22,
            name: "Lauritzen Gardens, Nebraska",
            details: "292 live cases",
            position: { lat: 42.26703485424615, lng: -95.87255150539809 },
            icon: iconList.moderate
        },
        {
            id: 23,
            name: "Denver Botanic Gardens, Colorado",
            details: "523 live cases",
            position: { lat: 39.83225339175965, lng: -104.96692085511499 },
            icon: iconList.danger
        },
        {
            id: 24,
            name: "The Wichita Gardens, Kansas",
            details: "92 live cases",
            position: { lat: 37.696617365867326, lng: -97.36345898867991 },
            icon: iconList.safe
        },
        {
            id: 25,
            name: "Wisconsin Garden, Wisconsin",
            details: "321 live cases",
            position: { lat: 43.24613611713278, lng: -88.11955411914728 },
            icon: iconList.moderate
        },
        {
            id: 26,
            name: "Cheyenne Botanic Gardens, Wyoming",
            details: "94 live cases",
            position: { lat: 41.841219891387574, lng: -104.87886386274637 },
            icon: iconList.safe
        },
        {
            id: 27,
            name: "Fabian Garcia Botanical Gardens, New Mexico",
            details: "312 live cases",
            position: { lat: 33.258938427103246, lng: -106.8605587470264 },
            icon: iconList.moderate
        },
        {
            id: 28,
            name: "Red Butte Garden, Utah",
            details: "526 live cases",
            position: { lat: 41.579760542469884, lng: -111.96086510047483 },
            icon: iconList.danger
        },
        {
            id: 29,
            name: "Wellfield Botanic Gardens, Indiana",
            details: "64 live cases",
            position: { lat: 41.87172952442617, lng: -85.91384286840001 },
            icon: iconList.safe
        },
        {
            id: 30,
            name: "Acacia Demonstration Gardens, Nevada",
            details: "264 live cases",
            position: { lat: 36.41038534052995, lng: -114.90080332373498 },
            icon: iconList.moderate
        },
        {
            id: 31,
            name: "McCrory Gardens, South Dakota",
            details: "62 live cases",
            position: { lat: 44.47955818679794, lng: -96.82828370030334 },
            icon: iconList.safe
        },
        {
            id: 32,
            name: "Wister Gardens, Mississipi",
            details: "512 live cases",
            position: { lat: 34.27447092610714, lng: -90.52806233315029 },
            icon: iconList.danger
        },
        {
            id: 33,
            name: "The Oregon Garden, Oregon",
            details: "352 live cases",
            position: { lat: 44.99497885006193, lng: -122.79222594066185 },
            icon: iconList.moderate
        },
        {
            id: 34,
            name: "Bellingrath Gardens, Alabama",
            details: "264 live cases",
            position: { lat: 30.748253227436766, lng: -88.12982960134953 },
            icon: iconList.moderate
        },
        {
            id: 35,
            name: "State Botanical Garden, Kentucky",
            details: "612 live cases",
            position: { lat: 38.23033123706244, lng: -84.51917911991526 },
            icon: iconList.danger
        },
        {
            id: 36,
            name: "Myriad Botanical Gardens, Oklahoma",
            details: "27 live cases",
            position: { lat: 35.46646706837911, lng: -97.51777855368911 },
            icon: iconList.safe
        },
        {
            id: 37,
            name: "Fort Worth Botanic Garden, Texas",
            details: "382 live cases",
            position: { lat: 32.74898604422186, lng: -97.36458854333615 },
            icon: iconList.moderate
        },
        {
            id: 38,
            name: "Conservation Garden Park, Utah",
            details: "172 live cases",
            position: { lat: 41.2744860750826, lng: -112.03017556856763 },
            icon: iconList.safe
        },
        {
            id: 39,
            name: "Gardens at the Springs Preserve, Nevada",
            details: "312 live cases",
            position: { lat: 36.367400958631954, lng: -115.22525041522562 },
            icon: iconList.moderate
        },
        {
            id: 40,
            name: "Winnemucca Community Garden, Nevada",
            details: "64 live cases",
            position: { lat: 41.18338158683258, lng: -117.76519974369465 },
            icon: iconList.safe
        },
        {
            id: 41,
            name: "The Veterans Memorial Garden, Nebraska",
            details: "128 live cases",
            position: { lat: 41.376140359644175, lng: -96.80537556090255 },
            icon: iconList.safe
        },
        {
            id: 41,
            name: "Gatiss Gardens, Montana",
            details: "612 live cases",
            position: { lat: 48.803602244723315, lng: -114.06697156604832 },
            icon: iconList.danger
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
