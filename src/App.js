import React,{Component} from 'react';
import './App.css'
import Run_2_wo_metadata_h264420_720p_UHQ from './media/Run_2_wo_metadata_h264420_720p_UHQ.mp4'
import ok1 from './media/ok1.gif'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import Navb from './comps/Navb'
import Jambo_Box from './comps/Jambo_Box'
import firebase from './firebase'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import Music from './comps/Music'
import Books from './comps/books'
import Movies from './comps/Movies'
import News from './comps/news'
import About from './comps/About'

export default class App extends Component{


  render()
  {
    return(
      <Router>
      <Navb/>
      <Route exact path='/' component={Jambo_Box}/>
      <Route exact path='/Music' component={Music}/>
      <Route exact path='/Books' component={Books}/>
      <Route exact path='/Movies' component={Movies}/>
      <Route exact path='/News' component={News}/>
      <Route exact path='/About' component={About}/>

      </Router>


    )
  }
}
