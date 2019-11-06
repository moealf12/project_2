import React, { Component } from 'react';
import './mainr.css'
import $ from 'jquery'
import MoveRow from './MoveRows'
import {Row} from 'react-bootstrap'
class Movies extends Component {

state = {
  data:[],
  search:' ',
  urls:''
}

searchBar(event){
  // console.log(event.target.value);
  this.setState({
    search:event.target.value
  })
  this.handels()


}
  handels() {
    fetch('https://api.themoviedb.org/3/search/movie?query='+this.state.search+' '+' '+'&api_key=467b99190762c525e0407fc3f52d654c')
    .then(res => res.json())
    .then(data => this.setState({data:data.results}))

  }




    //Hello from Movies apiKey https://api.themoviedb.org/3/search/movie?query=marvel&api_key=467b99190762c525e0407fc3f52d654c
  render() {






    return (
      <>


      <h1 className='movie_search_text_ban'></h1>
      <h1 className='movie_search_text'>ALL IN ONE PLACE</h1>
      <br/>
      <input className='movie_search_bar'
      onChange={(e)=>this.searchBar(e)}
      />
      <Row>
      {
        this.state.data.map(x =>(


         < MoveRow key={x.id} name={x.title} poster={x.poster_path} info={x.overview} title={x.title} date={x.release_date} id={x.id}/>
       ))}
       </Row>
      </>
    );
  }

}

export default Movies;
