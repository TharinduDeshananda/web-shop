import React from "react";
import "./SideNavBar.css";
const SideNavBar = React.forwardRef((props, ref) => {
  return (
    <div className="side-nav-container" ref={ref}>
      <SideNavBarItem
        title={"Home"}
        iconName="home-outline"
        style={{ marginTop: "0rem" }}
      />
      <SideNavBarItem title={"Collections"} iconName="bookmarks-outline" />
      <SideNavBarItem title={"Authors"} iconName="people-outline" />
      <SideNavBarItem title={"Recent"} iconName="time-outline" />
    </div>
  );
});

export default SideNavBar;

const SideNavBarItem = ({ title, path, iconName, style }) => {
  const handleOnPress = React.useCallback(() => {
    console.log("Clicked");
  }, [path]);

  return (
    <div className="nav-bar-item" onClick={handleOnPress} style={style}>
      <ion-icon name={iconName}></ion-icon>
      <span className="nav-bar-item-title">{title}</span>
    </div>
  );
};
