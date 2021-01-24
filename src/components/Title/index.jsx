import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './index.scss'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'

import { links } from './links'


const Title = ({ value }) => {
  const [breadcrums, setBreadcrums] = useState([])
  const location = useLocation()

  useEffect(() => {
    let pathnames = location.pathname.split('/')
    const links = []
    let link= ''
    let value = ''

    pathnames.forEach((element, index) => {
      if (element === "" && index !== pathnames.length - 1) {
        link = '/'
        value = '/main'
      } else {
        if (index < pathnames.length - 1) {
          link += `${element}/`
        } else {
          link += `${element}`
        };
        value = `/${element}`
      }
      links.push({link, value})
    })

    setBreadcrums(links)
  }, [location.pathname])

  console.log('breadcrums', breadcrums)
  console.log(links['/zhmyh_podsolnechny'])

  return (
    <div className='title'>
      <div className='title__container'>
        <div className='title__wrapper'>
          <span className='title__page-title'>
            {value}
          </span>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            {
              !!breadcrums?.length &&
              breadcrums.map((elem, index) => {
                if (index < breadcrums.length - 1) {
                  return (
                    <Link
                      to={
                        elem.link[elem.link.length - 1] === '/' &&
                        elem.link.substring(0, elem.link.length - 1)
                      }
                      key={index}
                    >
                      {links[elem.value]}
                    </Link>
                  )
                } else {
                  return (
                    <span className='title__current-link' key={index}>
                      {links[elem.value]}
                    </span>
                  )
                }
              })
            }
          </Breadcrumbs>
        </div>
      </div>
    </div>
  )
}

export default Title
