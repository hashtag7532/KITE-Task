import React from 'react'
import { useState } from 'react';

export async function getStaticProps() {
  const res = await fetch(
    "https://fakerapi.it/api/v1/products?_quantity=50"
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}

const products = ({ products }) => {
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [filteredProd, setFilteredProd] = useState(products)

  const onMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value);
    setMinPrice(newMinPrice);
    setFilteredProd(
      products.filter((product) => product.price >= newMinPrice)
    );
  };

  const onMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value);
    setMaxPrice(newMaxPrice);
    setFilteredProd(
      products.filter((product) => product.price <= newMaxPrice)
    );
  };
  return(
    <div>
      <div className='justify-around flex flex-row mb-10'>
        <label className='flex flex-col'>
          <span className='font-bold'>Minimum Price</span>
          <input type="number" value={minPrice} onChange={onMinPriceChange} />
        </label>

        <label className='flex flex-col'>
          <span>Maximum Price</span>
          <input type="number" value={maxPrice} onChange={onMaxPriceChange} />
        </label>
      </div>
    <div className="grid grid-cols-4">
        {filteredProd.map((product) => {
          return(<div className="shadow m-5">
            <div>
              {product.name}
            </div>
            <div>
              {product.net_price}
            </div>
            <div>
              {product.price}
            </div>
          </div>
        )})}
 </div>
 </div>
  )
  
}

export default products