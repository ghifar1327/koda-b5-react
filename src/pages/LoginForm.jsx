import React, { useState } from 'react'
import Header from '../components/Header'
import InputHandler from '../components/InputHandler'

export default function LoginForm() {
    const [login, setLogin]= useState({})
    console.log(login)
  return (
    <>
    <Header title="Input form"/>
    <InputHandler setLogin={setLogin}/>
    </>
  )
}
