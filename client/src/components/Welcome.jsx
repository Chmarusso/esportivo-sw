import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'


export default class Welcome extends Component {
  render() {

    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h1>Welcome!</h1>
            <a href='/user'>
              <Button color="primary" size="lg" block>
                Start
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    )
  }
}
