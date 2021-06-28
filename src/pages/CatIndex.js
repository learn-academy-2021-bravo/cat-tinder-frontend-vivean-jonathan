import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class CatIndex extends Component {
  render(){
     let {cats} = this.props
     console.log(cats)
    return(
      <div className="theCatIndex">
        <h1>This is a CatIndex</h1>
        { cats && cats.map(cat =>{
            return (
               
                   <NavLink to={`/catshow/${cat.id}`} className="catindex"key = {cat.id}>
                 <p>{cat.name}</p>
                  </NavLink>
            )
        })}
      </div>
    )
  }
}

export default CatIndex