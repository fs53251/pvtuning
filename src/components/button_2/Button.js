import "./button.css";
import { Link } from "react-router-dom";

const Button = (props) => {
        return (
                <Link to={props.hrefLink} className="btn-link">
                        <div className="btn from-center"> 
                                {props.text}
                        </div>
                </Link>
               
        );
        
};

export default Button;