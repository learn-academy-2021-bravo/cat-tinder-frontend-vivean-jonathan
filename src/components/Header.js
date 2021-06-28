import React, { Component } from 'react'
import catTinder from '../assets/cat-tinder.jpg'

class Header extends Component {
  render(){
    return(
      <>
        <h1>This is a Header</h1>
        <img src={ catTinder }  alt="Cute cat header logo"/>
      </>
    )
  }
}

export default Header 