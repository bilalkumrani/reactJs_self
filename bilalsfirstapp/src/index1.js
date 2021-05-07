import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'




//ReactDom.render('kiya dikhana h','kaha dikhana hai','callback) it takes 3 parameters
// adding single element in dom
//ReactDOM.render(<h1>Hello world!!</h1>,document.getElementById('root'));

// adding multiple elements in DOM.
// whenever we use render method it only takes one element if we want to add more than one elements than we have to close those elements in any single tag EG: <div> <h1>Hellow</h1> <h2>world</h2> </div>



// ReactDOM.render(
// <>
//   <h1>Bilal netflix series</h1>
//   <p>List of best five series</p>
//   <ol>
//   <li>Dark</li>
//   <li>Extra</li>
//   <li>HOLO</li>
//   <li>Robot</li>
//   <li>first</li>
//   </ol>
// </>,
// document.getElementById('root'));

let myName = 'Bilal Khan';
var d = new Date().toLocaleDateString();
var t = new Date().toLocaleTimeString();


// ReactDOM.render(
// <>
// <h1>Hi my name is {myName}</h1>
// <p>and my lucky number is {Math.random()}</p>
// </>, document.getElementById('root'))



//showing date and time on dom
// ReactDOM.render( <>
//   <h1>Hi my Name is {myName}</h1>
//   <a href="https://www.google.com">This is google</a>
//   <p>Today's date is {d}</p>
//   <p>Time now is {t}</p>
// </>,document.getElementById('root'))



// using picture in dom
// ReactDOM.render(<>
//   <img src="https://picsum.photos/200"/>
// </>,document.getElementById('root'))

// we have to create object to use inline css all the properties will be written here in the object and then i will give the object to the element

const desigh = {
  color: "black",
  backgroundColor:"hotpink",
  margin: "50px",
  border:"2px solid black",
  textAlign:"center"

}


ReactDOM.render(<>

  <h1 className='heading'>I will style this heading</h1>

  <h2 style={desigh}>Inline css will be applied here</h2>


</>,document.getElementById('root'))





