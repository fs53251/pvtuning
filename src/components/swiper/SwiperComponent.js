import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

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
            <div className='pic-tab'>
                <Swiper {...swiperParams}
                    modules={[Pagination, Navigation]}
                    className='mySwiper'
                >
                    {props.auto.slike.map((imagee, index) => (
                        <SwiperSlide key={index} className="mySlide">
                            <img src={imagee} alt={`Imagee ${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
           
            <div className='car-tab'>
                <div className='auto-h2'>
                    {props.auto.vozilo}
                </div>
                <div className='car-list'>
                    {props.auto.opis.map((op, ind) => {
                        return (
                            <div className='car-element'>{op}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default SwiperComponent;