import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePageWrapper from "./components/wrappers/homePageWrapper";
import InfoPageWrapper from "./components/wrappers/infoPageWrapper";
import UslugePageWrapper from "./components/wrappers/uslugePageWrapper";
import GalerijaPageWrapper from './components/wrappers/galerijaPageWrapper';
import KalkulatorPageWrapper from "./components/wrappers/kalkulatorPageWrapper";
import KontaktPageWrapper from './components/wrappers/kontaktPageWrapper';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          path={"/pvtuning"}
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
  );
}

export default App;
