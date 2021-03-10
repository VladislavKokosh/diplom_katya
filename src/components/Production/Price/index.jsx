import React from 'react'

import './index.scss'

import { DOWNLOADBUTTON } from '../../../styles/images'

const Price = () => {
  return(
    <div className='price'>
      <div className='price__container'>
        <div className='price__wrapper'>
          <div className='price__text'>
            <img
              className='price__text-image' 
              src={DOWNLOADBUTTON} 
              alt='' 
            />
            <div className='price__text-value'>
              <span className='price__text-value-title'>Cкачать прайс-лист</span>
              <p className='price__text-value-paragraph'>Скачать оптовый прайс-лист на комбикорм от 3.02.2021</p>
            </div>
          </div>
          <a href="http://bereza-kkz.by/wp-content/uploads/2021/02/Kombikorm030221.pdf" className='price__button'><span>Скачать</span></a>
        </div>
      </div>
    </div>
  )
}

export default Price