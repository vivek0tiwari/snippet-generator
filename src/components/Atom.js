import React from "react";
import { atomRender } from "../snippetRenderers";
export const Atom = props => {
  const { snippet, trigger, description } = props;
  return <pre className="pre">{atomRender(snippet, trigger, description)}</pre>;
};
