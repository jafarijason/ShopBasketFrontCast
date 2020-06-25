import React from 'react';

import './ProductList.css'
import Product from './Product';

const ProductList = () => {

  const products = [
    { id: 1, title: "Book1", price: 25 },
    { id: 2, title: "Book2", price: 44 },
    { id: 3, title: "Book3", price: 77 },
  ]

  return (
    <div className="product-list">
       
      {
        products.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price }
          />
        ))
      }

    </div>
  );
}

export default ProductList;