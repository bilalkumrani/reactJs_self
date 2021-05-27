import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import data from '../data'
import MovieCard from './MovieCard'

export default function App(props){
    const [movies,setMovies] = useState([]);


    useEffect(()=>{

        props.store.dispatch({
            type: "ADD_MOVIES",
            movies : data
        })

       

    },[])
    
    props.store.subscribe(()=>{
            setMovies(props.store.getState())
            console.log("Updated")
        })


    return (
    
    <>
    <div className="container">
        <Navbar/>
           <div className="container mt-5">
            <div className="row tabs">
                <div className="tab col-md-5">Movies</div>
                <div className="tab col-md-5">Favorites</div>
            </div>

            <div className="list">
            <div className="row mt-5">
            {
                
                movies.map((movie, index)=>{
                    return <MovieCard movie={movie} key={index} />
                })

            }
            </div>
                
            </div>

           </div>
                       
        </div>

        </>
            
    )
}