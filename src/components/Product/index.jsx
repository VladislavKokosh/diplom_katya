import React from 'react'

import './index.scss'

import { items } from './items'


const Product = ({ product }) => {
  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__wrapper'>
          <div className='product__img'>
            <img src={items[product].img} alt='' className='product__img-image'/>
          </div>
          <div className ='product__title'>ОАО «Березовский комбикормовый  завод предлагает:</div>
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
