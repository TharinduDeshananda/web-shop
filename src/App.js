import logo from "./logo.svg";
import "./App.css";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import { useLayoutEffect, useRef } from "react";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import useWindowDimensions from "./hooks/WindowDimensions";
import CollectionComp from "./components/CollectionComp/CollectionComp";

function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function App() {
  const topBarRef = useRef(null);
  const contentRef = useRef(null);
  const sideBarRef = useRef(null);

  useLayoutEffect(() => {
    let height = topBarRef.current.getBoundingClientRect().height;

    console.log(contentRef.current.style);
    console.log("setting height", height);
    sideBarRef.current.style.paddingTop = `${height}px`;
    contentRef.current.style.paddingTop = `${height}px`;
    let width = sideBarRef.current.getBoundingClientRect().width;
    contentRef.current.style.paddingLeft = `${width + convertRemToPixels(2)}px`;
  });
  return (
    <div className="container">
      <TopNavBar ref={topBarRef} />
      <SideNavBar ref={sideBarRef} />

      <div className="test-content" ref={contentRef}>
        <div className="write-content">
          <CollectionComp
            data={{
              title: "Title",
              descr: `Ultrices natoque mus mattis, aliquam, cras in pellentesque
tincidunt elit purus lectus, vel ut aliquet, elementum nunc
nunc rhoncus placerat urna! Sit est sed! Ut penatibus turpis
mus tincidunt! Dapibus sed aenean, magna sagittis, lorem velit`,
            }}
          />
          <CollectionComp
            data={{
              title: "Title",
              descr: `Ultrices natoque mus mattis, aliquam, cras in pellentesque
tincidunt elit purus lectus, vel ut aliquet, elementum nunc
nunc rhoncus placerat urna! Sit est sed! Ut penatibus turpis
mus tincidunt! Dapibus sed aenean, magna sagittis, lorem velit`,
            }}
          />
          <CollectionComp
            data={{
              title: "Title",
              descr: `Ultrices natoque mus mattis, aliquam, cras in pellentesque
tincidunt elit purus lectus, vel ut aliquet, elementum nunc
nunc rhoncus placerat urna! Sit est sed! Ut penatibus turpis
mus tincidunt! Dapibus sed aenean, magna sagittis, lorem velit`,
            }}
          />
          <CollectionComp
            data={{
              title: "Title",
              descr: `Ultrices natoque mus mattis, aliquam, cras in pellentesque
tincidunt elit purus lectus, vel ut aliquet, elementum nunc
nunc rhoncus placerat urna! Sit est sed! Ut penatibus turpis
mus tincidunt! Dapibus sed aenean, magna sagittis, lorem velit`,
            }}
          />
          <CollectionComp
            data={{
              title: "Title",
              descr: `Ultrices natoque mus mattis, aliquam, cras in pellentesque
tincidunt elit purus lectus, vel ut aliquet, elementum nunc
nunc rhoncus placerat urna! Sit est sed! Ut penatibus turpis
mus tincidunt! Dapibus sed aenean, magna sagittis, lorem velit`,
            }}
          />
          <CollectionComp
            data={{
              title: "Title",
              descr: `Ultrices natoque mus mattis, aliquam, cras in pellentesque
tincidunt elit purus lectus, vel ut aliquet, elementum nunc
nunc rhoncus placerat urna! Sit est sed! Ut penatibus turpis
mus tincidunt! Dapibus sed aenean, magna sagittis, lorem velit`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
