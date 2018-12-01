import React, { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Score extends Component {
  render() {
    return (
        <Container>
        <Row>
          <Col>
            <div className="tournaments-ctn">
              <h1 className="header header-quiz header-points">Startup Weekend Quiz</h1>
              <div className="points">110 points!</div>
              <h2 className="header subheader">You placed #2</h2>
              <div>
                  <Link to="/finalscreen">
                    <Button className="tournament" color="primary" size="lg">Claim your reward!</Button>
                  </Link>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
    )
  }
}
