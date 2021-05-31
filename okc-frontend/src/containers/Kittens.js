import React, { Component } from 'react'
import Kitten from '../components/Kitten'
import { connect } from 'react-redux'
import { fetchKittens } from '../actions/kittens'

class Kittens extends Component {

    componentDidMount(){
        console.log("componentDidMount")
        this.props.fetchKittens()
    }



    render() {
        return (
            <div>
                <h3>Welcome! This is the Kitten Index Page!</h3>
                {/* Filter/Search Component */}
                {this.props.kittens.map((kitten => {
                   return (
                   <Kitten key={kitten.id} kitten={kitten} />
                   )}
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        kittens: state.kittenReducer.kittens,
        loading: state.kittenReducer.loading
    }
}

export default connect(mapStateToProps, { fetchKittens })(Kittens)
