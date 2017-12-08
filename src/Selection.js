import React, { Component } from 'react'
import {
    Grid,
    Segment,
    Button,
    Container,
} from 'semantic-ui-react'
import Menu from './Menu'
import { func, string, object, array } from 'prop-types'
import './Selection.css'

class Selection extends Component {
    static propTypes = {
        colors: array,
        language: object,
        title: string,
        items: array,
        handleHistIns: func
    };

    handleHistIns = (item) => this.props.handleHistIns(item, this.props.history.push('/comm-pm/instruction'))

    render() {
        const { language, colors, history, title } = this.props

        return (
            this.props.title === "Emergency" ?
                <div>
                    <Menu language={language} history={history} />
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
                                {this.props.title}
                            </Segment>
                        </Grid>
                    </Container>
                </div>

                :
                <div>
                    <Menu language={language} history={history} />
                    <Container >
                        <Grid centered columns={4}>
                            {this.props.items.map((item, i) =>
                                <Grid.Column key={item}>
                                    <Button
                                        className="BigButton"
                                        style={{ fontSize: '2em' }}
                                        color={colors[i % colors.length]}
                                        onClick={() => this.handleHistIns(item)}
                                    >
                                        {item}
                                    </Button>
                                </Grid.Column>
                            )}
                        </Grid>
                    </Container>
                </div >
        )
    }
};

export default Selection;