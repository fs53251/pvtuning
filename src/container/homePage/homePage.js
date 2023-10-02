import "./homePage.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Home from "./Home";

const HomePage = () => {
    return (
        <div className="home-container">
            <Header />
            <Navbar />
            <Home />
        </div>
    );
};

export default HomePage;