import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { addFavourite, removeFavourite } from '../actions/index'

export default function MovieCard(props) {

    const handleFavouriteClick = () =>{
        const {movie} = props;
        props.dispatch(addFavourite(movie))
        
    }

    const handleUnFavouriteClick = ()=>{
        const {movie} = props;
        props.dispatch(removeFavourite(movie))
    }



    return (
        <>
            
            <div className="card col-md-3 m-3" >
                <img className="card-img-top" alt='poster' src={props.movie.Poster}/>
            <h5 className="card-title mt-2" >{props.movie.Title}</h5>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                {
                    props.isMovieFavourite
                    ?<button className='btn btn-warning' onClick={handleUnFavouriteClick}>Unfavorite</button> 
                    :<button className='btn btn-success' onClick={handleFavouriteClick}>Favorite</button>
                }
                
            </div>
            


        </>



    );
}