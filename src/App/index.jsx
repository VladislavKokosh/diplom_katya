import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'

import Routes from '../Routes/index'
import Header from '../components/Header'
import Title from '../components/Title'


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Title value='Главная'/>
        <Routes/>
      </div>
    </Router>
  )
}

export default App
