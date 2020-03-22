import React from "react";
import { vSCodeRender } from "../snippetRenderers";
export const VSCode = props => {
  const { snippet, trigger, description } = props;
  return (
    <pre className="pre">{vSCodeRender(snippet, trigger, description)}</pre>
  );
};
