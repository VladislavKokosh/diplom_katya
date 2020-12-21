import React from 'react'

const ContentText = ({ conditions }) => {
  return(
    <div className ='purchase__conditions-content-text'>
      {
        conditions.map((item, index) => (
          <div key={index}>
            <span className='purchase__conditions-content-text-bold'>
              {item.name}
            </span> 
            {item.content}
          </div>
        ))
      }
    </div>
  )
}

export default ContentText
