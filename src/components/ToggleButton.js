// ToggleButton.js
import React from "react";

const ToggleButton = ({ toggleGrid, isGrid }) => (
  <button onClick={toggleGrid}>{isGrid ? "List View" : "Grid View"}</button>
);

export default ToggleButton;
