import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'

import Routes from '../Routes/index'
import Header from '../components/Header'
import Footer from '../components/Footer'


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes/>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
