import React from "react";
import "./locationinfo.css"
import { locationData } from "./locationItems";

const LocationInfo = () => {
    const handleDivClick = (data) => {
        if (data.broj) {
          window.location.href = `tel:${data.text}`;
        }
    };

    return (
        <div className="location-info_container">
            {locationData.map((data, index) => {
                return (
                    <div className="location-item" 
                        key={index}
                        onClick={() => handleDivClick(data)}>

                        {/* icon */}
                        <div className="icon">
                            {data.icon}
                        </div>
                        
        
                        {/* text */}
                        <div className="location-text_container">
                            <p className="location-text">{data.text}</p>
                            <p className="location-subtext">{data.subtext}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LocationInfo;