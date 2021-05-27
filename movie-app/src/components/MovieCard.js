import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function MovieCard(props) {



    return (
        <>
            
            <div className="card col-md-3 m-3" >
                <img className="card-img-top" alt='poster' src={props.movie.Poster}/>
            <h5 className="card-title mt-2" >{props.movie.Title}</h5>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <button className='btn btn-success'>Favorite</button>
            </div>
            


        </>



    );
}