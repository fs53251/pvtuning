import "./whereToFindUs.css";
import Map from "../map/Map";
import LocationInfo from "../locationInfo/LocationInfo";
import { useInView } from 'react-intersection-observer';

const WhereToFindUs = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section ref={ref} className={`text-img ${inView ? 'show-animate' : ''}`}>
            <div className="main-container_wtfu">    
                {/* border - absolute */}
                <div className="border_3"></div>
                
                <div className="findUs-container">
                    <Map />
                    <LocationInfo />
                </div>
            </div>
        </section>
    );
};

export default WhereToFindUs; 