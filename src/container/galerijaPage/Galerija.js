import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import { AiFillCloseSquare } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/assets/variants";

import { auti } from "../../components/galerija/auti";
import SwiperComponent from "../../components/swiper/SwiperComponent";
import "./galerija.css";


const Galerija = () => {
    const [selectedCar, setSelectedCar] = useState(-1);

    function setCarId(id) {
        setSelectedCar(id);
    }

    return (
        <div className='gallery'>
            {selectedCar !== -1 ? (
                <motion.div
                    className="home-h1"
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                     <SwiperComponent auto={auti[selectedCar - 1]} />
                     <AiFillCloseSquare size={45} className='close-button' onClick={() => setCarId(-1)}/>
                </motion.div>
               
            ) : (<></>)}
             <Swiper
                slidesPerView= "auto"
                grid={{
                    rows: 3,
                    fill: "column",
                }}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Grid, Pagination]}
                className={`gallery-swiper ${selectedCar === -1 ? "" : "hide-swiper"}`}
            >
                {auti.map((auto, index) => {
                    return (
                        <SwiperSlide className='gallery-slide'>
                            <img src={auto.slike[0]} alt='' onClick={() => {
                                setCarId(auto.id)
                            }}/>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Galerija;