import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import infographic from "./images/infographic.jpg";
import play from "./images/play.jpg";
import infographic_preview from "./images/infographic_preview.jpg";
import package_design_preview from "./images/package_design_preview.jpg";
import editorial_spread_2_preview from "./images/editorial_spread_2_preview.jpg";
import Hierarchy_Text from "./images/Hierarchy_Text.jpg";
import letter_as_form_demo_copy from "./images/letter_as_form_demo_copy.jpg";
import miranda_asral_symbol_set1024_2 from "./images/miranda_asral_symbol_set1024_2.jpg";

function App() {
  const [selectedPiece, setSelectedPiece] = useState(null);

  // i love you, i hope this was helpful and didn't make you really mad. muah <3

  const pieces = [
    {
      name: "Infographic",
      listImg: infographic_preview, //replace with cropped
      fullImg: infographic,
      description: "Here is the infographic I made",
    },
    {
      name: "Tea Design",
      listImg: package_design_preview, //replace with cropped
      fullImg: play,
      description: "Here is the tea design I made",
    },
    {
      name: "Editorial Spread",
      listImg: editorial_spread_2_preview, //replace with cropped
      fullImg: infographic,
      description: "Here is the infographic I made",
    },
    {
      name: "Hierarchy Exercise",
      listImg: Hierarchy_Text, //replace with cropped
      fullImg: play,
      description: "Here is the tea design I made",
    },
    {
      name: "Letter as Form",
      listImg: letter_as_form_demo_copy, //replace with cropped
      fullImg: infographic,
      description: "Here is the infographic I made",
    },
    {
      name: "Symbol Set",
      listImg: miranda_asral_symbol_set1024_2, //replace with cropped
      fullImg: play,
      description: "Here is the tea design I made",
    },
  ];

  return (
    <div className="App">
      <div className="name-header">
        <h1
          className="m-0"
          style={{
            paddingLeft: ".5em",
          }}
          onClick={(e) => {
            e.preventDefault();
            setSelectedPiece(null);
          }}
        >
          MIRANDA ASRAL
        </h1>
        <div className="right-items">
          <p className="">Resume</p>
          <p className="">About</p>
        </div>
      </div>
      {/* full view of one piece */}
      {selectedPiece && (
        <div className="piece-view">
          <div className="piece-image">
            <img alt="" src={selectedPiece.fullImg} />
          </div>
          <div className="piece-description">
            <h2>{selectedPiece.name}</h2>
            <p>{selectedPiece.description}</p>
            <a
              onClick={(e) => {
                e.preventDefault();
                setSelectedPiece(null);
              }}
              className="piece-back-link"
            >
              &larr; Back
            </a>
          </div>
        </div>
      )}
      {/* list view of all pieces */}
      {!selectedPiece && (
        <div className="row portfolio-list">
          {/* row is a bootstrap class (it is just a row, good for mobile view stuff) */}
          {pieces.length &&
            // .map is an array function that returns the elements in the return section for every element
            // in the specific array
            pieces.map((piece, i) => {
              return (
                <>
                  <div className={`list-item`} key={"div_" + i}>
                    {/* col-6 makes the div the size of half of the width of the row */}
                    {/* m-0 removes all the default margins of the col-6 (m-0 means no margins anywhere) */}
                    <img
                      src={piece.listImg}
                      alt=""
                      key={"img_" + i}
                      className="list-image"
                      onClick={(event) => {
                        event.preventDefault();
                        setSelectedPiece(piece);
                      }}
                    />
                  </div>
                  {i !== 2 && i !== 5 && (
                    <div className="web-pads" style={{ width: "48px" }}></div>
                  )}
                </>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;
