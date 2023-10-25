import KontaktPage from "../../container/kontaktPage/kontaktPage";
import {Helmet} from "react-helmet-async";

const KontaktPageWrapper = () => {
    return (
        <>
             <Helmet>
        {/* Naslovna oznaka (Title Tag) */}
        <title>PVTuning</title>

        <link rel="canonical" href="/info" />
        
        {/* Meta Opis (Meta Description) */}
        <meta name="description" content="Kontaktirajte nas putem forme." />
        
        {/* Ključne Riječi (Meta Keywords) */}
        <meta name="keywords" content="PVTuning, Desinec, pvt.tuning, pvt, pvttuning, Petar Volarić, mapiranje, remap, chiptuning, tuning, egr, dpf, dtc, adblue, lambda, performanse, brži auto, kvaliteta, ponuda usluga, sigurnost, snaga, FLEX, FLEX alat" />
        
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
        <meta name="subtitle1" content="Kontaktirajte nas" />
        <meta name="description1" content="Pošaljite nam mail s upitom za vaše vozilo. Odgovaramo u najkraćem mogućem roku." />



      </Helmet>
            <KontaktPage />
        </>
    );
};

export default KontaktPageWrapper;