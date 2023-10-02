
import { motion } from "framer-motion";
import { fadeIn } from "../../components/assets/variants";
import ProjectsBtn from "../../components/button/ProjectsBtn";
import "./home.css";

const Home = () => {
    return (
        <div className="home-container_text">
            <div className="home_inner_container_text">
                <motion.h1
                    className="home-h1"
                    variants={fadeIn("down", 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    Povećajte <span className="home-text_accent">Snagu</span> <br/>
                    Vašeg Vozila<br/>
                </motion.h1>

                <motion.p
                    variants={fadeIn("down", 0.3)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="home-p"    
                >
                    Pomaknite svoje granice i osjetite snagu koju Vaš automobil može pružiti.
                    PVTuning je Vaš partner u putovanju prema boljim performansama.
                    Suradnja s MagicMotorsport-om, vodećim imenom u industriji,
                    osigurava da svaki korak našeg procesa koristi najnovije tehnologije i 
                    najviše standarde sigurnosti.
                </motion.p>
            </div>

            <motion.div
                className="home-button"
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                <ProjectsBtn />
            </motion.div>
        </div>
    );
};

export default Home;