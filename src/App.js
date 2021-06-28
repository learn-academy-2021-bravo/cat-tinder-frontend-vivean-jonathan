import React, { Component } from 'react';
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import NotFound from './pages/NotFound'
import mockCats from './mockCats.js'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'




class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        cats: []
    }
  }
    componentDidMount(){
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(catsArray => this.setState({ cats: catsArray }))
    .catch(errors => console.log("Cat read fetch errors:", errors))
  }


  createCat = (newcat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newcat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      } else {
        return response.json()
      }
    })
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat create fetch errors:", errors))
  }

  render() { 
    console.log(this.state.cats)
    return ( 
     
       
      <Router>
         <Header/>
        <Switch>
          <Route exact path="/" component={ Home } />
    
          <Route path="/catindex" render={ (props) => <CatIndex cats={ this.state.cats } /> } />


           <Route path="/catshow/:id" render={( props ) => {
            let id = props.match.params.id
            console.log(typeof id)

            let cat = this.state.cats.find(cat => cat.id === +id)
            return <CatShow cat={ cat } />
          }} /> 


          <Route path="/catnew" render={ (props) => <CatNew createCat= {this.createCat}/> }/>

          <Route path="/catedit/:id" component={ CatEdit } />
          <Route component={ NotFound }/>
             <Route path="/catnew" component={ CatNew } />
          <Route path="/catedit/:id" component={ CatEdit } />
          <Route component={ NotFound } />

        </Switch>
        <Footer/>
      </Router>
    
     )
  }
}
 
export default App