import React, { Component } from 'react';
import './mainr.css'
import Music from './Music'
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
class Jambo_Box extends Component {

  render()
  {
    return(

      <>

      <div className='over_img_cat'>
      <ul className='nav'>
      <Link to="/music">
      <li><a href="#"><div><img src='http://icons.iconarchive.com/icons/dtafalonso/yosemite-flat/512/Music-icon.png' width='120px' height='120px'/></div>Music</a></li>
      </Link>
      <Link to="/Books">
      <li><a href="#"><div><img src='https://ar.seaicons.com/wp-content/uploads/2016/03/Moleskine-Blank-Book-icon.png' width='120px' height='120px'/></div>Books</a></li>
      </Link>
      <Link to="/Movies">
      <li><a href="#"><div><img src='https://img.icons8.com/pastel-glyph/2x/cinema-.png' width='120px' height='120px'/></div><tr>Movies</tr></a></li>
      </Link>
      </ul>
      </div>

      </>
    )
  }
}
export default Jambo_Box;
