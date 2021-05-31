import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './containers/Home'
import Navigation from './components/Navigation'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="App">
          <h1>Orphan Kitten Club</h1>
          <hr/>

          <Switch>
            <Route exact path='/' component={ Home }>Home</Route>
            
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
