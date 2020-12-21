import React from 'react'

import './index.scss'

import Table from '../Table'

import { text, oilQuality, cakeQuality } from './data'


const Export = () => {
  return(
    <div className='export'>
      <div className='export__container'>
        <div className='export__wrapper'>
          <div className='export__text'>
            {
              text.map((item, index) => <div key={index} className='export__text-paragraph'>{item.text}</div>)
            }
          </div>
          <Table title='Изменение добычи ресурсов по годам' content={oilQuality}/>
          <div>Расовый жмых получается при прессовании на прессах предварительно обработанных семян рапса при извлечении из них масла.</div>
          <Table title='Показатели качества жмыха рапсового' content={cakeQuality}/>
        </div>
      </div>
    </div>
  )
}

export default Export
