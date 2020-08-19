import React from "react"
import Card from "./Card"
import { Container, Row, Col } from 'react-bootstrap'
import { getAllCharacters } from '../api/gotApi'

class Cards extends React.Component {
  state = {
    cards: []
  }

async componentDidMount() {
  const getGot = await fetch("https://anapioficeandfire.com/api/characters/");
  const getBody = await getGot.json();
  this.setState( {
    cards: getBody
  });
}

  render() {
    const { cards } = this.state;
    console.log(cards);
    return (
      <Container>
        <Row>
          {cards.map((card) => (<Col xs={4}>  <Card card={card} /> </Col>))}
        </Row>
      </Container>
    );
  }
}
export default Cards
