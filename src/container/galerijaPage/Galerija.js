import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../components/assets/variants";

import { auti } from "../../components/galerija/auti";

import SwiperComponent from "../../components/swiper/SwiperComponent";
import "./galerija.css";

const itemsPerPage = 15;

const Galerija = () => {
    const [selectedCar, setSelectedCar] = useState(-1);

    function setCarId(id) {
        setSelectedCar(id);
    }

    return (
        <div className='gallery'>
            {selectedCar !== -1 ? (
                <motion.div
                    className="home-h11"
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                     <SwiperComponent auto={auti[selectedCar - 1]}  func={() => setCarId(-1)}/>
                </motion.div>
               
            ) : (<></>)}
            <h1 hidden>Naša&nbsp;<span className="text-accent"> galerija</span></h1>
            <div className={`cars-container ${selectedCar !== -1 ? 'hide' : ''}`}>
                {auti.map((auto, index) => {
                        return (
                            <div className='car-img' key={index}>
                                <>
                                    <img src={auto.slike[0]} alt='' onClick={() => {
                                        setCarId(auto.id)
                                    }}/>
                                    <p className='ime-vozila'>{auto.vozilo}</p>   
                                </>

                            </div>
                           
                        );
                })};
            </div>
        </div>
    );
};

export default Galerija;