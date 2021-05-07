import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


export default function TodoItem(props){

    
    return (<>
       <div className='fullItem'>
        
<Button onClick={()=>{
         props.onSelect(props.id);

        }}> <DeleteIcon />
</Button>
        
        <li style={{display:'inline'}}>{props.text}</li> <br/>
        </div>
        </>
    )
}