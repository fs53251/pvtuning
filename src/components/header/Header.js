import "./header.css";
import { Link } from "react-router-dom";
import Socials from "../socials/Socials";

const Header = () => {
    return (
        <header id="start">
            <div className="header-container">
                <Link to="/">
                    <img
                        src="/pvt_logo.png"
                        width={220}
                        height={48}
                        alt=""
                    ></img>
                </Link>
                <div className="header-socials">
                    <Socials />
                </div>
            </div>
        </header>
    );
};

export default Header;