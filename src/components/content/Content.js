import "./content.css";
import TextImageSection from "./TextImageSection";
import Security from "../security/Security";

const Content = () => {
    return (
        <div className="content-text_container">
            <TextImageSection img="./speedometer.jpg" subtext="PVTuning ne nudi samo usluge ECU remap-a, već i proizvode dizajnirane kako bi zadovoljili sve vaše potrebe. Naša rješenja su prilagođena za različite vrste vozila i motora. Bez obzira jeste li vlasnik automobilske radionice ili entuzijast koji želi optimizirati performanse svog vozila, mi vam nudimo najbolje inovacije na tržištu."/>
            <Security />
        </div>
    );
};      

export default Content;