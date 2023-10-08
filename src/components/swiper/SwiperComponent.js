import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { AiFillCloseSquare } from "react-icons/ai";

import "./swiperComponent.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponent = (props) => {
    const swiperParams = {
        centeredSlides: true,
        slidesPerView: 1,
        pagination: true,
        navigation: true,
    };

    return (
        <div className='auto-container'>
             <AiFillCloseSquare size={45} className='close-button-up' onClick={() => props.func()}/>
            <div className='pic-tab'>
                <Swiper {...swiperParams}
                    modules={[Pagination, Navigation]}
                    className='mySwiper'
                >
                    {props.auto.slike.map((imagee, index) => (
                        <SwiperSlide key={index} className="mySlide">
                            <img src={"./pvtuning/" + imagee} alt={`Imagee ${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
           
            <div className='car-tab'>
            <AiFillCloseSquare size={45} className='close-button' onClick={() => props.func()}/>
                <div className='auto-h2'>
                    {props.auto.vozilo}
                </div>
                <div className='car-list'>
                    {props.auto.opis.map((op, ind) => {
                        return (
                            <div className='car-element' key={ind}>{op}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SwiperComponent;