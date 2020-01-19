import React, { Component } from 'react';
import "./reactincrementbutton.css"
class IncrementButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksold: 0,
      bookstock:Math.floor(Math.random() * 50) + 1,
      show: true
    };
   
  }
  
  TambahItem = () => {
    if(this.state.bookstock !=0){
      this.setState({ booksold: this.state.booksold + 1 });
    }else{
      return (null);
    }
    this.setState({ bookstock:this.state.bookstock -1});
  }
  


  
  render() {
    return (
      <div>
        <a href="https://api.whatsapp.com/send?phone=6287864249656&text=Feel%20free%20to%20order"><p onClick={this.TambahItem} class="incrementbutton">Buy this book</p></a>
        {<h3 style={{fontWeight:`lighter`}}>Book Sold   : { this.state.booksold }</h3>}
    {this.state.bookstock == 0?
    <h3 class="solddescription">Book Stock: Oops,Sorry We Running Out Of Stock</h3>:
    <h3 class="salesdescription">Book Stock:{this.state.bookstock} Book Left Go Get It fast!</h3>}
      </div>
    );
  }
}


export default IncrementButton;