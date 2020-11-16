import React from 'react'
import { Card } from '@equinor/eds-core-react'
import ProductTable from './ProductTable.tsx'

export const ProductCard = ({ enabledProducts, products }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        width: 'fit-content',
        display: 'inline-block',
        margin: '10px',
        padding: '20px',
        height: 'auto',
        paddingTop: '70px',
      }}>
      <ProductTable enabledProducts={enabledProducts} products={products} />
    </div>
  )
}

export default ProductCard
