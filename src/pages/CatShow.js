import React, { Component } from 'react'
import { Button, Card, CardTitle, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class CatShow extends Component {
  render() {
    let { cat } = this.props
    return (
      <div className="main-body">
        { cat &&
            <Card body className="card-show">
              <CardTitle tag="h5">Hi, my name is { cat.name }</CardTitle>
              <CardText>I am { cat.age }</CardText>
              <CardText>I enjoy { cat.enjoys }.</CardText>
              <NavLink to={`/catedit/${cat.id}`}>
                <Button>Edit Cat Profile</Button>
              </NavLink>
              <br />
              <NavLink to="/catindex">
                <Button onClick={ () => this.props.deleteCat(cat.id) }>
                  Delete Cat Profile
                </Button>
              </NavLink>
            </Card>
        }
      </div>
    )
  }
}
export default CatShow
















// class CatShow extends Component {

//   render() {
//       console.log(this.props.cat)
//     let {cat} = this.props
//     return(
//       <>
//         <h1>This is a CatShow</h1>
//         <p>{ cat.name }</p>
//         <p>{ cat.age }</p>
//         <p>{ cat.enjoys }</p>
//       </>
//     )
//   }
// }

