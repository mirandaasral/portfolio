import React from "react";

import "../App.css";

function LargePiece({ selectedPiece, ...props }) {
  return (
    <div className="web-view" style={{ display: "block" }}>
      <div className="piece-view-main">
        {selectedPiece.fullImg.map((slide, i) => {
          return <img src={slide} className="slide-image" alt="" key={i} />;
        })}
      </div>
    </div>
  );
}
export default LargePiece;
