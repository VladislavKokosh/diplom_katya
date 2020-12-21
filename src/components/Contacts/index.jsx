import React from 'react'

import './index.scss'
import { LOCATION, PHONE, MAIL } from '../../styles/images'

import WorkersContacts from './WorkersContacts'
import MyMap from './Map'

import { workersContact } from './data'

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts__container'>
        <div className='contacts__wrapper'>
            <div className='contacts__main'>
              <div className='contacts__main-location'>
                <img
                  src={LOCATION}
                  alt='icon'
                  className='contacts__main-location-icon'
                />
                <div className='contacts__main-location-content'>
                  <span className='contacts__main-location-content-title'>
                    Где находимся?
                  </span>
                  <div className='contacts__main-location-content-text'>
                    Республика Беларусь, 225230, Брестская область, Березовский район,
                    аг. Первомайская, ул. Железнодорожная, 6
                  </div>
                </div>
              </div>
              <div className='contacts__main-bottom'>
                <div className='contacts__main-phone'>
                  <img
                    src={PHONE}
                    alt='icon'
                    className='contacts__main-phone-icon'
                  />
                  <div className='contacts__main-phone-content'>
                      <span className='contacts__main-phone-content-title'>
                        Куда звонить?
                      </span>
                      <div className='contacts__main-phone-content-text'>
                        8 (01643) 38-0-32
                      </div>
                    </div>
                </div>
                <div className='contacts__main-mail'>
                  <img
                    src={MAIL}
                    alt='icon'
                    className='contacts__main-mail-icon'
                  />
                  <div className='contacts__main-mail-content'>
                      <span className='contacts__main-mail-content-title'>
                        Написать нам:
                      </span>
                      <div className='contacts__main-mail-content-text'>
                        bereza_kkz@tut.by, kombikorm@bereza-kkz.by
                      </div>
                    </div>
                </div>
              </div>
            </div>
          <div className='contacts__container'>
            <WorkersContacts contacts={workersContact}/>
            <div>
              <div className='contacts__container-title'>
                Мы на карте:
              </div>
              <MyMap/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
