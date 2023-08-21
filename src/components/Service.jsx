import React from "react";

const Service = ({ title, para, imgSrc }) => {
  return (
    <div className="container boxShadow d-f ai-c">
      <div className="service d-f ai-c jc-sb">
        <div className="service__text">
          <h2>{title}</h2>
          <p>{para}</p>
        </div>
        <div className="service__image d-f ai-c jc-c">
          <img src={imgSrc} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Service;
