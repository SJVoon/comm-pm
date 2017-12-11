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
import './Selection.css'

export default class Instruction extends Component {
    static propTypes = {
        histIns: array,
        items: array,
        title: string,
        food: array,
        feeling: array,
        health: array,
        request: array,
        group: string
    }

    check = () => {
        let src = ''
        if (this.props.group === "Food" || this.props.group === "Makan" || this.props.group === "食物") {
            for (let i = 0; i < this.props.food.length; i++) {
                if (this.props.histIns[this.props.histIns.length - 1] === this.props.items[i])
                    src = this.props.food[i]
            }
        }
        else if (this.props.group === "Feeling" || this.props.group === "Perasaan" || this.props.group === "感觉") {
            for (let i = 0; i < this.props.feeling.length; i++) {
                if (this.props.histIns[this.props.histIns.length - 1] === this.props.items[i])
                    src = this.props.feeling[i]
            }
        }
        else if (this.props.group === "Health" || this.props.group === "Kesihatan" || this.props.group === "健康") {
            for (let i = 0; i < this.props.health.length; i++) {
                if (this.props.histIns[this.props.histIns.length - 1] === this.props.items[i])
                    src = this.props.health[i]
            }
        }
        else {
            for (let i = 0; i < this.props.request.length; i++) {
                if (this.props.histIns[this.props.histIns.length - 1] === this.props.items[i])
                    src = this.props.request[i]
            }
        }
        console.log(src)
        return src
    }

    render() {
        const { histIns, language, food, feeling, health, request, title, group, items } = this.props
        const { login, header, history } = language
        console.log(histIns)
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
                    style={{ marginTop: '20px' }}
                >
                    <Segment
                        className="BigSegment"
                        compact
                        secondary
                        style={{ fontSize: '4em' }}
                    >
                        <img src={this.check()} width="300" height="280" alt="Unavailable Image" />
                        {histIns[histIns.length - 1]}
                    </Segment>
                </Grid>
            </Container>
        </div>
    }
}