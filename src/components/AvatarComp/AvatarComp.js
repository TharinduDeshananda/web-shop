import React from "react";
import "./AvatarComp.css";

function AvatarComp({ title, subTitle, imgUrl }) {
  return (
    <div className="container-avatar">
      <div className="title-content-avatar">
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
      <img src={imgUrl} />
    </div>
  );
}

export default AvatarComp;
