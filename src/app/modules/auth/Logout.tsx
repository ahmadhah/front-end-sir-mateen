/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable */
import React, {useEffect} from 'react'
import { render } from 'react-dom';
// import {useDispatch} from 'react-redux'
import {Redirect, Switch, useHistory} from 'react-router-dom'
// import * as auth from './redux/AuthRedux'

export function Logout()  {
  // const dispatch = useDispatch()
  // useEffect(() => {
  // }, [])
  
  localStorage.removeItem("authToken")
  localStorage.removeItem("role")
  setTimeout(()=>{
    window.location.reload()
  }, 2000)
  // const history = useHistory()
  // history.push("/auth/login")
  return (
  <Switch>
    <Redirect to='/auth/login' />
  </Switch>
   
  )
}
