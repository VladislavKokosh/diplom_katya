import React from 'react'

import './index.scss'

import { PURCHASE } from '../../styles/images'
import { list, conditions } from './data'


const Purchase = () => {

  return (
    <div className='purchase'>
      <div className='purchase__container'>
        <div className='purchase__wrapper'>
          <div className ='purchase__text'>
            <span className ='purchase__text-title'>ОАО «Березовский комбикормовый завод» закупает:</span>
            <ul className ='purchase__text-list'>
              {
                list.map((item, index) => {
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
                {
                  conditions.map((item, index) => {
                    return(
                      <div className ='purchase__conditions-content-text-list' key={index}>
                        <b>{item.name}</b> {item.content}<br/>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Purchase
