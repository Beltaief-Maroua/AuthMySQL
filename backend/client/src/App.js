import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class App extends Component {
  constructor(){
    super()
    this.state={
      email:"",
      password:""
    }
  }
  handellchange(e){
    this.setState({[e.target.name]:e.target.value})
  }
  login(){
    const {email,password}=this.state
    axios.post("http://localhost:3002/api/login",{
email:email,
password:password
    }).then((res)=>{
      console.log(res)
    })
  }
  logout(){
    axios.get("http://localhost:3002/api/logout").then((res)=>{
      console.log(res)
    })
  }
  createuser(){
    const {email,password}=this.state

    axios.post('http://localhost:3002/api/createUser',{
      email:email,
      password:password
    }).then((res)=>{
      console.log(res)
    })
  }
  render() {
    return (
      <div className="App">
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e)=>this.handellchange(e)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password"onChange={(e)=>this.handellchange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={()=>this.login()} >
          login
        </Button>
        <Button variant="primary" onClick={()=>this.logout()} >
          logout
        </Button>
        <Button variant="primary" onClick={()=>this.createuser()} >
          createuser
        </Button>
      </div>
    );
  }
}

