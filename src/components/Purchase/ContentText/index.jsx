import React from 'react'

const ContentText = ({ conditions }) => {

  return(
    <div className ='purchase__conditions-content-text'>
      {
        conditions.map((item, index) => {
          return(
            <div key={index}>
              <b>{item.name}</b> {item.content}<br/>
            </div>
          )
        })
      }
    </div>
  )
}

export default ContentText
