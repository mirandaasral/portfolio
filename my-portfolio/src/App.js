import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import infographic from "./images/infographic.jpg";
import play from "./images/play.jpg";

function App() {
  const [selectedPiece, setSelectedPiece] = useState(null);

  // i love you, i hope this was helpful and didn't make you really mad. muah <3

  const pieces = [
    {
      name: "Infographic",
      listImg: infographic, //replace with cropped
      fullImg: infographic,
      description: "Here is the infographic I made",
    },
    {
      name: "Tea Design",
      listImg: play, //replace with cropped
      fullImg: play,
      description: "Here is the tea design I made",
    },
    {
      name: "Infographic",
      listImg: infographic, //replace with cropped
      fullImg: infographic,
      description: "Here is the infographic I made",
    },
    {
      name: "Tea Design",
      listImg: play, //replace with cropped
      fullImg: play,
      description: "Here is the tea design I made",
    },
    {
      name: "Infographic",
      listImg: infographic, //replace with cropped
      fullImg: infographic,
      description: "Here is the infographic I made",
    },
    {
      name: "Tea Design",
      listImg: play, //replace with cropped
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
        >
          Miranda Asral
        </h1>
        <p className="right-items m-0">Resume</p>
      </div>
      {/* full view of one piece */}
      {selectedPiece && (
        <div
          className="piece-view"
          style={{
            display: "flex",
          }}
        >
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
          <div className="piece-image">
            <img alt="" src={selectedPiece.fullImg} />
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
                <div className="col-6 m-0 list-item" key={"div_" + i}>
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
              );
            })}
        </div>
      )}
    </div>
  );
}

export default App;
