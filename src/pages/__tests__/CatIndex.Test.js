// Imports React into our test file.
import React from 'react' 

// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 

 // Imports in the component we are going to be testing. 
import CatIndex from '../CatIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component. 
Enzyme.configure({ adapter: new Adapter() }) 
describe('When app renders', () =>{
    it('displays a Header,  Footer and CatIndex', () => {
    const renderedApp = shallow(<App/>)
    const renderedHeader = renderedApp.find('Header')

    const renderedFooter = renderedApp.find('Footer')

    const renderedCatIndex = renderedApp.find('CatIndex')

    expect(renderedHeader.length).toEqual(1)

    expect(renderedFooter.length).toEqual(1)
    
    expect(renderedCatIndex.length).toEqual(1)
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

