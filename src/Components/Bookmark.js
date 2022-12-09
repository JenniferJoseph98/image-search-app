import React from "react";
// import "./image.css";

import { useLocation } from "react-router-dom";
function Bookmark() {
  const { state } = useLocation();

  return (
    <div>
      <h1>Bookmark images</h1>

      <div id="container">
        {state.map((photo) => (
          <img src={photo} alt="bookmark" />
        ))}
      </div>
    </div>
  );
}

export default Bookmark;
