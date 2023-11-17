import React, { useState } from "react";
import CountUp from "react-countup";
import { aboutData } from "./aboutData";
import { motion } from "framer-motion";
import { fadeIn } from "../../components/assets/variants";
import Arrow from "../../components/arrow/Arrow";
import { useInView } from 'react-intersection-observer';
import "./about.css";
import ButtonTop from "../button_scroll_top/ButtonTop";

const countData = [
    {
        start: 0,
        end: 7,
        duration: 4,
        text: "Godina iskustva"
    },
    {
        start: 0,
        end: 650,
        duration: 4,
        text: "Završenih projekata"
    },
    {
        start: 0,
        end: 500,
        duration: 4,
        text: "Zadovoljnih klijenata"
    },
];

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
      });

    const [index, setIndex] = useState(0);

    const handleTabClick = (itemIndex) => {
        setIndex(itemIndex);
    };

    return (
        <div ref={ref} className={`about ${inView ? 'show-animate' : ''}`}>
            <div className="about-main_container">
                <motion.div 
                     variants={fadeIn("right", 0.3)}
                     initial="hidden"
                     animate="show"
                     exit="hidden"
                     className="about-main_motion_title"
                >
                    <h1 className="about-main_title">
                        Dobrodošli u <span className="text-accent"> PVTuning, </span> <br />
                        Vašeg partnera za visokokvalitetne <br/>
                        performanse auta.
                    </h1>

                    <p className="about-main_text">
                        Naša strast prema automobilskom svijetu vođena je jednim ciljem - 
                        pružiti vam najbolje moguće rješenje za povećanje snage i optimizaciju potrošnje vašeg vozila.
                    </p>

                    <div className="about-countup_container">
                        {countData.map((data, itemIndex) => {
                            return (
                                <div className="about-countup">
                                    <div className="about-count_number text-accent">
                                        <CountUp key={itemIndex} start={data.start} end={data.end} duration={data.duration} /> +
                                    </div>
                                    <div className="about-count_text">
                                        {data.text}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div 
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="about-details_container">
                    <div className="about-custom_tabs">
                        {aboutData.map((item, itemIndex) => {
                            return (
                                <div key={itemIndex}  onClick={() => handleTabClick(itemIndex)}
                                    className={`about-custom_tab ${index === itemIndex ? "active" : ""}`}
                                >
                                    {item.title}
                                </div>
                            );
                        })}
                    </div>

                    <div className="about-data_container">
                        {index === 1 ? (aboutData[index].info.map((item, pos) => {
                            return (
                                <div className="about-item_title about-item" >{item}</div>
                            );
                        })) : (
                            aboutData[index].info.map((item, pos) => {
                                return (
                                    <div className="about-items_container about-item">
                                        <div className="about-item_title" >{item.title}</div>
                                        <div className="about-item_line" >-</div>
                                        {item.link !== null ? (
                                            <a href={item.link} target="_blank">
                                                 <div className="about-item_value" >{item.value}</div>
                                            </a>
                                        ) : (
                                            <div className="about-item_value" >{item.value}</div>
                                        )}
                                        
                                    </div>
                                );
                            })
                        )}
                    </div>

                    {aboutData[index].button}
                </motion.div>
            </div>

            <Arrow />
            <ButtonTop />
        </div>
    );
};

export default About;