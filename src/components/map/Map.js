import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { useState, useRef } from "react";
import "./map.css";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "./marker.png",
  iconSize: [37, 37],
  iconAnchor: [17, 46],
  popupAnchor: [0, -45],
});

const Map = () => {
  const [center, setCenter] = useState({lat: 45.677280, lng: 15.702500});
  const [pula, setPula] = useState({lat: 44.857307899510374, lng: 13.84164061757081});
  const [porec, setPorec] = useState({lat: 45.219937000000000,lng: 13.609200000000000});
  const ZOOM_LEVEL = 8;
  const mapRef = useRef();

  return (
    <div className="map-container">
      <MapContainer 
        center={{lat: 45.377280, lng: 15.202500}}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        className='leaflet-container'
      >
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <Marker position={[center.lat, center.lng]} icon={markerIcon} >
              <Popup>
                <a className='link-container' href="https://www.google.com/maps?q=45.677280,15.702500" target="_blank">
                  <b className='location'>Donji Desinec 130,<br />Jastrebarsko</b>
                </a>
              </Popup>
          </Marker>

          <Marker position={[pula.lat, pula.lng]} icon={markerIcon} >
              <Popup>
                <a className='link-container' href="https://www.google.com/maps?q=44.857307899510374,13.84164061757081" target="_blank">
                  <b className='location'>Savudrijska ul. 1, 52 100,<br />Pula</b>
                </a>
              </Popup>
          </Marker>


           <Marker position={[porec.lat, porec.lng]} icon={markerIcon} >
              <Popup>
                <a className='link-container' href="https://www.google.com/maps?q=45.219937000000000,13.609200000000000" target="_blank">
                  <b className='location'>Karla Huguesa 26a<br />Poreč</b>
                </a>
              </Popup>
          </Marker>
      </MapContainer>
    </div>
  );
};
  
export default Map;
