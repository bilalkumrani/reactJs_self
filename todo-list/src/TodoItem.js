import React from 'react';

export default function TodoItem(props){

    
    return (<>
       <div className='fullItem'>
        <span> <button onClick={()=>{
            props.onSelect(props.id);

        }}>Delete</button> </span>
        <li style={{display:'inline'}}>{props.text}</li> <br/>
        </div>
        </>
    )
}