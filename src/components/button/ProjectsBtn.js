import "./projectsBtn.css";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
    return (
        <div className="button-container">
            <Link 
                className="button-link"
                to="/info"
                >
                <img 
                    src="./pvtuning/rounded-text.png"
                    className="button-image" 
                    width={141}
                    height={148}
                    alt=""
                    />
                <HiArrowRight className="button-arrow" />
            </Link>
        </div>
    );
};

export default ProjectsBtn;