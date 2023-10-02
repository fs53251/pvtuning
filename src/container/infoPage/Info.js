import "./info.css";
import WhereToFindUs from "../../components/whereToFindUs/WhereToFindUs";
import Content from "../../components/content/Content";
import About from "../../components/about/About";

const Info = () => {
    return (
        <div className="content-container">
            <About />
            <Content />
            <WhereToFindUs />
        </div>
    );
};

export default Info;