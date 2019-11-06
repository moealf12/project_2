import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'

import './news.css'

class News_list extends Component {

  render() {
    return (
      <>




      <div className='center'>
      <div className='imgBox'>
      <img src={this.props.news_image} width='300px' />
      <div className='container'>
      <div className='cont'>
      {this.props.news_head}
      </div>
      </div>
      </div>
      </div>

      <p>ok</p>


      </>

    );
  }

}

export default News_list;
