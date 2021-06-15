import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './nav'
import { useState } from 'react'

function App(){

    const [data, setData] = useState('')
    const [todo, setTodo] = useState([])
    const [deleted, setDeleted] = useState([])
    const [dltList,setDltList] = useState(false)


    function changing(e){
        
        setData(e.target.value)

    }
    

    function setting(){
        setTodo((preval)=>{
            return [...preval, data]
        })
    }


    function showDeleted(){
        setDltList(true)

    }

    function dlt(id){

        setTodo((preval)=>{

            return (

                todo.filter((item,index)=>{
                    if(index===id){
                        deleted.push(item)
                    }
                    return( id!==index) 
                })
            )
        })
    }



return (
<>
    <Nav />
    <div className="container mt-5">

        <div className="row">
            <div className="col-md-6 offset-3">
                <div className="input-group">
                <input  className="form-control" onChange={changing} type="text" name="" id=""/>
                <button className='btn btn-success' onClick={setting}> add to list</button>
                <button className='btn btn-warning' onClick={showDeleted}> Show deleted</button>
                <button className='btn btn-success' onClick={()=>{setDltList(false)}}> Show List</button>
                </div> 
            </div>
        </div>


        <div className="row" style={{backgroundColor:'yellow', borderRadius:20}}>
        <div className="col-md-6 offset-3">

        { dltList ? (
            deleted.map((item,index)=>{
                return(
                    <div>
                    <h1 key={index} className="mt-2">{item}<button onClick={()=>{
                        dlt(index)
                    }} className='btn btn-danger'>Delete</button></h1>
                    
                    </div>
                )
            })


        ) : (
            todo.map((item,index)=>{
                return(
                    <div>
                    <h1 key={index} className="mt-2">{item}<button onClick={()=>{
                        dlt(index)
                    }} className='btn btn-danger'>Delete</button></h1>
                    
                    </div>
                )
            })
        )
            
        }


        </div>

        </div>


    </div>

    </>





);

  
}

export default App;