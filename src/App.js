import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/home"
import Cards from "./components/Cards"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Cards />
    </div>
  );
}

export default App;
