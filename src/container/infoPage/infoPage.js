import "./infoPage.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Info from "./Info";

const InfoPage = () => {
    return (
        <div className="info-container">
            <Header />
            <Navbar />
            <Info />
        </div>
    );
};

export default InfoPage;