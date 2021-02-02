import React from 'react'
import { useHistory } from 'react-router-dom'

import './index.scss'


const Card = ({ title, link, img }) => {
  const history = useHistory()
  return (
    <div className='card'>
      <div
        className='card__container'
        onClick={() => history.push(`/production/${link}`)}
      >
        <div className='card__wrapper'>
          <img src={img} alt={title} className='card__img'/>

          <div className='card__title'>
            {title}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
