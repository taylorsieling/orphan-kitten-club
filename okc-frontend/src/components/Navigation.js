import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = {
    width: '150px',
    padding: '15px',
    textDecoration: 'none',
    fontWeight: 'bold',
    color: '#bdd1c5',
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={navbar}
                activeStyle={{
                    textdecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#7b7167'
                }}
            >
            HOME
            </NavLink>

            <NavLink
                to="/about"
                exact
                style={navbar}
                activeStyle={{
                    textdecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#7b7167'
                }}
            >
            ABOUT
            </NavLink>

            <NavLink
                to="/kittens"
                exact
                style={navbar}
                activeStyle={{
                    textdecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#7b7167'
                }}
            >
            KITTENS
            </NavLink>

            <NavLink
                to="/admin"
                exact
                style={navbar}
                activeStyle={{
                    textdecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#7b7167'
                }}
            >
            ADMIN
            </NavLink>

        </div>

        
    )
}

export default Navigation;
