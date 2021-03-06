import React, { Component,useCallback,useState } from 'react'
import  { Redirect } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import axios from "axios";
import Form from 'react-bootstrap/Form';

function Login(){
    const navigation = useNavigate();
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');

    const HandleUsernameChange=useCallback((event)=>{
        setusername(event.target.value)
    }) 

    const HandlePasswordChange=useCallback((event)=>{
        setpassword(event.target.value)
    }) 
        
    const HandleSubmit=useCallback((event)=>{
        let names=JSON.stringify({username}).split(":")[1].split("}")[0]
        let pass=JSON.stringify({password}).split(":")[1].split("}")[0]
        names=names.replace(/"/g,"")
        pass=pass.replace(/"/g,"")

        let data={
            "name":names,
            "password":pass
        }
        fetch('http://localhost:8000/api/v1/user/login', {
            //mode: 'no-cors',
            method: 'POST',
            // credentials: 'same-origin',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(data)
          })
          .then(response => response.json())
          .then(json => {
              if(typeof json['accessToken']==='undefined'){
                alert("Invalid Credentials!")
                navigation("/login")
              }
              else{
              localStorage.setItem('username', names)
              localStorage.setItem('token', json['accessToken'])
              navigation("/")
              }
            })
        .catch((error) => {
                alert("Invalid Credentials!")
                navigation("/login")
        });

    }) 

    if(localStorage.getItem('token'))
    {
        return (<h1 className='login'>You are already Logged In!</h1>)
    }
    else
    {

        return (
            <div className={'login'}>
              <h1 className={'mb-3'}>Please Log In</h1>
                <div className={'mb-3'}>
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    onChange={HandleUsernameChange}
                    required
                  />
                </div>
                <div className={'mb-5'}>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={HandlePasswordChange}
                    required
                  />
                </div>
                <button className={'btn btn-primary'} onClick={HandleSubmit}>
                  Submit
                </button>
            </div>
        );
    }
}




export default Login