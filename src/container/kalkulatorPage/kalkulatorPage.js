import "./kalkulatorPage.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Calc from "./Calc";

const KalkulatorPage = () => {
    return (
        <div className="kalkulator-container">
            <Header />
            <Navbar />
            <Calc />
        </div>
    );
};

export default KalkulatorPage;