import './App.css';
import React from "react";
import { Route, Routes, Switch } from "react-router-dom";

import HomePageWrapper from "./components/wrappers/homePageWrapper";
import InfoPageWrapper from "./components/wrappers/infoPageWrapper";
import UslugePageWrapper from "./components/wrappers/uslugePageWrapper";
import GalerijaPageWrapper from './components/wrappers/galerijaPageWrapper';
import KalkulatorPageWrapper from "./components/wrappers/kalkulatorPageWrapper";

function App() {
  return (
    <div className="App">
      <Switch>
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
      </Switch>
    </div>
  );
}

export default App;
