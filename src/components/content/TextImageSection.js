import React from "react";
import { useInView } from 'react-intersection-observer';
import "./content.css";
import FancyButton from "../button_3/FancyButton";

export default function TextImageSection(props) {
    const [ref, inView] = useInView({
      threshold: 0.5,
    });

    return (
      <section ref={ref} className={`text-image ${inView ? 'show-animate' : ''}`}>
        <div className="main-container">    
          <img src={props.img} alt=""/>  

          {/* border - absolute */}
          <div className="border"></div>
          
           
          <div className="text-container">
            <h1>Istražite <span>Ponudu</span> <br />Naših Usluga</h1>

            <div className="inner-container">
              <div className="p">
                <p>{props.subtext}</p>
              </div>
              
              <div className="buttons-container">
                <FancyButton text="VIŠE USLUGA"/>
              </div>
            </div>
           
          </div>

        </div>
      </section>
    );
};