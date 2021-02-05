import React from 'react'

import Title from '../components/Title'
import Price from '../components/Production/Price'
import Production from '../components/Production'


const ProductionPage = () => {
  return (
    <>
      <Title value='Продукция'/>
      <Price></Price>
      <Production/>
    </>
  )
}
export default ProductionPage