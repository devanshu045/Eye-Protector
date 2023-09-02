import React from 'react'
import Headingfeature from '../repeatsection/Headingfeature'
import datasmall from "../data/datasmall";
import Productlist from "../repeatsection/Productlist";


const Feature = () => {
  return (
    <div>
                <Headingfeature headingname={"Featured Products"}/>
                <Productlist products={datasmall}/>



    </div>
  )
}

export default Feature