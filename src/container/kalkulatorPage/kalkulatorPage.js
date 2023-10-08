import "./kalkulatorPage.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Calc from "./Calc";

const KalkulatorPage = () => {

    const [className, setClassName] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
        setClassName('show-animate');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="kalkulator-container">
            <Header />
            <Navbar />
            <div className={`wrapp-calc ${className}`}>
                <Calc />
            </div>
        </div>
    );
};

export default KalkulatorPage;