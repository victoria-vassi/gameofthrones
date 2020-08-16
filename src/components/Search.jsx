import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap'

export default function Search(props) {
  return (
      <Container>
        <Form className ="mt-2">
          <Form.Row className = "align-item-center">
            <Col sm={10} className="my-1">
              <Form.Control
                placeholder ="Search for your Game of Throne Character" />
              </Col>
              <Col sm={2} className="my-1">
                <Button block> Search </Button>
              </Col>
            </Form.Row>
          </Form>
      </Container>
    )
}
