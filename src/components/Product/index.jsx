import React, { useState } from 'react'

import Table from '../Table'
import './index.scss'
import { items } from './items'


const Product = ({ product }) => {
  const [active, setActive] = useState(0)
  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__wrapper'>
          <div className='product__header'>
            <img src={items[product].img} alt='' className='product__image'/>
            <div className='product__menu'>
              <div className ='product__menu-title'>ОАО «Березовский комбикормовый  завод предлагает:</div>
              <div className='product__menu-grade'>
                {items[product].grade.length > 1 ? items[product].grade.map((item, index) => (
                  <a 
                    key={index}
                    className={active === index ? 'product__menu-grade-item-active' : 'product__menu-grade-item'}
                    onClick={() => setActive(index)} 
                  >
                    <span>
                      {item.name}
                    </span>
                  </a>
                  )) : 
                  <div 
                    className='product__menu-grade-name'
                  >
                    {items[product].grade[active].name}
                  </div>
                }
              </div>
            </div>
          </div>
          <div className='product__content'>
            <div 
              className='product__content-info' 
              dangerouslySetInnerHTML={{__html : items[product].grade[active].infoOne}}
            />
            {items[product].grade[active].tableOne && 
              <Table 
                title={items[product].grade[active].titleOne ? items[product].grade[active].titleOne : ''} 
                content={items[product].grade[active].tableOne}
              />
            }
            <div 
              className='product__content-info'
              dangerouslySetInnerHTML={{__html : items[product].grade[active].infoTwo}}
            />    
            {items[product].grade[active].tableTwo && 
              <Table 
                title={items[product].grade[active].titleTwo ? items[product].grade[active].titleTwo : ''} 
                content={items[product].grade[active].tableTwo}
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
