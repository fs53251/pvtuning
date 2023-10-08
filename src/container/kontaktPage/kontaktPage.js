import "./kontaktPage.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Kontakt from "./Kontakt";

const KontaktPage = () => {

    const [className, setClassName] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
        setClassName('show-animate');
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="kontakt-container">
            <Header />
            <Navbar />
            <div className={`wrapp-kontakt ${className}`}>
                <Kontakt />
            </div>
        </div>
    );
};

export default KontaktPage;