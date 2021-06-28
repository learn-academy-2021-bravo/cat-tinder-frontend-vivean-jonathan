import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'


Enzyme.configure({ adapter: new Adapter()})

describe("When Header Loads...", () => {
  let header
    beforeEach(()=>{
        header = shallow(<Header/>)
    })
  it('displays a hamburger icon and the menu is collapsed', () => {
    //Arrange


    //Act
    const hamburger = header.find('NavbarToggler')

    //Assert
    expect(hamburger.length).toEqual(1)

    //Act
    const collapsedComponent = header.find('Collapse')
    console.log("COLLAPSED COMPONENT", collapsedComponent.debug())

    //Assert
    expect(collapsedComponent.props().isOpen).toEqual(false)
  })

  it("expands the menu when hamburger Icon is clicked", () => {
    //Arrange


    const hamburger = header.find('NavbarToggler')
    //Act
    hamburger.simulate('click')
    const collapsedComponent = header.find('Collapse')

    //assert
    expect(collapsedComponent.props().isOpen).toEqual(true)
  })
})