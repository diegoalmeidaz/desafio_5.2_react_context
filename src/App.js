import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import Context from "./context/Context";
import {useState, useEffect} from 'react'

export default function App() {
  const endpoint = "/fotos.json";
  const [pictures, setPictures] = useState([]);
  
  const globalSettings = {pictures, setPictures};

  const dataFetch= async () => {
    try{
    const res = await (await fetch(endpoint)).json();
    const data = res.photos;
    setPictures(data);
  } catch (error) {}
  };

  useEffect(() => {
    dataFetch();
  }, []);

  

  return (
    <div className="App">
      <Context.Provider value={globalSettings} >
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
          </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
