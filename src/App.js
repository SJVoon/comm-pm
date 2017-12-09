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

const colors = ["orange", "yellow", "olive", "green", "red", "teal", "blue", "violet", "purple", "pink", "brown"]

class App extends Component {
  state = {
    name: '',
    language: lang.English,
    title: '',
    items: [],
    histIns: [],
    play: true
  }

  handleNameChange = name => this.setState({ name })

  handleLanguageChange = value => this.setState({
    language: value === 'english'
      ? lang.English
      : value === 'chinese'
        ? lang.Chinese
        : lang.Malay
  })

  handleItemChange = (items, title, cb) => this.setState({ items, title }, cb)

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
                  />}
                />
                <Route
                  path='/comm-pm/instruction'
                  render={props => <Instruction {...props} language={language} histIns={this.state.histIns}
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