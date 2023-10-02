import React, { useState, useEffect} from "react";
import "./usluge.css";
import { uslugeData } from "../../components/usluge/uslugeData";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import {
    BiSolidRightArrow,
    BiSolidDownArrow,
} from "react-icons/bi";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Usluge = () => {
    const [selectedSlide, setSelectedSlide] = useState(0);

    const [showPrednosti, setShowPrednosti] = useState(false);

    const [showUsluge, setShowUsluge] = useState(false);

    const toggleUsluge = () => {
        setShowUsluge(!showUsluge);
    };

    const togglePrednosti = () => {
        setShowPrednosti(!showPrednosti);
    };

    const show = uslugeData[selectedSlide];
    return (
        <>
            <Swiper 
            slidesPerView="auto"
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            style={{
                marginBottom: "1.6rem",
                paddingLeft: "1.4rem",
                paddingRight: "1.4rem",
                paddingTop: "0rem",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="swiper-container"
            >

                {uslugeData.map((usluga, index) => {
                    return (
                        <SwiperSlide key={index}
                            style={{
                                width: "180px",
                                height: "150px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                padding: "0.6rem",
                                borderRadius: "10px",
                                marginBottom: "20px",
                            }}
                            className={`swiper-slide ${index === selectedSlide ? "clicked" : ""}`}
                            onClick={() => {
                                setSelectedSlide(index)
                                }} 
                            >

                            <div className="swiper-slide_icon">{usluga.icon}</div>
                            
                            <div className="swiper-slide_text">
                                {usluga.title}
                            </div>
          
                        </SwiperSlide>

                    );
                })}
            </Swiper>
            
            <div class="container">
                <header className="head">
                    <h1>{show.title}</h1>
                </header>
                <section class="description">
                    <p>{show.description}</p>
                </section>
                <section class="potential">
                    <div className={`more ${showPrednosti ? "show" : ""}`}>
                        <h2 onClick={togglePrednosti}>Prednosti</h2>
                        <BiSolidRightArrow className="prednosti-right" onClick={togglePrednosti}/>
                        <BiSolidDownArrow className="prednosti-down" onClick={togglePrednosti}/>
                    </div>
                   
                    <ul className={`prednosti ${showPrednosti ? "show" : ""}`}>
                        {show.potential.map((item, pos) => {
                            return (
                                <li>
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                </section>
                <section class="issue">

                    <div className={`more2 ${showUsluge ? "show" : ""}`}>
                        <h2 onClick={toggleUsluge}>Simptomi</h2>
                        <BiSolidRightArrow className="usluge-right" onClick={toggleUsluge} />
                        <BiSolidDownArrow className="usluge-down" onClick={toggleUsluge} />
                    </div>
                   
                    <ul className={`sve-usluge ${showUsluge ? "show" : ""}`}>
                        {show.issueData.map((it, poss) => {
                            return (
                                <li>
                                    {it}
                                </li>
                            );
                        })}
                    </ul>
                </section>
            </div>
        </>
    );

};

export default Usluge;