import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
<BrowserRouter>
<div className="App">
    <header className="header-website">
        Header
    </header> 

    <main className="main-website">
        Main
    </main>

    <footer className="footer-website">
        Designed by Sang 2021
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
