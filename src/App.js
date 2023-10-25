import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import {Helmet, HelmetProvider} from "react-helmet-async";

import HomePageWrapper from "./components/wrappers/homePageWrapper";
import InfoPageWrapper from "./components/wrappers/infoPageWrapper";
import UslugePageWrapper from "./components/wrappers/uslugePageWrapper";
import GalerijaPageWrapper from './components/wrappers/galerijaPageWrapper';
import KalkulatorPageWrapper from "./components/wrappers/kalkulatorPageWrapper";
import KontaktPageWrapper from './components/wrappers/kontaktPageWrapper';

function App() {
  return (
    <HelmetProvider>

      <Helmet>
        {/* Naslovna oznaka (Title Tag) */}
        <title>PVTuning</title>
        
        {/* Meta Opis (Meta Description) */}
        <meta name="description" content="PVTuning pruža visokokvalitetne usluge mapiranja, chiptuninga i auto dijagnostike. Povećajte performanse i efikasnost svog vozila s našim uslugama." />
        
        {/* Ključne Riječi (Meta Keywords) */}
        <meta name="keywords" content="PVTuning, Mapiranje, stage1, stage2, stage3, podizanje konjaze, cipovanje, dizanje snage, pojacaj auto, ekologija, Chiptuning, Auto Dijagnostika, DSG Remap, DSG, EGR Removal, EGR, EGR uklanjanje, EGR cijena, zamjena, zamjena EGR, polovni EGR, DPF Removal, DPF, DPF uklanjanje, DPF cijena, DPF zamjena, polovni DPF, rabljeni DPF, rabljeni EGR, zasićenost DPF, adblue off, adblue, adblue cijena, adblue greška, adblue zamjena, adblue gašenje, intake swirl flaps off, swirl, lambda 02 removal, lambda sonde, gašenje lambda sonde, launch controll, popcorn, start stop, gašenje start stop, speed limiter " />
        
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
        <meta name="subtitle1" content="Chiptuning" />
        <meta name="description1" content="Povećajte performanse vašeg vozila uz našu profesionalnu uslugu chiptuninga." />
        
        <meta name="subtitle2" content="Auto Dijagnostika" />
        <meta name="description2" content="Održavajte optimalno zdravlje vašeg vozila s našim sveobuhvatnim uslugama auto dijagnostike." />
        
        <meta name="subtitle3" content="EGR Isključivanje" />
        <meta name="description3" content="Eliminirajte probleme s EGR sustavom i poboljšajte performanse motora." />
        
        <meta name="subtitle4" content="DPF Isključivanje" />
        <meta name="description4" content="Riješite se problema s DPF filtrom i povećajte učinkovitost vozila." />
        
        <meta name="subtitle5" content="Adblue Isključivanje" />
        <meta name="description5" content="Isključite Adblue sustav i optimizirajte performanse vozila." />
        
        <meta name="subtitle6" content="Swirl Flaps Isključivanje" />
        <meta name="description6" content="Onemogućite zakretne zaklopke za poboljšanje učinkovitosti motora." />
        
        <meta name="subtitle7" content="Popcorn Limiter" />
        <meta name="description7" content="Doživite uzbuđenje funkcije Popcorn Limiter uz našu uslugu Popcorn Limitera." />

        <meta name="subtitle8" content="Start-Stop Isključivanje" />
        <meta name="description8" content="Povećajte kontrolu nad vozilom isključivanjem Start-Stop sustava." />

        <meta name="subtitle9" content="DTC Brisanje" />
        <meta name="description9" content="Eliminirajte problema s DTC (Trouble Codes) i poboljšajte performanse vozila." />

        <meta name="subtitle10" content="RPM Rev Limiter" />
        <meta name="description10" content="Poboljšajte dinamiku vožnje uz uslugu isključivanja RPM Rev Limitera." />


      </Helmet>
      <div className="App">
      <Routes>
      <Route 
          path={"/index.html"}
          element={<HomePageWrapper />}
        />
        <Route 
          path={"/"}
          element={<HomePageWrapper />}
        />
        <Route 
          path={"/info"}
          element={<InfoPageWrapper />}
        />

        <Route 
          path={"/usluge"}
          element={<UslugePageWrapper />}
        />

        <Route 
          path={"/galerija"}
          element={<GalerijaPageWrapper />}
        />

        <Route 
          path={"/kalkulator"}
          element={<KalkulatorPageWrapper />}
        />

        <Route
          path={"/kontakt"}
          element={<KontaktPageWrapper />}
        />
      </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
