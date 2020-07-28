import React from 'react'
import './Card.css'

//assets



function Card({film}) {
    return (
        <div className="card-box" >
            <div className="card-title">
                <h3>{film.title}</h3>
            </div>
        </div>

    )
}

export default Card;