import React, { Component,useCallback,useState } from 'react'
import  { Redirect } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import axios from "axios";

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
        fetch('http://localhost:8000/api/v1/user/create', {
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
              console.log(json)
              localStorage.setItem('username', names)
              localStorage.setItem('token', json['accessToken'])
            })
        // navigation("/")
    }) 


    return (
    <div>
    <h1>Signup</h1>

        <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={HandleUsernameChange} required></input>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={HandlePasswordChange} required></input>
        </div>
        <button onClick={HandleSubmit}>Submit</button>

    </div>
    )
}




export default Login