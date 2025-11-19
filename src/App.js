import React from 'react';
import './App.css';
// 1. Importáljuk a BrowserRouter-t
import { BrowserRouter } from 'react-router-dom';

// Importálja a szemantikus komponenseket
import Header from './Header'; 
import Main from './Main';     
import Footer from './Footer'; 

function App() {
  return (
    // 2. Becsomagoljuk az egészet BrowserRouter-be
    <BrowserRouter>
      <div className="grid-container"> 
        <Header />
        <Main /> {/* A Main komponens fogja kezelni a különböző oldalak tartalmát */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;