import React from 'react'

import './index.scss'


const Item = ({ title, click, isActive }) => {
  return (
    <div
      className={`item ${isActive ? 'item__active' : ''}`}
      onClick={click}
    >
      {title}
    </div>
  )
}

export default Item
