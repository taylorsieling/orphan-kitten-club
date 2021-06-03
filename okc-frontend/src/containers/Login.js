import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginForm } from '../components/LoginForm'


class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    // pass down email and password to form component via state/props

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        //pass submitted data to props
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <LoginForm email={this.state.email} password={this.state.password} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            </div>
        )
    }

}

const mapStateToProps = ({ users }) => {
    
}

export default connect(mapStateToProps)(Login)
