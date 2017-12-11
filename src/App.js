import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import Sound from 'react-sound'
import Home from './Home';
import Login from './Login';
import History from './History';
import Selection from './Selection'
import Instruction from './Instruction'
import lang from './Home.json';
import music from './audio/music.mp3'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import a1 from './images/selection/food/1.jpg'
import a2 from './images/selection/food/2.jpg'
import a3 from './images/selection/food/3.jpg'
import a4 from './images/selection/food/4.jpg'
import a5 from './images/selection/food/5.jpg'
import a6 from './images/selection/food/6.jpg'
import a7 from './images/selection/food/7.jpg'
import b1 from './images/selection/feeling/1.png'
import b2 from './images/selection/feeling/2.png'
import b3 from './images/selection/feeling/3.jpg'
import b4 from './images/selection/feeling/4.jpg'
import b5 from './images/selection/feeling/5.jpg'
import b6 from './images/selection/feeling/6.jpg'
import b7 from './images/selection/feeling/7.jpeg'
import c1 from './images/selection/health/1.jpg'
import c2 from './images/selection/health/2.jpg'
import c3 from './images/selection/health/3.jpg'
import c4 from './images/selection/health/4.jpg'
import c5 from './images/selection/health/5.jpg'
import c6 from './images/selection/health/6.jpg'
import c7 from './images/selection/health/7.jpg'
import d1 from './images/selection/request/1.png'
import d2 from './images/selection/request/2.png'
import d3 from './images/selection/request/3.jpg'
import d4 from './images/selection/request/4.jpg'
import d5 from './images/selection/request/5.jpeg'
import d6 from './images/selection/request/6.jpg'
import d7 from './images/selection/request/7.jpg'

const colors = ["orange", "yellow", "olive", "green", "red", "teal", "blue", "violet", "purple", "pink", "brown"]
const food = [a1, a2, a3, a4, a5, a6, a7];
const feeling = [b1, b2, b3, b4, b5, b6, b7];
const health = [c1, c2, c3, c4, c5, c6, c7];
const request = [d1, d2, d3, d4, d5, d6, d7];

class App extends Component {
  state = {
    name: '',
    language: lang.English,
    title: '',
    items: [],
    histIns: [],
    play: true,
    histImage: [],
    group: ''
  }

  handleNameChange = name => this.setState({ name })

  handleLanguageChange = value => this.setState({
    language: value === 'english'
      ? lang.English
      : value === 'chinese'
        ? lang.Chinese
        : lang.Malay
  })

  handleItemChange = (items, title, group, cc, cb) => this.setState({ items, title, group }, cc, cb)

  handleHistIns = (item) => this.setState({ histIns: [...this.state.histIns, item] })

  replay = () => this.setState({ play: false }, () => this.setState({ play: true }))

  render() {
    const { name, language } = this.state
    return (
      <BrowserRouter>
        <div style={{ height: '100%' }}>
          <Sound
            url={music}
            playStatus={
              Sound.status.PLAYING
            }
            volume={15}
            loop={true}
            onFinishedPlaying={this.replay}
            autoLoad={true}
          />
          <Grid
            textAlign="center"
            style={{ height: '100%' }}
            verticalAlign="middle"
          >
            <Grid.Column>
              <Switch>
                <Route
                  exact path='/comm-pm'
                  render={props => (
                    <Login
                      handleNameChange={this.handleNameChange}
                      name={name}
                      handleLanguageChange={this.handleLanguageChange}
                      language={language}
                      {...props}
                    />
                  )}
                />
                <Route
                  path='/comm-pm/home'
                  render={props => <Home {...props} language={language} handleItemChange={this.handleItemChange} colors={colors} />}
                />
                <Route
                  path='/comm-pm/history'
                  render={props => <History {...props} name={name} language={language} histIns={this.state.histIns} colors={colors} />}
                />
                <Route
                  path='/comm-pm/selection'
                  render={props => <Selection {...props} language={language} items={this.state.items}
                    colors={colors} title={this.state.title} handleHistIns={this.handleHistIns}
                    food={food} feeling={feeling} health={health} request={request} handleItemChange={this.handleItemChange}
                  />}
                />
                <Route
                  path='/comm-pm/instruction'
                  render={props => <Instruction {...props} language={language} histIns={this.state.histIns} histImage={this.state.histImage}
                    food={food} feeling={feeling} health={health} request={request} items={this.state.items} title={this.state.title}
                    group={this.state.group}
                  />}
                />
              </Switch>
            </Grid.Column>
          </Grid>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;