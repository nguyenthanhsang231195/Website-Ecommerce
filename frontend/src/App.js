import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

// Components
import InforQuick from './Components/HeaderComponent/InforQuick';
import Navbar from './Components/HeaderComponent/Navbar';

import CarouselBanner from './Components/CarouselLuxury/CarouselBanner';
import VideoAdvertise from './Components/VideoLuxury/VideoAdvertise';

// Screen
import HomeScreen from './Screens/HomeScreen/HomeScreen';

function App() {
  return (
<BrowserRouter>
<div className="App">
    <header className="header-website">
        <InforQuick />
        <Navbar />
    </header> 

    <main className="main-website">
        {/* HomeScreen */}
        <Route path="/" component={CarouselBanner} exact />
        <Route path="/" component={HomeScreen} exact />
        <Route path="/" component={VideoAdvertise} exact />

    </main>

    <footer className="footer-website">
        Designed by Sang 2021
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
