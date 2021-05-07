import { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default function App(){
const [item,setItem] = useState();
const [listOfItems,setListOfItems] = useState([]);

function addItem(){

    setListOfItems((preVal)=>{
        return ( [...preVal,item] );
    });
    setItem('');
}

function changing(e){
    if(e.target.value)
    setItem(e.target.value);
}

function deleteItem(id){
    setListOfItems((preVal)=>{
       return preVal.filter((val,index)=>{
           return id !==index;
       })
    })
    console.log("deleted")
}

    return (
        <>
        <div className='mainClass'>
        <div className='centerClass' >
        <h1>Todo List</h1> <br/>
        
        <TextField type="text"  name="item" id="item" onChange={changing} value={item} />

        <Button onClick={addItem} variant="contained" color="primary">
        Primary
      </Button>

        <ol>

            {
                listOfItems.map((val,index)=>{

                    return (
                        <>
                           <TodoItem text={val} key={index} id={index} onSelect={deleteItem}/>
                        </>

                    );

                })
            }
        </ol>


        </div>
        </div>


        </>
    )
}