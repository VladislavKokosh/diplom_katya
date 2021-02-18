import React from 'react'

const Table = ({title, content}) => {
  return(
    <table>
      {title && <caption>{title}</caption>}
        <tbody>
          {
              content.map((item, index) => (
                <tr key={index}>
                  <td>{item?.сolumnOne}</td>
                  <td>{item?.columnTwo}</td>
                  {item.columnTree && <td>{item.columnTree}</td>}
                </tr>
              ))
            }
        </tbody>
      </table>
  )
}

export default Table
