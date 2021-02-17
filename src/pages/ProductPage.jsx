import React from 'react'
import { useParams } from "react-router-dom";

import Title from '../components/Title'
import Product from '../components/Product'

import { items } from './products'


const ProductPage = () => {
  const { product } = useParams()

  return (
    <>
      <Title value={items[product]}/>
      <Product product={product}/>
    </>
  )
}
export default ProductPage
