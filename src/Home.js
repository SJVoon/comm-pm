import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Segment,
    Header,
    Button,
    Container,
} from 'semantic-ui-react';
import { func, object, array } from 'prop-types'
import './Home.css';

class Home extends Component {
    state = { lang: this.props.language }

    static propTypes = {
        colors: array,
        language: object,
        handleItemChange: func
    }

    handleItemChange = (item, title) => this.props.handleItemChange(item, title, () => this.props.history.push('/comm-pm/selection'))

    //handleItemChange = item => this.props.handleItemChange(item, () => this.props.history.push('/comm-pm/selection'))

    render() {
        const { language, colors, history } = this.props
        const { login, header } = language
        return (
            <div>
                <Segment padded="very" color='grey'>
                    <Header className="Header" as="h1" textAlign="center" style={{ fontSize: '40px' }}>
                        <Button className="Login"
                            size='massive'
                            floated='left'
                            color='blue'
                            as={Link}
                            to='/comm-pm/'
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
                            {language.history}
                        </Button>
                    </Header>
                </Segment>
                <Container>
                    <Grid centered columns={3} stackable textAlign="center" verticalAlign="middle">
                        {language.selections.map((selection, i) =>
                            <Grid.Column key={selection.title}>
                                <Button
                                    className="BigButton"
                                    style={{ fontSize: '2em' }}
                                    onClick={() => this.handleItemChange(selection.item, selection.title)}
                                    color={colors[i % colors.length]}
                                >
                                    {selection.title}
                                </Button>
                            </Grid.Column>
                        )}
                    </Grid>
                </Container>
            </div >
        )
    }
};

export default Home;