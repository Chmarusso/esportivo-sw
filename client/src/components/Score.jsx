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
                        <h1 className="header header-quiz">Startup Weekend Quiz</h1>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    )
  }
}
