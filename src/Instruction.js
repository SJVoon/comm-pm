import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
    Grid,
    Segment,
    Header,
    Button,
    Container,
} from 'semantic-ui-react';
import { array } from 'prop-types'

export default class Instruction extends Component {
    static propTypes = {
        histIns: array
    }

    render() {
        const { histIns, language } = this.props
        const { login, header, history } = language
        return <div>
            <Segment padded="very" color='grey'>
                <Header className="Header" as="h1" textAlign="center" style={{ fontSize: '40px' }}>
                    <Button className="Login"
                        size='massive'
                        floated='left'
                        color='blue'
                        as={Link}
                        to='/comm-pm/home'
                    >
                        {login}
                    </Button>
                    {header}
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
                <Grid
                    centered
                    style={{ marginTop: '100px' }}
                >
                    <Segment
                        className="BigSegment"
                        compact
                        inverted color='red'
                        style={{ fontSize: '6em' }}
                    >
                        {histIns[histIns.length - 1]}
                    </Segment>
                </Grid>
            </Container>
        </div>
    }
}