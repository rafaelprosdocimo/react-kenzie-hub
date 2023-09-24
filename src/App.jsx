import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from "react-router-dom";
import { RoutesMain } from './routes';
import { Global } from './styles/GlobalStyle';
import { ToastContainer, toast } from "react-toastify";
export const  App=  () => {

  return (
    <>

      <Global/>
      <RoutesMain/>

    </>
  )
}

