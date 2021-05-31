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
        const kittens = this.props.kittens.map((kitten, i) => <li key={i}>{kitten.name}</li>)
        return (
            <div>
                <h3>Welcome! This is the Kitten Index Page!</h3>
                {kittens}
                <Kitten />
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
