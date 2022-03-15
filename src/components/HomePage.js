import { render } from '@testing-library/react'
import React, { Component,useCallback,useState,useEffect } from 'react'
import  { Redirect } from 'react-router-dom'
import {useNavigate} from "react-router-dom"

class HomePage extends Component{
  componentDidMount() {
    const reloadCount = sessionStorage.getItem('reloadCount');
    if(reloadCount < 2) {
      sessionStorage.setItem('reloadCount', String(reloadCount + 1));
      window.location.reload();
    } else {
      sessionStorage.removeItem('reloadCount');
    }
  }

  render()
  {
    if(localStorage.getItem('token')==='true'){
    let username=localStorage.getItem('username');
    return (
    <div>
        <h1>{username}</h1>
    </div>
    )
    }
    else{
      return <h1>Not logged in!</h1>
      
    }
  }
}

export default HomePage