/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

const WorkersContacts = ({ contacts }) => {
  return(
    <div className='contacts__container_workers'>
      {
        contacts.map((item, index) => (
          <div className='contacts__container_workers-item' key={index}>
            <div className='contacts__container_workers-item-position'>
              {item.position}
            </div>
            <div className='contacts__container_workers-item-name'>
              {item.name}
            </div>
            <a
              className='contacts__container_workers-item-phone'
              href={'tel:'+item.phone}
            >
                {item.phone}
            </a>
            <a
              className='contacts__container_workers-item-mail'
              href={'mailto:'+item.mail}
            >
                {item.mail}
            </a>
          </div>
        ))
      }
    </div>
  )
}

export default WorkersContacts
