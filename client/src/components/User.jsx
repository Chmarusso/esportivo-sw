import React, { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup  } from 'reactstrap'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

export default class User extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h5>Login</h5>
            <InputGroup>
              <InputGroupAddon addonType="prepend">@</InputGroupAddon>
              <Input placeholder="username" />
            </InputGroup>
            <h5>Sex</h5>
            <ButtonGroup>
              <Button color="primary">Male</Button>
              <Button color="primary">Female</Button>
              <Button color="primary">Other</Button>
            </ButtonGroup>
            <Button color="primary" size="lg" block>
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    )
  }
}
