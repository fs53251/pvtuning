import UslugePage from "../../container/uslugePage/uslugePage";
import {Helmet} from "react-helmet-async";

const UslugePageWrapper = () => {
    return (
        <>
             <Helmet>
        {/* Naslovna oznaka (Title Tag) */}
        <title>PVTuning</title>

        <link rel="canonical" href="/info" />
        <link rel="icon" href="favicon.ico" />
        {/* Meta Opis (Meta Description) */}
        <meta name="description" content="Nudimo razne usluge mapiranja i kodiranja ECU jedinica." />
        
        {/* Ključne Riječi (Meta Keywords) */}
        <meta name="keywords" content="dtc, adblue, lambda/o2,  Auto dijagnostika,chiptuning remap dsg remap, egr removal, dpf, fap, PVTuning, Desinec, pvt.tuning, pvt, pvttuning, Petar Volarić, mapiranje, remap, chiptuning, tuning, egr, dpf, dtc, adblue, lambda, performanse, brži auto, kvaliteta, ponuda usluga, sigurnost, snaga, FLEX, FLEX alat" />
        
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
        <meta name="subtitle1" content="Auto Dijagnostika" />
        <meta name="description1" content="Auto dijagnostika je temeljna usluga koja omogućava detaljno ispitivanje i analizu svih aspekata vašeg vozila." />
        
        <meta name="subtitle2" content="DSG Remap" />
        <meta name="description2" content="DSG remap je specijalizirana usluga tuninga automatskog DSG mjenjača." />
        
        <meta name="subtitle3" content="Chiptuning Remap" />
        <meta name="description3" content="Chiptuning remap je visoka specijalizirana usluga tuninga motora koja se provodi u različitim fazama." />
        
        <meta name="subtitle4" content="EGR off" />
        <meta name="description4" content="EGR off je usluga koja se bavi uklanjanjem ili deaktivacijom EGR sustava." />
        
        <meta name="subtitle5" content="DPF/FAP off" />
        <meta name="description5" content="DPF off je usluga koja se bavi uklanjanjem DPF sustava u dizelskim vozilima." />
      
        <meta name="subtitle6" content="ADBLUE off" />
        <meta name="description6" content="ADBLUE off se bavi deaktivacijom Adblue sustava." />

        <meta name="subtitle7" content="Speed limiter off" />
        <meta name="description7" content="Usluga koja radi isključivanje brzinskog ograničenja." />



      </Helmet>
            <UslugePage />
        </>
    );
};

export default UslugePageWrapper;