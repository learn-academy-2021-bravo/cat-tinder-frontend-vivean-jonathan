import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand } from 'reactstrap'
import { NavLink as PathLink} from 'react-router-dom'
import CatLogo from '../assets/cat-tinder.jpg'



const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <div >
      <Navbar color="faded" light>
         <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <PathLink to="/">
          <img src={ CatLogo } alt="Cat Tinder logo" className="cat-logo" />
        </PathLink>
        <NavbarToggler onClick={ toggleNavbar } className="mr-2" />
        <Collapse isOpen={ !collapsed } navbar>
          <Nav navbar>
            <NavItem>
              <PathLink to="/catindex">Here are the cats</PathLink>
            </NavItem>
            <NavItem>
              <PathLink to="/catnew">Add a Cat</PathLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
export default Header