import React from 'react'


export const LoginForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="email" id="email" value={email} placeholder="Email" onChange={props.handleChange}/>
                <input type="password" name="password" id="password" value={password} placeholder="Password" onChange={props.handleChange}/>
            </form>
        </div>
    )
}
