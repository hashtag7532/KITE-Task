import React from 'react'

export async function getStaticProps() {
    const res = await fetch(
        "https://fakerapi.it/api/v1/users?_quantity=50"
    );
    const data = await res.json();

    return {
        props : {
            users : data.data,
        },
    };
}


const ProductCard = () => {
  return (
    <div>ProductCard</div>
  )
}

export default ProductCard