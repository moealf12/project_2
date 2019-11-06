import React, { Component } from 'react';
import './mainr.css'
import News_list from './News_list'
import {Row,Col} from 'react-bootstrap'
class News extends Component {
  state={
    result:[],
    load:true
  }




componentWillMount() {
  fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=1ab30fa89a0c4a21a4709ec09bd1c137')
  .then(res => res.json())
  .then(data => this.setState({result:data.articles}))


}
  render() {
    const {result} = this.state

    return (
      <>
      


      {
        result.map(x=>(
          <News_list news_image={x.urlToImage} news_head={x.title}/>
        ))
      }

      </>


    );
  }

}

export default News;
