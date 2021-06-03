import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Kittens from './containers/Kittens'
import { About } from './components/About'
import { Admin } from './containers/Admin'
import Navigation from './components/Navigation'
import { Footer } from './components/Footer'
import { KittenShow } from './components/KittenShow'
import Login from './containers/Login'
import PrivateRoute from './containers/PrivateRoute'
import './App.css';

class App extends Component {
  render() {
    return (

      <Router>

        <div className="navbar">
        <Navigation />
        </div>
        
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route exact path='/about' component={ About } />
            <Route exact path='/kittens' component={ Kittens } />
            <Route path='/kittens/:id' component={ KittenShow } /> 
            <Route exact path='/login' component={ Login } />
            <PrivateRoute exact path='/admin' component={ Admin } />
          </Switch>

        <div className="footer">
          <Footer/>
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
