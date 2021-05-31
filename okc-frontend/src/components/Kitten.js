import React from 'react'
import '../index.css'

const Kitten = ({kitten}) => {
    return (
        <div>
            <div>
                <h3>{kitten.name}</h3>
                <h4>{kitten.sex}</h4>
                <h4>{kitten.age} Weeks</h4>
            </div>
        </div>
    )
}

export default Kitten;