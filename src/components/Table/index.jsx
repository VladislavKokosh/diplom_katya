import React from 'react'

const Table = ({title, content}) => {
  return(
    <table>
      <caption>{title}</caption>
        {
          content.map((item, index) => (
            <tr key={index}>
              <td>{item.сolumnOne}</td>
              <td>{item.columnTwo}</td>
            </tr>
          ))
        }
      </table>
  )
}

export default Table
