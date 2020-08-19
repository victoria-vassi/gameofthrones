import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/home"
import Cards from "./components/Cards"
import { Col, Row } from 'react-bootstrap'
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Row>
      <Col sm={3}>
        <img alt="avatar" className="avatar" src="/user.png" />
      </Col>

      <Col sm={8}>
        <Cards />
      </Col>
    </Row>
    </div>

  );
}

export default App;
