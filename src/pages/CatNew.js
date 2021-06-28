import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
    constructor(props){
    super(props)
    this.state ={
        form: {
        name: "",
        age: "",
        enjoys: ""
        }
      }
    }

    handelChange = (e) =>{
        console.log(e.target.value)
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }
    handelSubmit = () =>{
        this.props.createCat(this.state.form)
            this.setStae({submited: true})
    }

  render() {
    return(
      <>
        <h1>This is a CatNew</h1>
        <form>
            <FormGroup>
                <Label for="name">Cat Name</Label>
                <Input 
                type="text" 
                name="name"  
                onChange={this.handelChange}
                value={this.state.form.name}
                    />
            </FormGroup>
            <FormGroup>
                <Label for="age">Cat Age</Label>
                <Input 
                type="text" 
                name="age" 
                 onChange={this.handelChange}
                value={this.state.form.name}
                />
            </FormGroup>
            <FormGroup>
                <Label for="enjoys">Cat Enjoys</Label>
                <Input type="text" name="enjoys" />
            </FormGroup>
            <button name="submit onClick={this.handelSubmit}">
            Submit
            </button>
    </form>
    // {this.state.submited && <Redirect to="/catindex"/>}
      </>
    )
  }
}

export default CatNew