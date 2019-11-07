import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import {Row,Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import './mainr.css'
import Books from './books'






class BookList extends Component {


  movieView(){
    console.log('trying to view ');
    console.log(this.props.id+this.props.title);
    window.location.href = `${this.props.view}`
  }

  render() {
    return (
      <>
      <Container className='over_img_cat_movis'>
      <Row>
      <Col xs><Image src={this.props.book_img} fluid />
      
      <div>{this.props.book_title}</div>
      <div><h3>{this.props.name}</h3></div>
      <div><div><h5>{this.props.book_price}</h5></div></div>

      <div><p>{this.props.book_rev}</p></div>

      <input onClick={this.movieView.bind(this)} type='button' value='View'/><div><button>go</button></div>
      </Col>

      </Row>
      </Container>
      </>
    );
  }

}

export default BookList;
