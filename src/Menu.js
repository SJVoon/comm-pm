import React from 'react'
import { Link } from 'react-router-dom'
import {
    Segment,
    Header,
    Button,
} from 'semantic-ui-react'


export default class Menu extends React.Component {
    render() {
        const { language } = this.props
        const { login, header, history } = language
        return <Segment padded="very" color='grey'>
            <Header className="Header" as="h1" textAlign="center" style={{ fontSize: '40px' }}>
                <Button className="Login"
                    size='massive'
                    floated='left'
                    color='blue'
                    onClick={this.props.history.goBack}
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
    }
}