import React from 'react';
import './Filmpage.css';

//components
import HeaderTop from '../../Components/HeaderTop/HeaderTop'


//assets


//code use
import { useEffect, useState } from 'react';
import { getAllFilms } from '../../services/ghibli';
import { useParams } from 'react-router-dom';


function Filmpage() {
    const [loading, setLoading] = useState(true);
    const [ghibliFilm, setGhiblifilm] = useState({});
    const baseURL = 'https://ghibliapi.herokuapp.com/films/';

    let {id} = useParams()

    useEffect(() => {
        async function fetchFilm() {
            let response = await getAllFilms(`${baseURL}/${id}`)
            console.log(response)
            await loadingGhibli(response)
            setLoading(false)
        }
        fetchFilm()
    }, [id])

    const loadingGhibli = async (data) => {
        let ghibliData = data
        setGhiblifilm(ghibliData)
    }
    //AOS.init();



    return (
        <div>
            <HeaderTop />
            <div className="Home-box">
                {loading ?  <h1>Loading...</h1> : <h1>{ghibliFilm.title}</h1> }
              
            </div>

        </div>

    );
}

export default Filmpage;
