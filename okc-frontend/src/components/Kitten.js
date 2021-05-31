import React from 'react'
import '../index.css'

const Kitten = ({kitten}) => {
    return (
        <div className="one">
            <div className="card">
                <div className="card-hearder">
                    <img className="cardimg" src={kitten.portrait_url} alt={kitten.name} width="100"/>
                </div>
                <div className="card-body">
                    <h3>{kitten.name}</h3>
                    <h4>{kitten.sex}</h4>
                    <h4>{kitten.age} Weeks</h4>
                </div>
            </div>
        </div>
    )
}

export default Kitten;