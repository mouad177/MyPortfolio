import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  return (
    <>
<BrowserRouter basename='/MyPortfolio/'>

<Routes>




<Route index element={<Home/>} />

<Route exact path='/Home' element={<Home/>} />
<Route path='/Home' element={<Home/>} />


</Routes>


</BrowserRouter>
    </>
  )
}

export default App
