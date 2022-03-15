import React, { Component,useCallback,useState,useEffect } from 'react'
import  { Redirect } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

function Signout(){
    const navigation = useNavigate();
    useEffect(() => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        navigation("/")
      });
    
    return (
    <div>
    <h1>Signed Out!</h1>
    </div>
    )
}




export default Signout