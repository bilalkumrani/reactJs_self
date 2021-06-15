import React, { useState } from 'react';
import Child from './Child';


function App(){

    const [data,setData] = useState()
   

    function fetchData(){
        fetch('https://randomuser.me/api/').then(res=>res.json()).then(result=>setData(result))
    }

    function handleClick(){
        fetchData()
    }


    return (

        <>

        <button  onClick={handleClick}>fetch data</button>
       
        <Child abc={data} />


        </>
    )

  
}

export default App;