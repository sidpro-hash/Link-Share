import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	function myFunction() {
     
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById("myInput");
      filter = input.value.toLowerCase();
      table = document.getElementById("root");
      tr = table.getElementsByTagName("div");
		

      // Loop through all table rows, and hide those who don't match the search query
      for (i = 4; i < tr.length; i++) {
      td = tr[i].querySelectorAll("h4 > span")[0];
	
      if (td) {
        txtValue = td.innerText || td.textContent;
		
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
			tr[i].style.display = "";
			
        } else {
        tr[i].style.display = "none";
        }
      }
      }
    }
  return (
  	<>
  	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    	<div className="container-fluid">
    		<NavLink className="navbar-brand" to="/">Link Share</NavLink>
    		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      			<span className="navbar-toggler-icon"></span>
    		</button>
    		<div className="collapse navbar-collapse" id="navbarSupportedContent">
      			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
      				<li className="nav-item">
        				<NavLink className="nav-link" to="/About">About</NavLink>
      				</li>
      				<li className="nav-item dropdown">
        				<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        					Tools
        				</a>
        				<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        					<li><a className="dropdown-item" href="https://collegeek.com/Live_DHTML/index.html">Live Editor</a></li>
        					<li><a className="dropdown-item" href="https://collegeek.com/Decimaltoany/decimaltoany.html">Convertor Calculator</a></li>
       	 					<li><hr className="dropdown-divider"/></li>
        					<li><a className="dropdown-item" href="https://collegeek.com/">collegeek.com</a></li>
        				</ul>
      				</li>
      			</ul>
      
  				<form className="d-flex">
    				<input className="form-control me-2" type="text" id="myInput" onKeyUp={myFunction} placeholder="Search for title.." aria-label="Search" />
  				</form>
    		</div>
    	</div>
  	</nav>
  	</>
  	)
}

export default Navbar