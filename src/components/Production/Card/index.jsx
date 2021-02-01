import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

import './index.scss'


const Card = ({ title, link, img }) => {
  const history = useHistory()
  const [focus, setFocus] = useState(false)
  console.log(focus)
  return (
    <div 
      className={focus ? 'card__focus' : 'card'} 
      onMouseOver={() => setFocus(true)} 
      onMouseOut ={() => setFocus(false)}
    >
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
