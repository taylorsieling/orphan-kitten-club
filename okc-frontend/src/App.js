import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Orphan Kitten Club</h1>
        <hr/>
      </div>
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
