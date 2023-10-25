import KalkulatorPage from "../../container/kalkulatorPage/kalkulatorPage";
import {Helmet} from "react-helmet-async";

const KalkulatorPageWrapper = () => {
    return (
        <>
             <Helmet>
        {/* Naslovna oznaka (Title Tag) */}
        <title>PVTuning</title>

        <link rel="canonical" href="/info" />
        
        {/* Meta Opis (Meta Description) */}
        <meta name="description" content="Kalkulator izračuna snage vozila" />
        
        {/* Ključne Riječi (Meta Keywords) */}
        <meta name="keywords" content="snaga, izračun snage, koliko kilovata, njutnmetri, NM, KW, snaga auta, peroformanse, gains, klakulator gains, calculator gains" />
        
        {/* Meta Oznake (Meta Tags) */}
        <meta name="author" content="PVTuning" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Metapodaci (Facebook) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pvttuning.com" />
        <meta property="og:title" content="PVTuning - Mapiranje, Chiptuning, Auto Dijagnostika" />
        <meta property="og:description" content="PVTuning pruža visokokvalitetne usluge mapiranja, chiptuninga i auto dijagnostike. Povećajte performanse i efikasnost svog vozila s našim uslugama." />
        <meta property="og:image" content="pvt_logo.png" />

         {/* Twitter Metapodaci */}
         <meta name="twitter:card" content="summary" />
         <meta name="twitter:title" content="PVTuning - Mapiranje, Chiptuning, Auto Dijagnostika" />
         <meta name="twitter:description" content="PVTuning pruža visokokvalitetne usluge mapiranja, chiptuninga i auto dijagnostike. Povećajte performanse i efikasnost svog vozila s našim uslugama." />
         <meta name="twitter:image" content="pvt_logo.png"/>

          
        {/* Metapodaci za usluge */}
        <meta name="subtitle1" content="Izračun snage auta" />
        <meta name="description1" content="Izračunajte koliko možemo povećati performanse Vašeg vozila." />
        

      </Helmet>
            <KalkulatorPage />
        </>
    );
};

export default KalkulatorPageWrapper;