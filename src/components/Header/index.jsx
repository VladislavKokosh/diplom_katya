import React from 'react'
import { useHistory } from 'react-router-dom'

import './index.scss'
import { LOGO_HEADER } from '../../styles/images'

import HeaderItem from './HeaderItem'

import { items } from './items'


const Header = () => {
  const history = useHistory()

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__wrapper'>
          <img
            src={LOGO_HEADER}
            alt='logo'
            className='header__logo'
            onClick={() => history.push('/')}
          />

          {
            items.map(elem => (
              <HeaderItem title={elem.title} key={elem.title}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Header
