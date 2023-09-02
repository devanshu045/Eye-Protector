import React from 'react'
import Headingfeature from '../repeatsection/Headingfeature'
import datasmall from "../data/datasmall";
import Productlist from "../repeatsection/Productlist";

const Recommded = () => {
  return (
    <div>
        {/* <h1>jai shree ram </h1> */}
        <Headingfeature headingname={"Recommended Products"}/>
        <Productlist products={datasmall}/>

    </div>
  )
}

export default Recommded