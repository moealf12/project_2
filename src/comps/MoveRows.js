import React, { Component } from 'react';
import './mainr.css'
import Container from 'react-bootstrap/Container'
import {Row,Col} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
class MoveRow extends Component {
  constructor(props){
    super(props)
  }

  movieView(){
    console.log('trying to view ');
    console.log(this.props.id+this.props.title);
    window.location.href = 'https://www.themoviedb.org/search?query='+this.props.title+'&language=en-US'
  }


  movieWatch(){
    console.log('trying to view ');
    console.log(this.props.id+this.props.title);
    var t = this.props.title.replace(" ","")
    window.location.href = 'https://yifymovies.tv/movies/'+t
  }



  render()

  {

    return (
      <>

      <Container className='over_img_cat_movis'>

      <Col xs><Image src={'https://image.tmdb.org/t/p/w185'+this.props.poster} fluid />
      <div>{this.props.date}</div>
      <div><h4>{this.props.name}</h4></div>
      <div><p>{this.props.info}</p></div>
      <input onClick={this.movieView.bind(this)} type='button' value='View'/><div><button></button></div>
      <input onClick={this.movieWatch.bind(this)} type='button' value='Watch'/><div><button></button></div>
      </Col>
      </Container>
      </>
    );
  }

}

export default MoveRow;
