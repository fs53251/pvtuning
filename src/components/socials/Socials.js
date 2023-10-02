import { Link } from "react-router-dom";
import "./socials.css";
import { socData } from "./socialsItems";

const Socials = () => {
    return (
        <div className="soc-container">
            { socData.map((data, index) => {
                return (
                    <Link 
                        to={data.link}
                        target={data.target}
                        className="soc-link"
                        title={data.title}
                        >
                            {data.icon}
                    </Link>
                );
            }) }
        </div>
    );
};

export default Socials;