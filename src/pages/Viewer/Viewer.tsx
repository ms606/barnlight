import React, { FunctionComponent, useRef } from "react";
import styled from "styled-components";
import {
  ZakekeEnvironment,
  ZakekeViewer,
  ZakekeProvider,
  useZakeke,
} from "zakeke-configurator-react";
import Cameras from "../../components/Cameras/Cameras";
import  "./Viewer.css"
import Selector from "../../components/selector";
import ExplodeSolid from "../../assets/icons/expand-arrows-alt-solid.js";

import { Icon } from '../../components/Atomic';

const zakekeEnvironment = new ZakekeEnvironment();

// const Layout = styled.div`
//     padding: 12px 24px 60px;
//     display: grid;
//     grid-template-columns: 1.2fr 1fr;
//     grid-gap: 40px;
//     height: 100%;
// `;

const ExplodeIcon = styled(Icon)`
	width: 32px;
	height: 32px;
`;

const Viewer: FunctionComponent<{}> = () => {
  const {
    isSceneLoading,
    isAddToCartLoading,
    price,
    groups,
    selectOption,
    addToCart,
    templates,
    setTemplate,
    setCamera,
    setExplodedMode,
  } = useZakeke();

  const viewElement = useRef<HTMLDivElement | null>(null);
  
  const fullScreen = () => {
    (viewElement.current!).requestFullscreen()
  }
  
  return (
    <ZakekeProvider environment={zakekeEnvironment}>
      <div className="layout">
      <>
      <div className="ff_root">
        <div className="ff_viewer">
          {/* <div className="ff_viewer_left_actions"> */}
            {/* <Cameras cameras={groups} onSelect={onSelectCamera}/> */}
          {/* </div> */}
          <div className="ff_viewer_right_actions">
          </div>
          <div className="ff_viewer_zakeke" ref={viewElement}>
            <ZakekeViewer />
          </div>
        </div>
      </div>
      </>
      <Selector refViewer={viewElement} fullScreen={fullScreen} />
      </div>
      
    </ZakekeProvider>
  );
};

export default Viewer;
