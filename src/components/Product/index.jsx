import React from 'react'

import './index.scss'

import { items } from './items'


const Product = ({ product }) => {
  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__wrapper'>
          <img src={items[product].img} alt='' className='product__img'/>
          <div className='product__info'>
            {items[product].info}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
