import React, { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

export default class TournamentsList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="tournaments-ctn">
              <h1 className="header header-quiz">Startup Weekend Quiz</h1>
              <h2 className="header subheader">Rating</h2>
              <Table striped>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Janusz</td>
                    <td>120</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Grazyna</td>
                    <td>75</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Karyna</td>
                    <td>65</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Seba</td>
                    <td>60</td>
                  </tr>
                </tbody>
              </Table>
              <div>
                  <Link to="/questions">
                    <Button className="tournament start" color="primary" size="lg">Play!</Button>
                  </Link>
              </div>
              <div>
                  <Link to="/tournaments">
                    <Button className="tournament back" color="primary" outline size="lg">Back</Button>
                  </Link>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
    )
  }
}
