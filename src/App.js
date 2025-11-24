import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;