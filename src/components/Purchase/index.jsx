import React from 'react'

import Slider from './Slider'

import './index.scss'

import { items } from './items'


const Purchase = () => {

  return (
    <div className='purchase'>
      <div className='purchase__container'>
        <div className='purchase__wrapper'>
          <div className ='purchase__text'>
            ОАО «Березовский комбикормовый завод» закупает:
            <ul>
              {
                items.map((item, index) => {
                  return <li>{item}</li>
                })
              }
            </ul>
            Условия поставки: железнодорожным или автотранспортом на условиях ФСО и ФСН.
            Объем поставок: по согласованию сторон.
            Порядок расчетов: денежными средствами, возможен взаиморасчет встречной поставкой продукции. 
            Закупочная цена: индивидуальное рассмотрение предложений в зависимости от объемов и условий поставки.
          </div>
          <div className ='purchase__slider'>
              <Slider></Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase