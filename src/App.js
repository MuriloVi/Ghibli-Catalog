import React from 'react';
import logo from './logo.svg';
import './App.css';

//code use
import { useEffect, useState } from 'react'
import { getAllFilms } from './services/ghibli';


function App() {
  const [loading, setLoading] = useState(true);
  const [ghibliFilms, setGhiblifilms] = useState([]);
  const baseURL = 'https://ghibliapi.herokuapp.com/films/';

  useEffect(()=>{
    async function fetchFilms(){
      let response = await getAllFilms(baseURL)
      console.log(response)
      await loadingGhibli(response)
      setLoading(false)
    }
    fetchFilms()
  }, [])

  const loadingGhibli = async (data) =>{
    let ghibliData = await Promise.all(data.map(async film => film))
    setGhiblifilms(ghibliData)
   }



  return (
    <div className="App">
     {loading ? <h3 style={{textAlign:"center"}}>Loading...</h3> : (
       <>
      <div className="Catalog">
        {ghibliFilms.map((film) =>{
          return <h2 key={film.id}>{film.title}</h2>
        })}
      </div>
       </>

     )}
    </div>  
  );
}

export default App;
