import React, { Component } from 'react';
import {browserHistory} from 'react-router';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { push } from 'react-router-redux';




class Login extends Component {
  constructor () {
    super()
    this.authCheck=this.authCheck.bind(this);
  }
  
  authCheck(){
    const uname = document.getElementById("uname").value;
    const psw = document.getElementById("psw").value;
    if(uname === "guest" && psw === "123456"){
      const path0 = `/home/dashboard`;
      browserHistory.push(path0);
      // console.log("12345");
      // ...
      // put(push(path0));
      // this.context.router.push(path0);

    }else{
      alert("Invalid Username or Password!")
      
    }
    

  }



  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-2">
                <div className="card-block">
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <div className="input-group mb-1">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input id="uname" type="text" className="form-control" placeholder="Username:guest"/>
                  </div>
                  <div className="input-group mb-2">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input id="psw" type="password" className="form-control" placeholder="Password:123456"/>
                  </div>
                  <div className="row">
                    <div className="col-6">
                    
                      <button type="button" className="btn btn-primary px-2" onClick={this.authCheck}>Login</button>
                    </div>
                    <div className="col-6 text-right">
                      <button type="button" className="btn btn-link px-0">Forgot password?</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-inverse card-primary py-3 hidden-md-down" style={{ width: 44 + '%' }}>
                <div className="card-block text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button type="button" className="btn btn-primary active mt-1">Register Now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
