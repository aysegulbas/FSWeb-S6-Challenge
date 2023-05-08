// Karakter bileşeniniz buraya gelecek
import {useEffect} from "react";
import axios from "axios";
import { useState } from "react";
import AcilirSayfa from "./AcilirSayfa";
import "./Karakter.css";


function Filmler({char,films}){
 
    return (
        <div>
            
                    {films.filter((f,i)=>f.title===char.films[i])
                    .map((film,i)=>
                        (
                    <AcilirSayfa key={i} title ={film.title}>
                       <div className="birincikume">
                            <span>{film.opening_crawl}</span>
                            <span>Title:{film.title}</span>
                            <span>Director:{film.director}</span>
                            <span>Producer:{film.producer}</span>
                            <span>Release Date:{film.release_date}</span>
                            
                       </div>
                       
                    </AcilirSayfa>
                    ))}
                    
                
                    
                    
           

        </div>
    )
}

export default Filmler;