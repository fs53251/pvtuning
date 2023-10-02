import "./security.css";
import { textContent } from "./textData";
import { useInView } from 'react-intersection-observer';

const Security = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });

    return (
        <section ref={ref} className={`security-main ${inView ? 'show-animate' : ''}`}>
            <div className="main-container_sec">    
                <div className="border_2"></div>

                <div className="blocks-container">
                    <div className="first-block">
                        <h1>Sigurnost <span>Vašeg</span> vozila.</h1>

                        <p>Mapiranje vozila uvelike doprinosi smanjenju potrošnje goriva, povećanim performansama vozila, povećanoj snazi, postignutom znatno bržem odazivu vozila. Kako bi ponudili najbolje za Vas Koristimo isključivo originalni i licencirani profesionalni alat te dajemo 100% garanciju na naš rad.</p>
                    </div>

                    <div className="second-block">
                        {textContent.map((item, index) => {
                            return(
                                <div className="security-tab">
                                    {/* ikona */}
                                    <div className="security-tab_icon">
                                        <img src={item.image} alt="" />
                                    </div>

                                    {/* text */}
                                    <div className="security-tab_text">
                                        <p className="first">{item.text}</p>
                                        <p className="second">{item.subtext}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;