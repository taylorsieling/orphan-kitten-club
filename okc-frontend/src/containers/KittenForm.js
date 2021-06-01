import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class KittenForm extends Component {

    state = {
        name: '',
        sex: '',
        age: '',
        dob: '',
        weight: '',
        breed: '',
        color: '',
        pattern: '',
        altered: '',
        microchipped: '',
        declawed: '',
        intake_date: '',
        intake_time: '',
        location_found: '',
        intake_type: '',
        status: '',
        current_location: '',
        description: '',
        portrait_url: ''
    }

    render() {
        return (
            <div>
                <h3>New Kitten Intake Form</h3>
                <form onSubmit={this.handleSubmit} className="kitten-form">

                    <div className="wrapper">
                        <div>
                            <label>Name:</label>
                            <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Sex:</label>
                            <input type="radio" id="male" name="sex" value="male"/>
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="sex" value="female"/>
                            <label for="female">Female</label>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div>
                            <label>Name:</label>
                            <input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Sex:</label>
                            <input type="radio" id="male" name="sex" value="male"/>
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="sex" value="female"/>
                            <label for="female">Female</label>
                        </div>
                    </div>

            

                </form>
            </div>
        )
    }
}
