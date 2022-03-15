import { render } from '@testing-library/react'
import React, { Component,useCallback,useState,useEffect } from 'react'
import  { Redirect } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import ViewArticle from './ViewArticle';
class HomePage extends Component{
  articles=[
    {
      title: 'Food',
      text: ' Eat Food else you die!',
      author: 'tejas',
    },
    {
      title: 'Keyur is Cool',
      text: 'Ngl he is really cool.Message brought to you by yours truly keyur.',
      author: 'Keyur',
    },
    {
      title: 'Hello',
      text: 'I am Fat',
      author: 'Ojas',
    },


  ];
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
    if(localStorage.getItem('token')){
    let username=localStorage.getItem('username');
    return (
    <div>
        {/* <h1>{username}</h1> */}
        <div>
        {this.articles.map((article) => (
        <ViewArticle
          title={article.title}
          text={article.text}
          author={article.author}
        />
      ))}
      {/* {articles.map((article)=>{})} */}
    </div>
    </div>
    )
    }
    else{
      return (<h1 className='login'>You are Not Logged In!</h1>)
    }
  }
}

export default HomePage