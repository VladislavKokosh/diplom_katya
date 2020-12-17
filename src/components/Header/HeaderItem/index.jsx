import React from 'react'
import { useHistory } from 'react-router-dom'

import './index.scss'


const HeaderItem = ({ title, link }) => {
  const history = useHistory()

  return (
    <span
      className='header-item'
      onClick={() => history.push(link)}
    >
      {title}
    </span>
  )
}

export default HeaderItem
