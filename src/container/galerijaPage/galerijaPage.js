import React, { useState, useEffect } from 'react';
import "./galerijaPage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Galerija from "./Galerija";

const GalerijaPage = () => {
    const [className, setClassName] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
        setClassName('show-animate');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="galerija-container">
            <Header />
            <Navbar />
            <div className={`wrp-galerija ${className}`}>
                <Galerija />
            </div>
            
        </div>
    );
};

export default GalerijaPage;