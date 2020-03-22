import { VSCode } from "./VSCode";
import React from "react";
import { Sublime } from "./Sublime";
import { Atom } from "./Atom";
const renderSnippet = (mode, props) => {
  if (mode === "vscode") {
    return <VSCode {...props} />;
  } else if (mode === "sublime") {
    return <Sublime {...props} />;
  } else if (mode === "atom") {
    return <Atom {...props} />;
  }
  return null;
};
export const OutputContainer = ({ changeMode, ...props }) => {
  const { mode } = props;
  return (
    <div className="container-column">
      <div className="column-top">
        <button
          name="vscode"
          onClick={changeMode}
          className={
            mode === "vscode" ? "mode-button button-vscode" : "mode-button"
          }
        >
          VSCode
        </button>
        <button
          name="sublime"
          onClick={changeMode}
          className={
            mode === "sublime" ? "mode-button button-sublime" : "mode-button"
          }
        >
          Sublime
        </button>
        <button
          name="atom"
          onClick={changeMode}
          className={
            mode === "atom" ? "mode-button button-atom" : "mode-button"
          }
        >
          Atom
        </button>
      </div>
      <div className="column-bottom">
        {renderSnippet(mode, props)}
        <div className="copy-button-container">
          <button className={`mode-button button-${mode}`}>Copy Snippet</button>
        </div>
      </div>
    </div>
  );
};
