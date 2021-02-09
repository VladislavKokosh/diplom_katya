import React from 'react'

import './index.scss'
import { LOGO_FOOTER } from '../../styles/images'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__wrapper'>
          <img src={LOGO_FOOTER} alt='' className='footer__logo'/>

          <div className='footer__info'>
            +375 (1643) 38-2-88 | +375 (1643) 38-0-32 | E-mail: BEREZA_KKZ@TUT.BY
            РЕСПУБЛИКА БЕЛАРУСЬ, 225230, БРЕСТСКАЯ ОБЛАСТЬ, БЕРЕЗОВСКИЙ РАЙОН,
            АГ.ПЕРВОМАЙСКАЯ, УЛ. ЖЕЛЕЗНОДОРОЖНАЯ, 6
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
