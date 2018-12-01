import React, { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup  } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap'

export default class FinalScreen extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <div className="tournaments-ctn">
              <h1 className="header header-quiz header-points">You won</h1>
              <div className="big-mac roll-in-top">
                <img src="https://chrisdowjournalist.files.wordpress.com/2018/02/foi-17851response.png?w=332&h=247" alt=""/>
              </div>
              <h1 className="header header-quiz header-points tracking-in-expand">Big Mak</h1>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
