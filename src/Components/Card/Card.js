import React from 'react'
import './Card.css'

//code use
import {Link}  from 'react-router-dom'



function Card({film}) {
    return (
        <div className="card-box-box">
             <Link to={{
            pathname: `film/${film.id}`,
            state: { id: film.id }
        }}>
        <div className="card-box" >
        
            <div className="card-title">
                <h3>{film.title}</h3>
            </div>
            
        </div>
        </Link>

        </div>
       

    )
}

export default Card;