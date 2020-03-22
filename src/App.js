import React, { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SnippetInput } from "./components/SnippetInputs";
import { OutputContainer } from "./components/OutputContainer";
const initialState = {
  description: "",
  trigger: "",
  snippet: "",
  mode: "vscode"
};
function reducer(state, action) {
  const { name, value } = action;
  return { ...state, [name]: value };
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const onInputChange = e => {
    const { name, value } = e.target;
    dispatch({
      name,
      value
    });
  };
  const changeMode = e => {
    const { name } = e.target;
    dispatch({
      name: "mode",
      value: name
    });
  };
  return (
    <div className={`main-app-container app-${state.mode}`}>
      <div className="app-header">
        <h1>snippet generator</h1>
      </div>
      <div className="container">
        <SnippetInput onInputChange={onInputChange} {...state} />
        <OutputContainer {...state} changeMode={changeMode} />
      </div>
    </div>
  );
}

export default App;
