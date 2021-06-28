
import App from './App'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './pages/Home'

Enzyme.configure({ adapter: new Adapter()})


describe("When App renders", () => {
  it("displays a Header and Footer", () => {
    //arrange
    const renderedApp = shallow(<App/>)

    //act
    const renderedHeader = renderedApp.find("Header")
    const renderedFooter = renderedApp.find("Footer")
    //assert
    expect(renderedHeader.length).toEqual(1)
    expect(renderedFooter.length).toEqual(1)
  })

  it('provides a route "/" to the home component', () => {
    //Arrange
    const renderedApp = shallow(<App/>)

    //Act
    const renderedHomeRoute = renderedApp.find('[path="/"]')
    console.log("RENDERED HOME ROUTE IS RIGHT HERE", renderedHomeRoute.debug())
    console.log("RENDERED HOME ROUTE PROPS IS RIGHT HERE", renderedHomeRoute.props())
    //Assert
    expect(renderedHomeRoute.length).toEqual(1)
    // does this exist yes/no == 1 / 0
    expect(renderedHomeRoute.props().component).toEqual(Home)
  })
})