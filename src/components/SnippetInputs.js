import React from "react";

export const SnippetInput = ({ onInputChange, ...props }) => {
  return (
    <div className="container-column">
      <div className="column-top">
        <input
          className="input_text"
          type="text"
          name="description"
          placeholder="Description"
          onChange={onInputChange}
          value={props.description}
        />
        <input
          className="input_text"
          type="text"
          name="trigger"
          placeholder="Tab Trigger"
          onChange={onInputChange}
          value={props.trigger}
        />
      </div>
      <div className="column-bottom">
        <textarea
          className="textarea"
          name="snippet"
          placeholder="Snippet"
          onChange={onInputChange}
          value={props.snippet}
        />
      </div>
    </div>
  );
};
