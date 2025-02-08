import React, { useEffect } from "react";

import "../App.css";

function IndividualPiece({ selectedPiece, ...props }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  function process_descriptions(text) {
    const REGEX =
      /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;
    const IDENT = "*******";
    const intermediateText = text.replace(REGEX, (url) => {
      const cleanURL = url.replace("\n", "");
      return "|||" + IDENT + cleanURL + "|||" + url.replace(cleanURL, "");
    });
    return intermediateText.split("|||").map((value, index) => {
      if (value.includes(IDENT)) {
        const url = value.replace(IDENT, "");
        return (
          <a key={url} href={url} target={"_blank"} rel="noopener noreferrer">
            {url}
          </a>
        );
      }
      return value;
    });
  }

  return (
    <>
      <div className="web-view">
        <div className="piece-view-main">
          <div className="piece-view">
            <div className="piece-description">
              <div className="piece-text">
                <h5>{selectedPiece.name.toUpperCase()}</h5>
                <p>{process_descriptions(selectedPiece.description)}</p>
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
            <p>{process_descriptions(selectedPiece.description)}</p>
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
