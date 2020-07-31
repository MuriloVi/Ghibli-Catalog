import React from 'react'
import './Card.css'

//code use
import {Link}  from 'react-router-dom'
import img_ID from '../../Helpers/id_Img'



function Card({film}) {
    return (
        <div className="card-box-box">
             <Link to={{
            pathname: `film/${film.id}`,
            state: { id: film.id }
        }}>
        <div className="card-box" >
            <div className="film-poster-by-id">
                <img alt="film poster" src={img_ID(film.id.slice(0,4))}/>

            </div>
        
            <div className="card-title">
                <h3>{film.title}</h3>
            </div>
            
        </div>
        </Link>

        </div>
       

    )
}

export default Card;