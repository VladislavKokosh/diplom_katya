import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { LOGO_HEADER, MENU_BUTTON } from '../../styles/images'
import './index.scss'

const MobileHeader = () => {
  const history = useHistory()
  const [visibility, setVisibility] = useState('translate3d(100%,0,0)')
  return (
    <div className='mobile__header'>
      <div className='mobile__header__container'>
        <div className='mobile__header__wrapper'>
          <img
            src={LOGO_HEADER}
            alt='logo'
            className='mobile__header__logo'
            onClick={() => history.push('/')}
          />
          <img
            src={MENU_BUTTON}
            alt='logo'
            className='mobile__header__menu-button'
            onClick={() => setVisibility('translate3d(0,0,0)')}
          />
          <div
            className='mobile__header__menu' 
            style={{transform: visibility}}
          >
            <span onClick={() => setVisibility('translate3d(100%,0,0)')}>Назад</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
