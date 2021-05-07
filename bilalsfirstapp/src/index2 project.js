import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let d = new Date();
d = d.getHours();
let msg;
let design = {
    color: 'red',

}

if(d >= 1 && d < 12){
    msg = "Good Morning";
    design['color'] = 'green';
}
else if(d >=12 && d < 19){
    msg = "Good Afternoon";
    design['color'] = 'orange';
}
else{
    msg = "Good Night";
    design['color'] = 'black';
}


ReactDOM.render(<>
<div >

<h1>Hello Sir, <span style={design}> {msg} </span> </h1>


</div>

</> ,document.getElementById('root'));