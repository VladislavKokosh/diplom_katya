import React from 'react'

import './index.scss'


const HeaderItem = ({ title }) => {
  return (
    <span className='header-item'>
      {title}
    </span>
  )
}

export default HeaderItem
