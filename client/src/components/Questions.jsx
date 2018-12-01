import React, { Component } from 'react'
import { Container, Row, Col, Button, ButtonGroup  } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import { ListGroup, ListGroupItem } from 'reactstrap'

const questions = {
  '1': {
    content: 'Where Startup Weekend takes place?',
    answers: ['Technopark Pomerania', 'Piast Office Center', 'RCIiTT']
  },
  '2': {
    content: 'What is goal of Startup Weekend?',
    answers: ['Create final project', 'Validate your idea', 'Find an investor']
  },
  '3': {
    content: 'Which edition of Startup Weekend is it?',
    answers: ['3th', '4th', '2nd']
  },
  '4': {
    content: 'What MVP means?',
    answers: ['Most Valuable Player', 'Minimal Viable Product', 'Maximum Velocity Product']
  }
}

export default class Questions extends Component {
  render() {
    const step = this.props.match.params.step
    const question = questions[step]
    const nextStep = parseInt(step)+1
    const nextPath = nextStep === 5 ? `/score` : `/questions/${nextStep}`

    return (
      <Container>
        <Row>
          <Col>
          <ListGroup>
            <ListGroupItem active tag="button" action>{question.content}</ListGroupItem>
            {question.answers.map(answer =>
              <Link to={nextPath}>
                <ListGroupItem tag="button" action>{answer}</ListGroupItem>
              </Link>
            )}
          </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}
