import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { LoginForm } from '../components/LoginForm'
import { login } from '../actions/login'
// import { Redirect } from 'react-router-dom'


class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    // pass down email and password to form component via state/props

    handleChange = event => {
        console.log(event.target.value)
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        //pass submitted data to props
        event.preventDefault()
        console.log(this.state)
        const { email, password } = this.state
        const credentials = { email, password }
        this.props.login(credentials)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" id="email" placeholder="Email" onChange={this.handleChange}/>
                    <input type="password" name="password" id="password"  placeholder="Password" onChange={this.handleChange}/>
                    <input type="submit" />
                </form>
            </div>
        )
    }

}

// const mapStateToProps = ({ users }) => {
//     return {
//         loggedIn: users.valid
//     }
// }

const mapDispatchtoProps = dispatch => ({
        login: (credentials) => dispatch(login(credentials))
})

export default connect(null, mapDispatchtoProps)(Login)
