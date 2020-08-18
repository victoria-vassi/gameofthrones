import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Navbar } from 'react-bootstrap';
import HomePage from "./pages/home"
import Cards from "./components/cards"

function App() {
  return (
    <div className="App">
      <HomePage />
      <Cards cards={this.state.cards} />
    </div>
  );
}

export default App;
