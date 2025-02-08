import React from "react";

import "../App.css";

function IndividualPiece({ selectedPiece, ...props }) {
  return (
    <>
      <div className="web-view">
        <div className="piece-view-main">
          <div className="piece-view">
            <div className="piece-description">
              <div className="piece-text">
                <h5>{selectedPiece.name.toUpperCase()}</h5>
                <p>{selectedPiece.description}</p>
              </div>
            </div>
            <div className="piece-image">
              {Array.isArray(selectedPiece.fullImg) ? (
                <>
                  {selectedPiece.fullImg.map((slide, i) => {
                    return <img key={`image-${i}`} alt="" src={slide} />;
                  })}
                </>
              ) : (
                <img alt="" src={selectedPiece.fullImg} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <div className="piece-image">
          {Array.isArray(selectedPiece.fullImg) ? (
            <>
              {selectedPiece.fullImg.map((slide, i) => {
                return <img key={`image-${i}`} alt="" src={slide} />;
              })}
            </>
          ) : (
            <img alt="" src={selectedPiece.fullImg} />
          )}
        </div>
        <div className="piece-description">
          <div className="piece-text">
            <h5>{selectedPiece.name.toUpperCase()}</h5>
            <p>{selectedPiece.description}</p>
            <a
              onClick={(e) => {
                e.preventDefault();
              }}
              className="piece-back-link"
            >
              &larr; Back
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default IndividualPiece;
