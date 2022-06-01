import React from "react";
import InvalidPrompt from "./InvalidPrompt";
import Overlay from "../UI/Overlay";

const InvalidPromptModel = function (props) {

  const hideOverlayHandler = function (isVisible) {
    props.onCloseOverlay(isVisible);
  };

  return (
    <Overlay onClick={hideOverlayHandler}>
      <InvalidPrompt invalidMeggage={props.invalidMessage} />
    </Overlay>
  );
};

export default InvalidPromptModel;
