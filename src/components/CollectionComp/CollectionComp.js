import React from "react";
import "./CollectionComp.css";
function CollectionComp({ style, data }) {
  return (
    <div className="coll-comp-container" style={style}>
      <div className="coll-comp-image-container"></div>
      <span className="coll-comp-title">{data?.title}</span>
      <span className="coll-comp-descr">{data?.descr}</span>
      <div className="coll-comp-data">
        <div>no of songs : {data?.songCount}</div>
        <div>Last updated : {data?.lastUpdated}</div>
      </div>
    </div>
  );
}

export default CollectionComp;
