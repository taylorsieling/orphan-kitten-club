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
                            <input type="text" value={this.state.name} name="name" placeholder="Name" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Sex: </label>
                            <input type="radio" id="male" name="sex" value="male"/>
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="sex" value="female"/>
                            <label for="female">Female</label>
                        </div>
                    </div>

                    <div className="wrapper">
                        <div>
                            <input type="text" value={this.state.age} name="age" placeholder="Age" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Date of Birth: </label>
                            <input type="date" value={this.state.dob} name="dob" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div>
                            <input type="text" value={this.state.weight} name="weight" placeholder="Weight" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input type="text" value={this.state.breed} name="breed" placeholder="Breed" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div>
                            <input type="text" value={this.state.color} name="color" placeholder="Color" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <input type="text" value={this.state.pattern} name="pattern" placeholder="Pattern" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div>
                            <label>Intake Date: </label>
                            <input type="date" value={this.state.date} name="date" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Intake Time: </label>
                            <input type="time" value={this.state.time} name="time" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div>
                            <input type="text" value={this.state.location_found} name="location_found" placeholder="Location Found" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div>
                            <label>Intake Date: </label>
                            <input type="date" value={this.state.date} name="date" onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label>Intake Time: </label>
                            <input type="time" value={this.state.time} name="time" onChange={this.handleChange}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
