import React from 'react'
import datasmall from "../data/datasmall";
import Productlist from "../repeatsection/Productlist";

const Shop = () => {
  return (
    <div>
              <Productlist products={datasmall}/>

    </div>
  )
}

export default Shop