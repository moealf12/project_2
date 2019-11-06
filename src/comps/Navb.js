import React,{Component} from 'react';
import './mainr.css'
import Image from 'react-bootstrap/Image'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from './logo.png'
class Navb extends Component {

  render() {
    return (
      <>
      <body>
      <img  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80" width='100%' height='50%' />
      <img className='logo' src={logo}/>
      <div className='over_img'>
      <ul className='nav'>
      <Link to="/">
      <li><a href="">Home</a></li>
      </Link>
      <Link to="/About">
      <li><a href="#">About</a></li>
      </Link>
      <Link to="/Contact">
      <li><a href="#">Contact</a></li>
      </Link>
      </ul>
      </div>
      </body>

      </>
    );
  }

}

export default Navb;
