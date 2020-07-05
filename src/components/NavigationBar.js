import React,{Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class NavigationBar extends Component{
    render(){
             return(
             <Navbar bg="dark" variant="dark">
             <Link to={""} className="navbar-brand">
             <img src="stockinfo.png" width="25" height="25" alt="brand"/> Stock Info
             </Link>
             <Nav className="mr-auto">
                   <Link to={"add"} className="nav-link"  >Add Stock  </Link>
                   <Link to={"list"} className="nav-link" >List Stock</Link>
                 </Nav>

             </Navbar>

             );

    }
}
