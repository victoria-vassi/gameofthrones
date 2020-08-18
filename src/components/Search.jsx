import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap'

export default function Search(props) {

  const [search, setSearch] = React.useState('');

  return (
      <Container>
      <h1> {search} </h1>
        <Form className ="mt-2">
          <Form.Row className = "align-item-center">
            <Col sm={10} className="my-1">
              <Form.Control
                onChange={(e) => setSearch(e.target.value)}
                placeholder ="Search for your Game of Throne Character" />
              </Col>
              <Col sm={2} className="my-1">
                <Button block onClick={(e) => props.getGotCharacter(search)}> Search </Button>
              </Col>
            </Form.Row>
          </Form>
      </Container>
    )
}
