import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function Navbar(){



  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>


        <li className="nav-item">
        <div className="input-group offset-5">
        <input type="text" name="" id=""/>
        <button className="btn btn-primary">Search</button>
        </div>
         
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )


}