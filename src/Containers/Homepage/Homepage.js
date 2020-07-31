import React from 'react';
import './Homepage.css';

//components
import HeaderTop from '../../Components/HeaderTop/HeaderTop'
import Card from '../../Components/Card/Card'

//assets
import AOS from 'aos';
import 'aos/dist/aos.css';

//code use
import { useEffect, useState } from 'react';
import { getAllFilms } from '../../services/ghibli';


function Homepage() {
    const [loading, setLoading] = useState(true);
    const [ghibliFilms, setGhiblifilms] = useState([]);
    //const [filteredGhibli, setFilteredGhibli] = useState('');
    //const [search, setSearch] = useState('')
    const baseURL = 'https://ghibliapi.herokuapp.com/films/';

    useEffect(() => {
        async function fetchFilms() {
            let response = await getAllFilms(baseURL)
            console.log(response)
            await loadingGhibli(response)
            setLoading(false)
        }
        fetchFilms()
    }, [])


    const loadingGhibli = async (data) => {
        let ghibliData = await Promise.all(data.map(async film => film))
        setGhiblifilms(ghibliData)
    }
    AOS.init();


    return (
        <div>
            <HeaderTop />
            <div className="Home-box">
                {loading ? <h3 style={{ textAlign: "center", backgroundColor:"#dcdcdcce"  }}>Loading...</h3> : (
                    <>
                        <div  className="Catalog">
                            {ghibliFilms.map((film) => {
                                return (
                                    <div data-aos="fade-up"><Card key={film.id} film={film} /></div>
                                     
                                   
                                ) 
                            })}
                        </div>
                    </>

                )}
            </div>

        </div>

    );
}

export default Homepage;
