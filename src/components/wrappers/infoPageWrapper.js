import InfoPage from "../../container/infoPage/infoPage";
import {Helmet} from "react-helmet-async";

const InfoPageWrapper = () => {
    return (
        <>
           <Helmet>
        {/* Naslovna oznaka (Title Tag) */}
        <title>PVTuning</title>
        <link rel="icon" href="favicon.ico" />

        <link rel="canonical" href="/info" />
        
        {/* Meta Opis (Meta Description) */}
        <meta name="description" content="PVTuning pruža visokokvalitetne usluge mapiranja, chiptuninga i auto dijagnostike. Povećajte performanse i efikasnost svog vozila s našim uslugama." />
        
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
        <meta name="subtitle1" content="Performanse" />
        <meta name="description1" content="Povećajte performanse vašeg vozila uz našu profesionalnu uslugu." />
        
        <meta name="subtitle2" content="O nama" />
        <meta name="description2" content="Gdje nas naći? Osnovni podaci o nama i kako nas kontaktirati." />
        
        <meta name="subtitle3" content="Usluge" />
        <meta name="description3" content="Popis usluga koje nudimo korisnicima." />
        
        <meta name="subtitle4" content="Društvene mreže" />
        <meta name="description4" content="Posjetite nas i na našim društvenim mrežama." />
        
        <meta name="subtitle5" content="Adblue Isključivanje" />
        <meta name="description5" content="Isključite Adblue sustav i optimizirajte performanse vozila." />
      

        <meta name="subtitle6" content="Sigurnost" />
        <meta name="description6" content="Sve naše usluge su pažljivo razvijene i testirane kako bi očuvale sigurnost vozila." />

        <meta name="subtitle7" content="Snaga" />
        <meta name="description7" content="Nudimo optimizaciju performansi." />

        <meta name="subtitle8" content="Kontakt" />
        <meta name="description8" content="Kontaktirajte nas." />


      </Helmet>


            <InfoPage />
        </>
    );
};

export default InfoPageWrapper;