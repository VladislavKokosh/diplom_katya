import React from 'react'

import './index.scss'

import Card from './Card'

import { items } from './items'


const Production = () => {
  return (
    <div className='production'>
      <div className='production__container'>
        <div className='production__wrapper'>
          <div className='production__cards'>
            {
              items.map((item, id) =>
                <Card img={item.img} link={item.link} title={item.title} key={id}/>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Production
