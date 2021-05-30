import React, { Component } from 'react'

export default class CreateIntake extends Component {
    render() {
        return (
            <div>
                <form>
                <label>Name</label>
                <input type="text" id="name"/>
                </form>
            </div>
        )
    }
}
