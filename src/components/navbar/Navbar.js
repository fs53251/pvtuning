import "./navbar.css";
import { navData } from "./navItems";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { fadeIn } from "../../components/assets/variants";

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <nav className="nav-container">
            <motion.div 
                className="nav-inner_container"
                variants={fadeIn("left", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
            >
                {navData.map((link, index) => {
                    return (
                        <Link 
                            className={`nav-link ${link.path === pathname ? "text-accent" : ""}`}
                            to={link.path}
                            key={index}>
                            
                            <div className="nav-tooltip">
                                <div className="nav-tooltip_bg">
                                    <div className="nav-tooltip_content">
                                        <div className="nav-tooltip_text">{link.name}</div>
                                        <div className="nav-tooltip_arrow"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="nav-link_icon">
                                {link.icon}
                            </div>
                        </Link>
                    );
                })}
            </motion.div>
        </nav>
    );
};

export default Navbar;