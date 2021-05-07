
import './App.css';
import { useState } from 'react';

function SimpleLogin() {

  const [data,setData] = useState({
  fname:'',
  lname:'',
  email:''
});

  const changing = (e) =>{
   
    const val = e.target.value;
    const name =   e.target.name;

    setData((preVal)=>{
      return {
        ...preVal,
        [name]: val,
      };
     
    });

  }

  const onsubmits = (e)=>{
    e.preventDefault();
    const fName = data.fname;
    const lName = data.lname;
    const email = data.email;

    console.log("first name: "+fName);
    console.log("last name: "+lName);
    console.log("Email: "+email);

    console.log("Submited");
  }
  
  return ( <>
<form onSubmit={onsubmits}> 
<br/>
<br/>
<br/>
    <input type="text"  name='fname' onChange={changing} placeholder="First Name"/>
    <br/>
    <br/>
    <input type="text"  name='lname' onChange={changing} placeholder="Last Name"/>
    <br/>
    <br/>
    <input type="text"  name='email' onChange={changing} placeholder="Email"/>
    <br/>
    <br/>
    <button>Submit</button>


</form>

  </>)
}

export default SimpleLogin;
