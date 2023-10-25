import InfoPage from "../../container/infoPage/infoPage";
import {Helmet} from "react-helmet-async";

const InfoPageWrapper = () => {
    return (
        <>
            <Helmet>
                <title>Informacije</title>
                <meta name="description" content="Informacije o našim proizvodima, PVTuning."/>
                <link rel="canonical" href="/info" />
            </Helmet>

            <InfoPage />
        </>
    );
};

export default InfoPageWrapper;