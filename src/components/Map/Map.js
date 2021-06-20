import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow, } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import "@reach/combobox/styles.css";
import "./Map.scss"

const mapContainerStyle = {
    height: "70vh",
    width: "70vw",
    marginBottom: "50px"
};
const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 40.4637,
    lng: 3.7492,
};

export default function App() {
    const [markers, setMarkers] = React.useState([]);

    const iconList = {
        safe:
            "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        moderate:
            "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
        danger:
            "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
    };

    const google = window.google = window.google ? window.google : {}

    const markers2 = [
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
            details: "233 live cases",
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
        // India
        {
            id: 261,
            name: "Siddhartha Herbal Garden, Vijayawada",
            details: "325 live cases",
            position: { lat: 16.5044, lng: 80.6489 },
            icon: iconList.moderate
        },
        {
            id: 262,
            name: "S V Garden",
            details: "365 live cases",
            position: { lat: 13.1884, lng: 78.8409 },
            icon: iconList.moderate
        },
        {
            id: 263,
            name: "Pottla Raghu Garden, Theetakal",
            details: "105 live cases",
            position: { lat: 14.6129, lng: 77.0052 },
            icon: iconList.safe
        },
        {
            id: 264,
            name: "YSR GARDEN, Kakarla",
            details: "87 live cases",
            position: { lat: 15.6496, lng: 79.1113 },
            icon: iconList.safe
        },
        {
            id: 265,
            name: "Indra's Garden",
            details: "95 live cases",
            position: { lat: 14.5993, lng: 78.1316 },
            icon: iconList.safe
        },
        {
            id: 267,
            name: "VR Gardens",
            details: "52 live cases",
            position: { lat: 14.5332, lng: 77.7468 },
            icon: iconList.safe
        },
        {
            id: 268,
            name: "RRCPReddy’s Gardens",
            details: "612 live cases",
            position: { lat: 14.6158, lng: 78.8004 },
            icon: iconList.danger
        },
        {
            id: 269,
            name: "Singareddys garden",
            details: "573 live cases",
            position: { lat: 13.9936, lng: 78.7697 },
            icon: iconList.danger
        },
        {
            id: 270,
            name: "Rock Garden - A P Tourism",
            details: "573 live cases",
            position: { lat: 15.6917, lng: 78.1525 },
            icon: iconList.danger
        },
        {
            id: 271,
            name: "Pakke Tiger Reserve",
            details: "324 live cases",
            position: { lat: 27.0984, lng: 92.8178 },
            icon: iconList.moderate
        },
        {
            id: 272,
            name: "Indira Gandhi Park itanagar",
            details: "366 live cases",
            position: { lat: 27.0981, lng: 93.6215 },
            icon: iconList.moderate
        },
        {
            id: 273,
            name: "Dalda Garden",
            details: "106 live cases",
            position: { lat: 27.2053, lng: 95.4703 },
            icon: iconList.safe
        },
        {
            id: 274,
            name: "Deopani Park",
            details: "87 live cases",
            position: { lat: 28.1572, lng: 95.8495 },
            icon: iconList.safe
        },
        {
            id: 275,
            name: "Botanical Garden",
            details: "495 live cases",
            position: { lat: 26.9943, lng: 95.5407 },
            icon: iconList.danger
        },
        {
            id: 277,
            name: "Florican Garden,Dhubri",
            details: "54 live cases",
            position: { lat: 26.2524, lng: 90.2767 },
            icon: iconList.safe
        },
        {
            id: 278,
            name: "Jokai Botanical Garden",
            details: "12 live cases",
            position: { lat: 27.3840, lng: 94.9350 },
            icon: iconList.safe
        },
        {
            id: 279,
            name: "Kanaklata Park & Rock Garden",
            details: "3 live cases",
            position: { lat: 26.6183, lng: 92.7802 },
            icon: iconList.safe
        },
        {
            id: 280,
            name: "Mayur Gardens",
            details: "573 live cases",
            position: { lat: 26.1620, lng: 91.7713 },
            icon: iconList.danger
        },
        {
            id: 281,
            name: "Shyamul Garden",
            details: "324 live cases",
            position: { lat: 26.8855, lng: 85.0302 },
            icon: iconList.moderate
        },
        {
            id: 282,
            name: "Botanical Garden / Sunderganj Bagicha",
            details: "366 live cases",
            position: { lat: 24.7265, lng: 84.3012 },
            icon: iconList.moderate
        },
        {
            id: 283,
            name: "Mangoes Garden",
            details: "107 live cases",
            position: { lat: 25.8806, lng: 85.2606 },
            icon: iconList.safe
        },
        {
            id: 284,
            name: "Mithila Garden",
            details: "88 live cases",
            position: { lat: 24.9246, lng: 85.5426 },
            icon: iconList.safe
        },
        {
            id: 285,
            name: "Kargil Park",
            details: "496 live cases",
            position: { lat: 25.1777, lng: 85.5122 },
            icon: iconList.danger
        },
        {
            id: 287,
            name: "Nishiyama Garden",
            details: "54 live cases",
            position: { lat: 25.3749, lng: 85.0418 },
            icon: iconList.safe
        },
        {
            id: 288,
            name: "Lakhachak Garden",
            details: "13 live cases",
            position: { lat: 25.3690, lng: 85.6848 },
            icon: iconList.safe
        },
        {
            id: 289,
            name: "Edenic Garden",
            details: "6 live cases",
            position: { lat: 25.1605, lng: 85.6913 },
            icon: iconList.safe
        },
        {
            id: 290,
            name: "Company Garden Munger",
            details: "574 live cases",
            position: { lat: 25.3819, lng: 86.4665 },
            icon: iconList.danger
        },
        {
            id: 291,
            name: "Shree ram park",
            details: "317 live cases",
            position: { lat: 26.8855, lng: 85.0302 },
            icon: iconList.moderate
        },
        {
            id: 292,
            name: "Urja Shiksha Park",
            details: "366 live cases",
            position: { lat: 22.0765, lng: 82.1835 },
            icon: iconList.moderate
        },
        {
            id: 293,
            name: "Deendayal Upadhyaay Garden, Bilaspur",
            details: "109 live cases",
            position: { lat: 22.0797, lng: 82.1409 },
            icon: iconList.safe
        },
        {
            id: 294,
            name: "Paryavaran Udyaan, Bilaspur",
            details: "88 live cases",
            position: { lat: 22.0672, lng: 82.1761 },
            icon: iconList.safe
        },
        {
            id: 295,
            name: "Gokul Park",
            details: "496 live cases",
            position: { lat: 25.1777, lng: 85.5122 },
            icon: iconList.danger
        },
        {
            id: 296,
            name: "Konher Garden",
            details: "88 live cases",
            position: { lat: 22.0873, lng: 82.1449 },
            icon: iconList.safe
        },
        {
            id: 297,
            name: "Green Park Children Garden",
            details: "54 live cases",
            position: { lat: 22.0750, lng: 82.1404 },
            icon: iconList.safe
        },
        {
            id: 298,
            name: "Herbal Garden",
            details: "13 live cases",
            position: { lat: 13.0758, lng: 77.5687 },
            icon: iconList.safe
        },
        {
            id: 299,
            name: "Mengo Garden",
            details: "6 live cases",
            position: { lat: 13.0760, lng: 77.5867 },
            icon: iconList.safe
        },
        {
            id: 300,
            name: "Jarkabandi State Forest",
            details: "174 live cases",
            position: { lat: 13.0621, lng: 77.5404 },
            icon: iconList.moderate
        },
        {
            id: 301,
            name: "Coach park",
            details: "17 live cases",
            position: { lat: 15.5997, lng: 73.7349 },
            icon: iconList.safe
        },
        {
            id: 302,
            name: "Green Park",
            details: "36 live cases",
            position: { lat: 15.5737, lng: 73.8069 },
            icon: iconList.safe
        },
        {
            id: 303,
            name: "Aga Khan Children's Park",
            details: "109 live cases",
            position: { lat: 15.2742891, lng: 73.9578409 },
            icon: iconList.safe
        },
        {
            id: 304,
            name: "Campal Gardens",
            details: "8 live cases",
            position: { lat: 15.493568, lng: 73.819207 },
            icon: iconList.safe
        },
        {
            id: 305,
            name: "Gkvk botanical garden",
            details: "46 live cases",
            position: { lat: 13.0797, lng: 77.5755 },
            icon: iconList.safe
        },
        {
            id: 306,
            name: "GIDC ROTARY GARDEN",
            details: "88 live cases",
            position: { lat: 22.7203, lng: 71.6600 },
            icon: iconList.safe
        },
        {
            id: 307,
            name: "Waghai Botanical Garden",
            details: "54 live cases",
            position: { lat: 20.7737, lng: 73.4976 },
            icon: iconList.safe
        },
        {
            id: 308,
            name: "Cactus Garden",
            details: "13 live cases",
            position: { lat: 21.8277, lng: 73.7397 },
            icon: iconList.safe
        },
        {
            id: 309,
            name: "Sneh Rashmi Botanical Garden",
            details: "6 live cases",
            position: { lat: 21.2223, lng: 72.7841 },
            icon: iconList.safe
        },
        {
            id: 310,
            name: "Sector 28 Garden",
            details: "174 live cases",
            position: { lat: 23.2473, lng: 72.6590 },
            icon: iconList.moderate
        },
        {
            id: 311,
            name: "Botanical Garden",
            details: "17 live cases",
            position: { lat: 29.1415, lng: 75.7129 },
            icon: iconList.safe
        },
        {
            id: 312,
            name: "Rose Garden Faridabad",
            details: "36 live cases",
            position: { lat: 28.4039, lng: 77.3337 },
            icon: iconList.safe
        },
        {
            id: 313,
            name: "Yadavindra Gardens, Pinjore",
            details: "109 live cases",
            position: { lat: 30.7941, lng: 76.9147 },
            icon: iconList.safe
        },
        {
            id: 314,
            name: "Daksh Gardens",
            details: "8 live cases",
            position: { lat: 28.3593, lng: 76.7455 },
            icon: iconList.safe
        },
        {
            id: 315,
            name: "Deepali Garden",
            details: "46 live cases",
            position: { lat: 28.3593, lng: 76.7455 },
            icon: iconList.safe
        },
        {
            id: 316,
            name: "Apple Garden",
            details: "88 live cases",
            position: { lat: 32.2294, lng: 77.1949 },
            icon: iconList.safe
        },
        {
            id: 317,
            name: "Tabog Garden",
            details: "54 live cases",
            position: { lat: 32.6119, lng: 76.9378 },
            icon: iconList.safe
        },
        {
            id: 318,
            name: "Yadavindra Gardens, Pinjore",
            details: "13 live cases",
            position: { lat: 30.7993, lng: 76.9149 },
            icon: iconList.safe
        },
        {
            id: 319,
            name: "Guava Garden",
            details: "206 live cases",
            position: { lat: 31.4799, lng: 76.2576 },
            icon: iconList.moderate
        },
        {
            id: 320,
            name: "Ayansh Garden",
            details: "474 live cases",
            position: { lat: 31.8504, lng: 76.2564 },
            icon: iconList.danger
        },
        {
            id: 321,
            name: "SPEAK® Herbal Garden",
            details: "17 live cases",
            position: { lat: 33.6816, lng: 75.2189 },
            icon: iconList.safe
        },
        {
            id: 322,
            name: "Indira Gandhi Memorial Tulip Garden",
            details: "36 live cases",
            position: { lat: 34.0960, lng: 74.8784 },
            icon: iconList.safe
        },
        {
            id: 323,
            name: "Botanical Garden",
            details: "109 live cases",
            position: { lat: 32.9160, lng: 75.1416 },
            icon: iconList.moderate
        },
        {
            id: 324,
            name: "Bagh-e-Bahu",
            details: "8 live cases",
            position: { lat: 32.7244, lng: 74.8776 },
            icon: iconList.safe
        },
        {
            id: 325,
            name: "Nagrota Park",
            details: "46 live cases",
            position: { lat: 32.7426, lng: 74.8679 },
            icon: iconList.safe
        },
        {
            id: 326,
            name: "Tiwary Mango Garden",
            details: "288 live cases",
            position: { lat: 24.4813, lng: 86.6148 },
            icon: iconList.moderate
        },
        {
            id: 327,
            name: "Rungta Garden",
            details: "54 live cases",
            position: { lat: 22.5252, lng: 85.8077 },
            icon: iconList.safe
        },
        {
            id: 328,
            name: "Hatia Garden",
            details: "413 live cases",
            position: { lat: 23.4323, lng: 84.6764 },
            icon: iconList.danger
        },
        {
            id: 329,
            name: "N D A I Garden",
            details: "206 live cases",
            position: { lat: 23.8596, lng: 86.8568 },
            icon: iconList.moderate
        },
        {
            id: 330,
            name: "Biodiversity Park",
            details: "474 live cases",
            position: { lat: 23.2547, lng: 85.3469 },
            icon: iconList.danger
        },
        {
            id: 331,
            name: "Ramamurthy Gardens",
            details: "17 live cases",
            position: { lat: 13.0085, lng: 77.6737 },
            icon: iconList.safe
        },
        {
            id: 332,
            name: "Lalbagh Botanical Garden",
            details: "36 live cases",
            position: { lat: 12.9507, lng: 77.5848 },
            icon: iconList.safe
        },
        {
            id: 333,
            name: "Ramamurthy Gardens",
            details: "109 live cases",
            position: { lat: 13.0085, lng: 77.6737 },
            icon: iconList.moderate
        },
        {
            id: 334,
            name: "Flower Garden",
            details: "8 live cases",
            position: { lat: 12.950771, lng: 77.584236 },
            icon: iconList.safe
        },
        {
            id: 335,
            name: "Kevumpu Park",
            details: "46 live cases",
            position: { lat: 12.9147, lng: 77.6090 },
            icon: iconList.safe
        },
        {
            id: 336,
            name: "Garden Center",
            details: "288 live cases",
            position: { lat: 8.5241, lng: 76.9366 },
            icon: iconList.moderate
        },
        {
            id: 337,
            name: "Carmelgiri Botanical Garden",
            details: "54 live cases",
            position: { lat: 10.0960, lng: 77.1013 },
            icon: iconList.safe
        },
        {
            id: 338,
            name: "VMK Botanical Garden",
            details: "413 live cases",
            position: { lat: 11.3454, lng: 75.8899 },
            icon: iconList.danger
        },
        {
            id: 339,
            name: "Udyanam Garden",
            details: "206 live cases",
            position: { lat: 10.0832, lng: 76.2095 },
            icon: iconList.moderate
        },
        {
            id: 340,
            name: "Rock Garden",
            details: "474 live cases",
            position: { lat: 10.8281, lng: 76.7368 },
            icon: iconList.danger
        },
        {
            id: 341,
            name: "Rose Garden (Eden Garden)",
            details: "17 live cases",
            position: { lat: 24.1157, lng: 82.6553 },
            icon: iconList.safe
        },
        {
            id: 342,
            name: "Italian Garden",
            details: "36 live cases",
            position: { lat: 26.2183, lng: 78.1828 },
            icon: iconList.safe
        },
        {
            id: 343,
            name: "Grand Aastha Garden",
            details: "109 live cases",
            position: { lat: 23.1761, lng: 75.7957 },
            icon: iconList.moderate
        },
        {
            id: 344,
            name: "Horticulture Garden",
            details: "8 live cases",
            position: { lat: 22.4607, lng: 78.4237 },
            icon: iconList.safe
        },
        {
            id: 345,
            name: "N.H.A.I Garden",
            details: "46 live cases",
            position: { lat: 23.8904, lng: 78.8255 },
            icon: iconList.safe
        },
        {
            id: 346,
            name: "Rajiv Gandhi Garden",
            details: "288 live cases",
            position: { lat: 24.5965, lng: 73.6619 },
            icon: iconList.moderate
        },
        {
            id: 347,
            name: "Chatra Vilas Garden",
            details: "54 live cases",
            position: { lat: 25.1880, lng: 75.8519 },
            icon: iconList.safe
        },
        {
            id: 348,
            name: "Mandore Garden",
            details: "413 live cases",
            position: { lat: 26.3525, lng: 73.0353 },
            icon: iconList.danger
        },
        {
            id: 349,
            name: "Subhash Udhyan",
            details: "206 live cases",
            position: { lat: 26.4690, lng: 74.6331 },
            icon: iconList.moderate
        },
        {
            id: 350,
            name: "Love Garden",
            details: "474 live cases",
            position: { lat: 28.2014, lng: 76.8276 },
            icon: iconList.danger
        },
        {
            id: 351,
            name: "Rose Garden (Eden Garden)",
            details: "17 live cases",
            position: { lat: 24.1157, lng: 82.6553 },
            icon: iconList.safe
        },
        {
            id: 352,
            name: "Italian Garden",
            details: "36 live cases",
            position: { lat: 26.2183, lng: 78.1828 },
            icon: iconList.safe
        },
        {
            id: 353,
            name: "Grand Aastha Garden",
            details: "109 live cases",
            position: { lat: 23.1761, lng: 75.7957 },
            icon: iconList.moderate
        },
        {
            id: 354,
            name: "Horticulture Garden",
            details: "8 live cases",
            position: { lat: 22.4607, lng: 78.4237 },
            icon: iconList.safe
        },
        {
            id: 355,
            name: "N.H.A.I Garden",
            details: "46 live cases",
            position: { lat: 23.8904, lng: 78.8255 },
            icon: iconList.safe
        },
        {
            id: 356,
            name: "Rajiv Gandhi Garden",
            details: "288 live cases",
            position: { lat: 24.5965, lng: 73.6619 },
            icon: iconList.moderate
        },
        {
            id: 357,
            name: "Chatra Vilas Garden",
            details: "54 live cases",
            position: { lat: 25.1880, lng: 75.8519 },
            icon: iconList.safe
        },
        {
            id: 358,
            name: "Mandore Garden",
            details: "413 live cases",
            position: { lat: 26.3525, lng: 73.0353 },
            icon: iconList.danger
        },
        {
            id: 359,
            name: "Subhash Udhyan",
            details: "206 live cases",
            position: { lat: 26.4690, lng: 74.6331 },
            icon: iconList.moderate
        },
        {
            id: 360,
            name: "Love Garden",
            details: "474 live cases",
            position: { lat: 28.2014, lng: 76.8276 },
            icon: iconList.danger
        },
        {
            id: 361,
            name: "Fairly dense mixed jungle",
            details: "401 live cases",
            position: { lat: 13.0833, lng: 77.5816 },
            icon: iconList.danger
        },
    ]

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

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
        <div>
            <Locate panTo={panTo} />
            <Search panTo={panTo} />

            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={3}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers2.map(({ id, name, details, position, icon }) => (
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
            </GoogleMap>
        </div>
    );
}

function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
            style={{ marginRight: "-42rem", top: "2rem" }}
        >
            <img src="https://img.icons8.com/emoji/48/000000/compass-emoji.png" alt="compass" />
        </button>
    );
}

function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 28.7041, lng: () => 77.1025 },
            radius: 100 * 1000,
        },
    });


    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    return (
        <div className="search">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    className="Input"
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Search your location"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" &&
                            data.map(({ id, description }) => (
                                <ComboboxOption key={id} value={description} />
                            ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}