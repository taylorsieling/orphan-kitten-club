import React, { Component } from 'react'
import Kitten from '../components/Kitten'
import { connect } from 'react-redux'

class Kittens extends Component {

    render() {
        return (
            <div>
                <h3>Welcome! This is the Kitten Index Page!</h3>
                <Kitten />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Kittens)
