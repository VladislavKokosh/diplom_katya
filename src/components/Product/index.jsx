import React, { useState } from 'react'

import Table from '../Table'
import './index.scss'

import { items } from './items'


const Product = ({ product }) => {
  const [active, setActive] = useState(0)
  console.log(items[product].grade[active].tableOne);
  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__wrapper'>
          <div className='product__img'>
            <img src={items[product].img} alt='' className='product__img-image'/>
          </div>
          <div className ='product__title'>ОАО «Березовский комбикормовый  завод предлагает:</div>
          <div className='product__grade'>
            {items[product].grade.map((item, index) => (
              <span 
                className={active === index ? 'product__grade-item-active' : 'product__grade-item'}
                key={index}
                onClick={() => setActive(index)}
              >
                {item.name}
              </span>
            ))}
          </div>
          <div>{items[product].grade[active].infoOne}</div>
          <Table title='123' content={items[product].grade[active].tableOne}></Table>
          <div>{items[product].grade[active].infoTwo}</div>
          <Table title='123' content={items[product].grade[active].tableTwo}></Table>
          <div className ='product__name'>{items[product].name}</div>
          <div className='product__info'>
            {items[product].info}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
