import React from "react";
import './Headingsec.css'

const Headingsec = (props) => {
  return (
   <>
   <div className="box-container">
      <div className="box-heading">{props.heading}</div>
      <div className="box-image">
        <img src={props.imageSrc} alt="Box" />
      </div>
    </div>
   </>
  );
};

export default Headingsec;
