import React, { useState, useEffect } from 'react';
import "./uslugePage.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Usluge from "./Usluge";

const UslugePage = () => {
    const [className, setClassName] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
        setClassName('show-animate');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="usluge-container">
            <Header />
            <Navbar />

            <div className={`wrapp-usluge ${className}`}>
                <Usluge />
            </div>
        </div>
    );
};

export default UslugePage;