import React, { Component } from 'react';
import './mainr.css'
import MoveRow from './MoveRows'
import BookList from './BookList'
class Books extends Component {
  state = ({
    books:[],
    price:[],
    search:[],
  })

//

searchBar(event){
  this.setState({
    search:event.target.value
  })
  this.handels()


}

handels(e) {
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}${'?'}&key=AIzaSyD3ddBCs8m2PMeDHw795fxDsE8KAXqQTuo`)
  .then(res => res.json())
  .then(data => this.setState({books:data.items}))

}



  render() {


    return (
      <>
      <h1 className='movie_search_text_ban'></h1>
      <h1 className='movie_search_text'>ALL IN ONE PLACE</h1>
      <br/>
      <input className='movie_search_bar' onChange={(e)=>this.searchBar(e)}
      />




      {
        this.state.books.map(x=>(
        <BookList key={x.id} bookId={x.id} book_title={x.volumeInfo.title} view={x.volumeInfo.previewLink}  book_img={x.volumeInfo.imageLinks !== undefined ? x.volumeInfo.imageLinks.thumbnail : console.log('')}/> ))
      }

      {
        console.log(this.state.books)
      }



      </>


    );
  }


}

export default Books;
