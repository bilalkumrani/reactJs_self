import React, { useState } from 'react';
import Header from './Header'


export default function App() {
  const [data, setData] = useState({
    title: '',
    note: ''
  });

  const [allItems, setAllItems] = useState([]);
  function changing(e) {
    const { value, name } = e.target;

    setData((preVal) => {

      return {
        ...preVal,
        [name]: value
      }
    });
  }

  function addItem() {
    if (data.note && data.title)
      setAllItems((preVal) => {
        
          return ([...preVal, data]);
        
      })

  }

  function dltItem(e){
    const id = e.target.id;
    console.log('clicked')
    setAllItems((preVal)=>{
      
      return (preVal.filter((item,index)=>{
        return (index !== id);
      }))
    })
      }

  return (
    <>
      <Header text="Bilal's keep app" />

      <div className="container mt-5" >
        <div className="row">
          <div className="col-md-6 offset-3">

            <div className="card">
              <div className="card-title">
                <input className="form-control" type="text" name="title" onChange={changing} value={data.title} placeholder="Enter Tilte here" />

              </div>
              <div className='card-body'>
                <textarea name="" id="" cols="30" rows="10" name='note' onChange={changing} value={data.note} placeholder="Enter note here" />
                <button className='btn btn-success' onClick={addItem}>Add Note</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {
        allItems.map((item,index)=>{   
           return ( <>
           <div className="col-md-3" >
           <div className='card'>
             <div className= 'card-head'>
               <h1>{item.title}</h1>
             </div>
             <div className='card-body'>
               <p> {item.note} </p>
             </div>
             <button onClick={dltItem} id={index} className='btn btn-danger'>Delete</button>
           </div>
           </div>            
            </>)         
         })
          }

        </div>
      </div>

    </>
  );
          


}