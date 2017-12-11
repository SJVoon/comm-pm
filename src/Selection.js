import React, { Component } from 'react'
import {
    Grid,
    Segment,
    Button,
    Container,
    Transition
} from 'semantic-ui-react'
import Sound from 'react-sound'
import Menu from './Menu'
import { func, string, object, array } from 'prop-types'
import './Selection.css'
import beep from './audio/beep.mp3'

class Selection extends Component {
    state = {
        play: true,
        visible: true,
        image: [],
        imgList: []
    }

    static propTypes = {
        colors: array,
        language: object,
        title: string,
        items: array,
        handleHistIns: func
    };

    handleHistIns = (item) => this.props.handleHistIns(item)

    handleVisible = () => this.setState({ visible: !this.state.visible })

    handleInitVisible = (onmousemove) => this.setState({ visible: !this.state.visible })

    handleItemChange = (item, title, group) => this.props.handleItemChange(item, title, group, () => this.props.history.push('/comm-pm/instruction'), this.handleHistIns(title))

    replay = () => this.setState({ play: false }, () => this.setState({ play: true }))

    render() {
        const { language, colors, history, title, food, feeling, health, request } = this.props

        return (
            this.props.title === "Emergency" || this.props.title === "Kecemasan" || this.props.title === "紧急" ?
                <div>
                    <Sound
                        url={beep}
                        playStatus={
                            this.state.play ? Sound.status.PLAYING : Sound.status.STOPPED
                        }
                        volume={100}
                        onPlaying={this.handleVisible}
                        onFinishedPlaying={this.replay}
                        autoLoad={true}
                    />
                    <Menu language={language} history={history} />
                    <Container>
                        <Grid
                            centered
                            style={{ marginTop: '100px' }}
                        >
                            <Transition
                                onHide={this.handleVisible}
                                onShow={this.handleVisible}
                                visible={this.state.visible}
                                duration={300}
                            >
                                <Segment
                                    className="BigSegment"
                                    compact
                                    inverted color='red'
                                    style={{ fontSize: '5em' }}
                                >
                                    {this.props.items[0]}
                                </Segment>
                            </Transition>
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
                                        style={{ fontSize: '1.5em' }}
                                        color={'gray'}
                                        onClick={() => this.handleItemChange(this.props.items, item, this.props.title)}
                                    >
                                        <img
                                            src={this.props.title === "Food" || this.props.title === "Makan" || this.props.title === "食物" ? food[i % food.length]
                                                : this.props.title === "Feeling" || this.props.title === "Perasaan" || this.props.title === "感觉" ? feeling[i % feeling.length]
                                                    : this.props.title === "Health" || this.props.title === "Kesihatan" || this.props.title === "健康" ? health[i % health.length]
                                                        : request[i % request.length]}
                                            width="200"
                                            height="160"
                                        />
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
/*<img src={this.props.title === "Food" ? food[i % food.length]
                                                : this.props.title === "Feeling" ? feeling[i % feeling.length]
    : this.props.title === "Health" ? health[i % health.length]
        : request[i % request.length]} width = "200" height= "160" />

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const food1 = importAll(require.context('./images/selection/food', false, /\.(png|jpe?g|svg)$/));
const feeling1 = importAll(require.context('./images/selection/feeling', false, /\.(png|jpe?g|svg)$/));
const health1 = importAll(require.context('./images/selection/health', false, /\.(png|jpe?g|svg)$/));
const request1 = importAll(require.context('./images/selection/request', false, /\.(png|jpe?g|svg)$/));*/