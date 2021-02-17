import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'

import Routes from '../Routes/index'
import MainHeader from '../components/MainHeader'
import Footer from '../components/Footer'


const App = () => {
  return (
    <Router>
      <div className="app">
        <MainHeader/>
        <Routes/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
