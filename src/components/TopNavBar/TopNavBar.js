import React from "react";
import AvatarComp from "../AvatarComp/AvatarComp";
import "./TopNavBar.css";
import { ReactComponent as ReactLogo } from "../../assets/images/logo.svg";
const TopNavBar = React.forwardRef((props, ref) => {
  return (
    <div className="top-bar-container" ref={ref}>
      {/* <div className="logo-content">video library</div> */}
      <ReactLogo className="top-bar-logo-img" />
      <div className="title-content">
        <span>video library</span>
      </div>
      <div className="util-content">
        <AvatarComp
          title={"title"}
          subTitle={"sub title"}
          imgUrl={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Master_Chief_at_E3_2012_%287351774232%29.jpg/1200px-Master_Chief_at_E3_2012_%287351774232%29.jpg"
          }
        />
      </div>
    </div>
  );
});

export default TopNavBar;
