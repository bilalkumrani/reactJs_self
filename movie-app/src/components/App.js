import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import {addMovies} from '../actions/index'
import data from '../data'
import MovieCard from './MovieCard'

export default function App(props){

    const [movies,setMovies] = useState({
        list:[],
        favorites:[]
    });

    const [showList, setShowList] = useState([]);


    useEffect(()=>{

        props.store.dispatch(addMovies(data))

    },[])

    props.store.subscribe(()=>{
            setMovies(props.store.getState())
            console.log("Updated")
            console.log(props.store.getState())
            setShowList(props.store.getState().list)
        })

       const isMovieFavourite = (movie) =>{
        const { favourites } = props.store.getState();
        const index = favourites.indexOf(movie)
        if(index !== -1){
            console.log("Found Movie")
            return true;
        }
        return false;
       }


       const handleFavourite = () =>{

        setShowList(props.store.getState().favourites);
       }

       const handleMovies = () =>{

        setShowList(props.store.getState().list);

    }

       


    return (
    
    <>
    <div className="container">
        <Navbar/>
           <div className="container mt-5">
            <div className="row tabs">
                <div className="tab col-md-2 m-2  p-2 text-center" 
                style={{cursor:'pointer',backgroundColor:"black", color:"white" }}
                onClick={handleMovies}>Movies</div>

                <div className="tab col-md-2 m-2 p-2 text-center"
                style={{cursor:'pointer', backgroundColor:"black", color:"white" }}
                 onClick={handleFavourite} >Favorites</div>
            </div>

            <div className="list">
            <div className="row mt-5">
            {
                
                showList.map((movie, index)=>{
                    return <MovieCard 
                    movie={movie}
                    key={index}
                    dispatch={props.store.dispatch}
                    isMovieFavourite={isMovieFavourite(movie)}
                    
                     />
                })

            }
            </div>
                
            </div>

           </div>
                       
        </div>

        </>
            
    )
}