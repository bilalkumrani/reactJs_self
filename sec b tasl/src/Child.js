import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'




export default function Child(props){

    console.log(props.abc)

    return (

        <>

       

           {props.abc? (

           <>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-3">

                        <img className="rounded-circle" src={props.abc.results[0].picture.large} alt=""/>
                        <h1>{props.abc.results[0].name.first}</h1>
                        </div>
                    </div>

                </div>

            
           </>
           ) : (
               ''
           )} 

           
        </>
    )

}