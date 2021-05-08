import React from 'react';

export default function Item(props){

    return ( <>
        <div className="col-md-3" >
        <div className='card'>
          <div className= 'card-head'>
            <h1>{props.title}</h1>
          </div>
          <div className='card-body'>
            <p> {props.note} </p>
          </div>
          <button onClick={props.dlt} id={props.id} className='btn btn-danger'>Delete</button>
        </div>
        </div>      
         </>);
}