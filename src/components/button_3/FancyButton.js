import "./fancyButton.css";
import { Link } from "react-router-dom";

const FancyButton = (props) => {
    return (
        <Link to="/usluge" class="box-1">
            <div class="button btn-one">
                <span>{props.text}</span>
            </div>
        </Link>
    );
};

export default FancyButton;