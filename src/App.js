import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Navbar } from 'react-bootstrap';
import HomePage from "./pages/home"
import Cards from "./components/Cards"

function App() {
  return (
    <div className="App">
      <HomePage />
      <Cards />
    </div>
  );
}

export default App;
