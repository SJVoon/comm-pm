import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Segment,
  Header,
  Button,
  Form,
  Container,
  Divider,
  Transition
} from 'semantic-ui-react'
import { func, string, object } from 'prop-types'


class Login extends Component {
  static propTypes = {
    handleNameChange: func,
    name: string,
    handleLanguageChange: func,
    language: object
  }

  handleChange = (e, { value }) => this.props.handleNameChange(value)

  handleLanguage = (e, { id }) => this.props.handleLanguageChange(id)

  render() {
    return (
      <div style={{ marginTop: '100px' }}>
        <Transition visible={true}
          duration={1000}
          animation="fade up">
          <Container style={{ width: 450 }}>
            <Header size="huge" as="h1" color="blue" textAlign="center" style={{ marginTop: '100px' }}>
              Communication Assistant
            </Header>
            <Form size="massive">
              <Segment stacked>
                <Divider horizontal>Username</Divider>
                <Form.Input
                  value={this.props.name}
                  onChange={this.handleChange}
                  fluid
                  transparent
                  size="massive"
                  placeholder="Enter your name"
                />

                <Divider horizontal>Language</Divider>
                <Button.Group>
                  <Button
                    id="english"
                    size="huge"
                    color={this.props.language.lang === 'english' ? 'green' : undefined}
                    onClick={this.handleLanguage}
                  >
                    English
                  </Button>
                  <Button.Or />
                  <Button
                    id="malay"
                    size="huge"
                    color={this.props.language.lang === 'malay' ? 'green' : undefined}
                    onClick={this.handleLanguage}
                  >
                    Malay
                  </Button>
                  <Button.Or />
                  <Button
                    id="chinese"
                    size="huge"
                    color={this.props.language.lang === 'chinese' ? 'green' : undefined}
                    onClick={this.handleLanguage}
                  >
                    华文
                  </Button>
                </Button.Group>
              </Segment>
              <Segment stacked>
                <Button
                  as={Link}
                  to="/comm-pm/home"
                  color="blue"
                  fluid
                  size="large"
                >
                  Login
                </Button>
              </Segment>
            </Form>
          </Container>
        </Transition>
      </div>
    )
  }
};

export default Login;