import { useState } from 'react';
import TodoItem from './TodoItem';


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
        <input type="text" name="item" id="item" onChange={changing} value={item}/>
        <button onClick={addItem}>Add Item</button>

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