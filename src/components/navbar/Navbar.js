import React from "react";
import "./navbar.css";
import { navData } from "./navItems";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { fadeIn } from "../../components/assets/variants";
import { useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const [pathname, setpathname] = useState(location.pathname);
    const isScreenSizeLessThan1200 = window.innerWidth < 1200;

    return (
        <nav className="nav-container">
            {isScreenSizeLessThan1200 ? (
                <div className="nav-inner_container">
                    {navData.map((link, index) => {
                        return (
                            <Link 
                                className={`nav-link ${link.path === pathname ? "text-accent" : ""}`}
                                to={link.path}
                                key={index}
                            >
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
                </div>
            ) : (
                <motion.div 
                    className="nav-inner_container motion-container"
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
                                key={index}
                            >
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
            )}
        </nav>
    );
};

export default Navbar;
