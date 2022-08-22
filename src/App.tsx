import React, {useState} from 'react'
import './App.css';
import Header from "./components/Header"
import Form from "./components/Form"
import Map from "./components/Map"
import MapDataProvider from "./MapDataProvider";

const GOOGLE_API_KEY = "APIキー";

const App = () => {
  return (
    <MapDataProvider>
      <Header />
      <Map GOOGLE_API_KEY={GOOGLE_API_KEY}/>
      <Form GOOGLE_API_KEY={GOOGLE_API_KEY}/>
    </MapDataProvider>
  );
}

export default App;
