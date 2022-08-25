import React, { Component } from 'react'
import Test from './Test';
import './Style.css'
import TestScroll from './TestScroll';
export default class Login extends Component
{
    constructor(props) {
    super(props)
    this.state = {
        username:"",
        password:"",
        SigninDetails:'',
        error:''
    }
    }
    allinone=(event)=>
    {
    this.setState({[event.target.name]:event.target.value})
    console.log(event.target.value)
    }
    handleLogin=(event)=>
    {
    console.log(this.state)
    if(this.state.username==="user@email.com" && this.state.password==="password")
    {
        this.setState({SigninDetails:"success"})
    }else{
        this.setState({SigninDetails:"Failure"})
    }
    }
    render() {
    return (
    <div>
    {this.state.SigninDetails==="success"?
        <div>
            {console.log(this.state.SigninDetails)}
            
            <TestScroll username={this.state.username}/>
        </div>
    :null
    }
    {
    this.state.SigninDetails==="Failure"
    ?
    <div>
        {console.log(this.state.SigninDetails)}
        <div class="alert alert-danger" role="alert" id="alertbox">  
            <h1 class="alert-heading">Invalid Username or Password</h1>
            <hr/>
            <p>Please, try again with correct credentials!</p>
        </div>
        <form id="formbox">
            <div className="form-group" >
            <h1>Login</h1>
            <label>Username (Preferrably Your E-Mail Id):</label>

            <input style={{width:'40%'}} type="text" className="form-control" id="username" placeholder="Enter Name"
            name="username" onChange={this.allinone}/>
            </div>
            <div className="form-group">
            <label>Password:</label>
            <input style={{width:'40%'}} type="password" className="form-control" id="password" placeholder="Enter password"
            name="password" onChange={this.allinone} />
            </div>
            <button type="button" className="btn btn-primary"
            onClick={this.handleLogin}>Login</button>
        </form>
    </div>
    :null
    }
    {
    this.state.SigninDetails.length===0?
    <div>
        {console.log("len"+this.state.SigninDetails.length)}
        <form id="formbox">
            <div className="form-group">
            <h1>Login</h1>
                <label>Username (Preferrably Your E-Mail Id):</label>
                <input style={{width:'40%'}} type="text" className="form-control" id="username" placeholder="Enter Name"
                name="username" onChange={this.allinone}/>
                </div>
                <div className="form-group">
                <label>Password:</label>
                <input style={{width:'40%'}} type="password" className="form-control" id="password" placeholder="Enter password"
                name="password" onChange={this.allinone} />
            </div>
            <button type="button" className="btn btn-primary"
        onClick={this.handleLogin}>Login</button>
        </form>
    </div>
    :null
    }
    </div>
    )
    }
}