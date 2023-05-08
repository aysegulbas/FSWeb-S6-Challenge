// Karakter bileşeniniz buraya gelecek
import {useEffect} from "react";
import axios from "axios";
import { useState } from "react";
import AcilirSayfa from "./AcilirSayfa";
import Filmler from "./Filmler";
import "./Karakter.css";


function Karakter(){
    const [chars,setChars]=useState([]);
    const [films,setFilms]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
     axios.get(`https://swapi.dev/api/people/`)
     .then((response)=>{
        console.log(response.data)
        setChars(response.data)
     })
     axios.get(`https://swapi.dev/api/films/`)
     .then((response)=>{
        setFilms(response.data[0].results)
        console.log(response.data[0].results)
        setLoading(false)
     })
     },3000)
    },[])


    return (
        <div>
            
            {loading&&<h1>Loading...</h1>}
            {!loading&&(
                <div className="title">
                    <h1>Karakterler</h1>
                    {chars.map((char,i)=>(
                    <AcilirSayfa key={i} title={char.name} >
                        <div className="birincikume">
                            <span>gender:{char.gender}</span>
                            <span>Height:{char.height}</span>
                            <span>Mass:{char.mass}</span>
                            <span>BirthYear:{char.birth_year}</span>
                            <span>Eye Color:{char.eye_color}</span>
                            <span>Hair Color:{char.hair_color}</span>
                            <span>Skin Color:{char.skin_color}</span>
                        </div>
                        <div className="birincikume">
                        <div className="ikincikume">
                        <p>Appers in:</p>
                        <Filmler char={char} films={films}/>
                        </div>
                        </div>
                    </AcilirSayfa>))}
                    
                </div>
                    
                    
            )}

        </div>
    )
}

export default Karakter;