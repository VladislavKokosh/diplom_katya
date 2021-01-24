import React, { useState } from 'react'

import './index.scss'

import Item from './Item'

import { services } from './services'


const Services = () => {
  const [activeItem, setActiveItem] = useState(0)

  return (
    <div className='services'>
      <div className='services__container'>
        <div className='services__wrapper'>
          <div className="services__menu">
            {
              services.map((item, id) =>
                <Item
                  title={item.title}
                  key={id}
                  isActive={activeItem === id}
                  click={() => setActiveItem(id)}
                />
              )
            }
          </div>

          <div className='services__info'>
            {services[activeItem].info}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
