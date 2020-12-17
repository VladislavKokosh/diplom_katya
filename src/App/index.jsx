import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'

import Routes from '../Routes'


const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes/>
      </div>
    </Router>
  )
}

export default App
