import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './index.scss'


const Card = ({ title, link, img }) => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  return (
    <div className='card'>
      <div
        className='card__container'
        onClick={() => history.push(`/production/${link}`)}
      >
        <div className='card__wrapper'>
          <img
            onLoad={() => setLoading(true)}
            src={loading ? img : '123.jpg'}
            alt={title}
            className='card__img'
          />

          <div className='card__title'>
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
