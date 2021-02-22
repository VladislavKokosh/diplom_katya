import React from 'react'

import './index.scss'
import { LOGO_FOOTER } from '../../styles/images'


const Footer = () => {
  let date = new Date()
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__wrapper'>
          <img src={LOGO_FOOTER} alt='' className='footer__logo'/>

          <div className='footer__info'>
            <a 
              href='tel:+375 (1643) 38-2-88'
              className='footer__info-item'
            > 
              +375 (1643) 38-2-88
            </a>| 
            <a 
              href='tel:+375 (1643) 38-0-32'
              className='footer__info-item'
            >
              +375 (1643) 38-0-32
            </a>| 
            <a 
              href='mailto: BEREZA_KKZ@TUT.BY'
              className='footer__info-item'
            >
              BEREZA_KKZ@TUT.BY 
            </a>
            <span style={{display:'block'}}>
              РЕСПУБЛИКА БЕЛАРУСЬ, 225230, БРЕСТСКАЯ ОБЛАСТЬ, БЕРЕЗОВСКИЙ РАЙОН,
              АГ.ПЕРВОМАЙСКАЯ, УЛ. ЖЕЛЕЗНОДОРОЖНАЯ, 6
            </span>
            <span className='footer__copy'>
              &copy; {date.getFullYear()}Якушевич Екатерина
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
