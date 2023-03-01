import React from 'react'
export const getStaticProps = async () => {
  const res = await fetch('https://fakerapi.it/api/v1/products?_quantity=50');
  const data = await res.json();
  console.log(data);
  
  return {
    props : {
      products : data
    }
  }
}


const products = ({ products }) => {
  return(
    <div className="grid grid-cols-4">
        {products.data.map((product) => {
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
  )
  
}

export default products