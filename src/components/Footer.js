import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
        <Nav>
          <NavItem>
            <NavLink to="/">&copy; Vivean and Jonathan </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catindex">Here  are the Cats</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/catnew">Add a Cat</NavLink>
          </NavItem>
        </Nav>
      </footer>
    )
  }
}
export default Footer
