import GalerijaPage from "../../container/galerijaPage/galerijaPage";
import {Helmet} from "react-helmet-async";


const GalerijaPageWrapper = () => {
    return (
        <>
                <Helmet>
        {/* Naslovna oznaka (Title Tag) */}
        <title>PVTuning</title>

        <link rel="icon" href="favicon.ico" />
        <link rel="canonical" href="/info" />
        
        {/* Meta Opis (Meta Description) */}
        <meta name="description" content="Pogledajte našu galeriju." />
        
        {/* Ključne Riječi (Meta Keywords) */}
        <meta name="keywords" content="PVTuning, galerija, slike, auti" />
        
        {/* Meta Oznake (Meta Tags) */}
        <meta name="author" content="PVTuning" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Metapodaci (Facebook) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pvttuning.com" />
        <meta property="og:title" content="PVTuning - Galerija" />
        <meta property="og:description" content="Galerija" />
        <meta property="og:image" content="pvt_logo.png" />

         {/* Twitter Metapodaci */}
         <meta name="twitter:card" content="summary" />
         <meta name="twitter:title" content="PVTuning - Mapiranje, Chiptuning, Auto Dijagnostika" />
         <meta name="twitter:description" content="PVTuning pruža visokokvalitetne usluge mapiranja, chiptuninga i auto dijagnostike. Povećajte performanse i efikasnost svog vozila s našim uslugama." />
         <meta name="twitter:image" content="pvt_logo.png"/>

          
        {/* Metapodaci za usluge */}
        <meta name="subtitle1" content="Kontaktirajte nas" />
        <meta name="description1" content="Pošaljite nam mail s upitom za vaše vozilo. Odgovaramo u najkraćem mogućem roku." />
      </Helmet>
            <GalerijaPage />
        </>
    );
};

export default GalerijaPageWrapper;