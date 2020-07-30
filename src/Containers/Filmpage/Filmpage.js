import React from 'react';
import './Filmpage.css';

//components
import HeaderTop from '../../Components/HeaderTop/HeaderTop'


//assets
import AOS from 'aos';
import 'aos/dist/aos.css';


//code use
import { useEffect, useState } from 'react';
import { getAllFilms } from '../../services/ghibli';
import { useParams } from 'react-router-dom';
import img_ID from '../../Helpers/id_Img'



function Filmpage() {
    const [loading, setLoading] = useState(true);
    const [ghibliFilm, setGhiblifilm] = useState({});
    const baseURL = 'https://ghibliapi.herokuapp.com/films/';

     //Animation on Scroll
    AOS.init()

    let { id } = useParams()
    useEffect(() => {
        async function fetchFilm() {
            let response = await getAllFilms(`${baseURL}/${id}`)
            await loadingGhibli(response)
            setLoading(false)

        }
        fetchFilm()
    }, [id])

    const loadingGhibli = async (data) => {
        let ghibliData = data
        setGhiblifilm(ghibliData)
        
    }
  
    return (
        <div>
            <HeaderTop />
            <div className="Film-box">
                {loading ? <h1>Loading...</h1> : (
                    <>
                        <div data-aos="fade-up" >
                            <div id="title-date"><h1 >{ghibliFilm.title}</h1> <br/> <h3>{ghibliFilm.release_date}</h3></div>
                           <div className="Img-by-sliced-id">
                               <img  alt="film banner" src={img_ID(ghibliFilm.id.slice(0,4))} />
                           </div>
                            <div className="Score-card">
                                <h3>Score<br/>{ghibliFilm.rt_score}</h3>
                            </div>
                               
                            <h3 id="description">{ghibliFilm.description}</h3>
                            <h3> Director :{ghibliFilm.director} </h3>
                            <h3> Producer: {ghibliFilm.producer}</h3>
                        </div>

                    </>
                )}

            </div>

        </div>

    );
}

export default Filmpage;
