import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'

Enzyme.configure({ adapter: new Adapter()})

describe('When Footer renders', () => {
  const footer = shallow(<Footer />)
  const footerNav = footer.find('Nav')

  it('has clickable links', () => {
    expect(footerNav.length).toEqual(1)
  })
})
