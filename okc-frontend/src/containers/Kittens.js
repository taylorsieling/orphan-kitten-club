import React, { Component } from 'react'
import Kitten from '../components/Kitten'
import { connect } from 'react-redux'
import { fetchKittens } from '../actions/kittens'
import KittenForm from './KittenForm'

class Kittens extends Component {

    componentDidMount(){
        console.log("componentDidMount")
        this.props.fetchKittens()
    }

    handleLoading = () => {
        if (this.props.loading) {
            return (<h3>Herding the kittens... one moment please!</h3>)
        } else {
            return (
                <>
                    <div className="kittens">
                        <div className="home-text">
                            <h3>Give a Kitten a Forever Home</h3>
                            <h1>Knittin' Kitten Foster</h1>
                            <p><a href="https://orphankittenclub.org/donate/" target="_blank">Donate</a></p>
                        </div>
                    </div>

                    <h2>Our Current Kittens</h2>
                    <div className="wrapper">
                        {/* Filter/Search Component */}
                        {this.props.kittens.map((kitten => {
                        return (
                        <Kitten key={kitten.id} kitten={kitten} />
                        )}
                        ))}
                    </div>
                    <KittenForm/>
                </>
            )
        }
    }

    render() {
        return (
            <div>
                {this.handleLoading()}
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
