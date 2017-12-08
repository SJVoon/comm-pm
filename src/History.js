import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Grid,
    Segment,
    Header,
    Button,
    Container,
} from 'semantic-ui-react';
import { array, string } from 'prop-types'

export default class History extends Component {
    static propTypes = {
        histIns: array,
        name: string
    }

    render() {
        const { histIns, language, name } = this.props
        const { login, chat, history } = language
        return <div>
            <Segment padded="very" color='grey'>
                <Header className="Header" as="h1" textAlign="center" style={{ fontSize: '40px', color: '#0000ff' }}>
                    <Button className="Login"
                        size='massive'
                        floated='left'
                        color='blue'
                        as={Link}
                        to='/comm-pm/home'
                    >
                        {login}
                    </Button>
                    {name}   {chat}
                    <Button className="History"
                        as={Link}
                        to='/comm-pm/history'
                        size='massive'
                        floated='right'
                        color='blue'
                    >
                        {history}
                    </Button>
                </Header>
            </Segment>
            <Container>
                <Grid centered columns={1} textAlign="center" verticalAlign="middle">
                    <Grid.Column style={{ fontSize: '1.5em' }}
                        textAlign="center">
                        {histIns.map((item, i) =>
                            <Grid.Row key={item}
                                style={{ fontSize: '1.5em' }}
                                textAlign="center"
                            >
                                <Segment attached
                                    raised
                                    secondary
                                >
                                    {item}
                                </Segment>
                            </Grid.Row>
                        )}
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    }
}