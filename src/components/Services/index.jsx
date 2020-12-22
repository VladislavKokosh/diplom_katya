import React from 'react'

import './index.scss'

import List from './List'

import { services, advantages, prices } from './data'


const Services = () => {
  return(
    <div className='services'>
      <div className='services__container'>
        <div className='services__wrapper'>
          <div className='services__corn'>
            <span className='services__corn_title'>Хранение зерна</span>
            <div className='services__corn_text'>
              ОАО «Березовский комбикормовый завод» оказывает услуги по хранению
              <span className='services__corn_text-bold'> шрота соевого</span> и 
              <span className='services__corn_text-bold'> шрота подсолнечного. </span>
              ОАО «Березовский  комбикормовый завод» оказывает услуги по организации комплекса мероприятий, способствующих сохранению запасов зерна:
              <List list={services}/>
              ОАО «Березовский комбикормовый завод» гарантирует правильную организацию хранения зерна,  позволяя полностью сохранить его качество и свести к минимуму потери. На сохранность зерна влияют его влажность, температура и связанная с ними интенсивность биохимических процессов, минимизация развития в массе продукта микроорганизмов и вредителей.
            </div>
          </div>
          <div className='services__tolling'>
            <span className='services__tolling_title'>Давальческие услуги</span>
            <div className='services__tolling_text'>
              ОАО «Березовский комбикормовый завод» предлагает услуги по производству комбикорма, масла рапсового, жмыха рапсового  на условиях договора о переработке давальческого сырья.
              На основании договора о переработке давальческого сырья, заказчик предоставляет заводу зерно, из которого тот производит комбикорм. В качестве оплаты стоимости работ заказчик оплачивает заводу денежную сумму установленную договором.
              Основные преимущества давальческой переработки сырья:
              <List list={advantages}/>
            </div>
          </div>
          <div className='services__sentence'>
            <span className='services__sentence_title'>ПУ «Ольшевский» предлагает:</span>
            <div className='services__sentence_text'>
              ПУ «Ольшевский», ОАО «Березовский комбикормовый завод»
              принимает заявки на утят суточных.
              С 1-го апреля будет производиться реализация утят населению.
            </div>
            <List list={prices}/>
            <span className='services__sentence_mark'>Цены указаны в белорусских рублях.</span>
            <div className='services__sentence_phone'>
              тел: <a href='tel:8(01643) 45397'>8(01643) 45397</a>, <a href='tel:8(01643) 45493'>8(01643) 45493</a>
            </div>
          </div>
          <div className='services__manure'>
            ПУ «Ольшевский»,
            ОАО «Березовский комбикормовый завод»
            Реализует навоз по цене 6,78 рублей за тонну с учетом погрузки
            <div className='services__manure_phone'>
              тел: <a href='tel:8(01643) 45053'>8(01643) 45053</a>, <a href='tel:8(01643) 45493'>8(01643) 45493</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
