import React from 'react'

import './index.scss'

import { PURCHASE } from '../../styles/images'
import { items } from './items'


const Purchase = () => {

  return (
    <div className='purchase'>
      <div className='purchase__container'>
        <div className='purchase__wrapper'>
          <div className ='purchase__text'>
            <span className ='purchase__text-title'>ОАО «Березовский комбикормовый завод» закупает:</span>
            <ul className ='purchase__text-ul'>
              {
                items.map((item, index) => {
                  return <li key={index}>{item}</li>
                })
              }
            </ul>
          </div>
          <div className ='purchase__conditions'>
            <span className ='purchase__conditions-title'>Условия</span>
            <img
                src={PURCHASE}
                alt='logo'
                className='purchase__conditions-image'
              /> 
            <div className ='purchase__conditions-content'>
              <div className ='purchase__conditions-content-text'>
                <b>Условия поставки:</b> железнодорожным или автотранспортом на условиях ФСО и ФСН.<br/>
                <b>Объем поставок:</b> по согласованию сторон.<br/>
                <b>Порядок расчетов:</b> денежными средствами, возможен взаиморасчет встречной поставкой продукции.<br/>
                <b>Закупочная цена:</b> индивидуальное рассмотрение предложений в зависимости от объемов и условий поставки.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase