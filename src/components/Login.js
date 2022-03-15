import React, { Component,useCallback,useState } from 'react'
import  { Redirect } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

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
        names=names.replace(/"/g,"")
        localStorage.setItem('username', names);
        localStorage.setItem('token', true);
        navigation("/")
    }) 


    return (
    <div>
    <h1>Please Log In</h1>

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