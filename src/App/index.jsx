import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'

import Routes from '../Routes/index'
import Header from '../components/Header'


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Routes/>
      </div>
    </Router>
  )
}

export default App
