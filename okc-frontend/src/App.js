import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './containers/Home'
import { Kittens } from './containers/Kittens'
import { About } from './containers/About'
import Navigation from './components/Navigation'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <div className="navbar">
        <Navigation />
        </div>
        <hr/>
        
        <div className="App">
          <h1>Knittin' Kitten Foster</h1>

          <Switch>
            <Route exact path='/' component={ Home }></Route>
            <Route exact path='/about' component={ About }></Route>
            <Route exact path='/kittens' component={ Kittens }></Route>
          </Switch>
        </div>

      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    kittens: state.kittenReducer.kittens,
    loading: state.kittenReducer.loading
  }
}

export default connect(mapStateToProps)(App);
