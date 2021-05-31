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

        <div className="navbar">
        <Navigation />
        </div>
        <hr/>
        
        <div className="App">
          <h1>Orphan Kitten Club</h1>

          <Switch>
            <Route exact path='/' component={ Home }></Route>
            {/* <Route exact path='/about' component={ About }>About</Route>
            <Route exact path='/kittens' component={ Kittens }>Kittens</Route>
            <Route exact path='/admin' component={ Kittens }>Admin Login</Route> */}
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
