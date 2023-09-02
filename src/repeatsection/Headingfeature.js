import React from 'react'
import './Headingfeature.css'

const Headingfeature = (props) => {
  return (
    <div className="heading-section">
    <div className="heading">
      <h2>{props.headingname}</h2>
    </div>
    <div className="image">
      <img src="your-image-url.jpg" alt="Your Image" />
    </div>
  </div>  )
}

export default Headingfeature