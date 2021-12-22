import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  console.log('a', process.env.asdsad)
  return (
  <h1>My React and TypeScript App!!</h1>
)};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);