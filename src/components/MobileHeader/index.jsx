import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { LOGO_HEADER, MENU_BUTTON, LOGO_MOBILE_HEADER, MENU_BUTTON_CLOSE } from '../../styles/images'
import { items } from '../Header/items'
import './index.scss'

import HeaderItem from './HeaderItem'

const MobileHeader = () => {
  const history = useHistory()
  const [visibility, setVisibility] = useState('translate3d(0,-100%,0)')
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
            <div
              className='mobile__header__menu-header'
            >
              <img
                src={MENU_BUTTON_CLOSE}
                alt='button_back'
                className='mobile__header__menu-back'
                onClick={() => setVisibility('translate3d(0,-100%,0)')}
              />
              <img
                className='mobile__header__menu-logo'
                src={LOGO_MOBILE_HEADER}
                alt='logo'
                onClick={() => history.push('/')}
              />
            </div>
            <div
              className='mobile__header__menu-items'
              onClick={() => setVisibility('translate3d(0,-100%,0)')}
            >
              {
                items.map(elem => (
                  <HeaderItem
                    link={elem.link}
                    title={elem.title}
                    key={elem.title}
                    onChange={() => setVisibility('translate3d(0,-100%,0)')}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
