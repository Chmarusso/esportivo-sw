import React, { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup  } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class TournamentsList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="tournaments-ctn">
              <h1 className="header">Tournaments:</h1>
              <div>
                  <Link to="/quizstart">
                    <Button className="tournament" color="primary" size="lg">Startup Weekend Quiz 1</Button>
                  </Link>
              </div>
              <div>
                  <Link to="/quizstart">
                    <Button className="tournament" color="primary" size="lg">Startup Weekend Quiz 2</Button>
                  </Link>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
    )
  }
}
