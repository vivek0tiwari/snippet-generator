import React from "react";
import { subLimeRender } from "../snippetRenderers";
export const Sublime = props => {
  const { snippet, trigger, description } = props;
  return (
    <pre className="pre">{subLimeRender(snippet, trigger, description)}</pre>
  );
};
