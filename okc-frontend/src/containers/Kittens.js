import React, { Component } from 'react'
import Kitten from '../components/Kitten'
import { connect } from 'react-redux'
import { fetchKittens } from '../actions/kittens'

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
                    <h2>Our Current Kittens</h2>
                    <div className="wrapper">
                        {/* Filter/Search Component */}
                        {this.props.kittens.map((kitten => {
                        return (
                        <Kitten key={kitten.id} kitten={kitten} />
                        )}
                        ))}
                    </div>
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
