/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import resume from "./images/Asral_Miranda_Resume.jpg";
import resume_mobile from "./images/Asral_Miranda_Resume_Mobile.jpg";

import { pieces } from './Pieces.js'

function App() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [pageView, setPageView] = useState("pieces"); // pieces, about, resume

  function process_descriptions(text) {
    const REGEX = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi
    const IDENT = "*******"
    const intermediateText = text.replace(REGEX, (url) => {
      const cleanURL = url.replace('\n', '')
      return '|||' + IDENT + cleanURL + '|||' + url.replace(cleanURL, '')
    })
    return intermediateText.split('|||').map((value, index) => {
      if (value.includes(IDENT)) {
        const url = value.replace(IDENT, '')
        return <a
          key={url}
          href={url}
          target={'_blank'}
          rel='noopener noreferrer'
        >
          {url}
        </a>
      }
      return value
    })
  }

  return (
    <div className="App">
      <div className="name-header">
        <h1
          className="m-0"
          onClick={(e) => {
            e.preventDefault();
            setSelectedPiece(null);
            setPageView("pieces");
          }}
        >
          MIRANDA ASRAL
        </h1>
        <div className="right-items">
          <p
            onClick={() => {
              setPageView("resume");
            }}
          >
            Resume
          </p>
          {/* <p onClick={() => {setPageView('about')}}>About</p> */}
        </div>
      </div>
      {/* full view of one piece */}
      {selectedPiece &&
        pageView === "pieces" &&
        Array.isArray(selectedPiece.fullImg) && (
            <div className="web-view" style={{ display: "block" }}>
              <div className="piece-view-main">
                <div className="piece-text piece-text-list">
                    <h5 style={{marginTop: '2em'}}>{selectedPiece.name.toUpperCase()}</h5>
                    <p>{process_descriptions(selectedPiece.description)}</p>
                    <a
                    onClick={(e) => {
                        e.preventDefault();
                        setSelectedPiece(null);
                        setPageView("pieces");
                    }}
                    className=""
                    >
                    Back
                    </a>
                </div>
                {selectedPiece.fullImg.map((slide, i) => {
                  return (
                    <img src={slide} className="slide-image" alt="" key={i} />
                  );
                })}
              </div>
            </div>
      )}
      {selectedPiece &&
        pageView === "pieces" &&
        !Array.isArray(selectedPiece.fullImg) && (
          <>
            <div className="web-view">
              <div className="piece-view-main">
                <div className="piece-view">
                  <div className="piece-description">
                    <div className="piece-text">
                      <h5>{selectedPiece.name.toUpperCase()}</h5>
                      <p>{process_descriptions(selectedPiece.description)}</p>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedPiece(null);
                          setPageView("pieces");
                        }}
                        className="piece-back-link"
                      >
                        Back
                      </a>
                    </div>
                  </div>
                  <div className="piece-image">
                    <img alt="" src={selectedPiece.fullImg} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-view">
              <div className="piece-image">
                <img alt="" src={selectedPiece.fullImg} />
              </div>
              <div className="piece-description">
                <div className="piece-text">
                  <h5>{selectedPiece.name.toUpperCase()}</h5>
                  <p>{process_descriptions(selectedPiece.description)}</p>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedPiece(null);
                      setPageView("pieces");
                    }}
                    className="piece-back-link"
                  >
                    Back
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      {/* list view of all pieces */}
      {!selectedPiece && pageView === "pieces" && (
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
                        window.scrollTo(0, 0);
                      }}
                    />
                    <p className="list-hover">{piece.name.toUpperCase()}</p>
                  </div>
                  {(i + 1) % 3 !== 0 && i !== pieces.length - 1 && (
                    <div
                      className="web-pads"
                      key={"pad_" + i}
                      style={{ width: "48px" }}
                    ></div>
                  )}
                </>
              );
            })}
        </div>
      )}
      {pageView === "about" && (
        <div className="specialView">
          <h2>About</h2>
          <p> pretty cool gal</p>
          <ul>
            <li>cool</li>
            <li>very cool</li>
          </ul>
        </div>
      )}
      {pageView === "resume" && (
        <div className="specialView">
          <img className="resumeView web-view" src={resume} alt="" />
          <img className="resumeView mobile-view" src={resume_mobile} alt="" />
          <a
            className="downloadButton"
            href={"./Asral_Miranda_Resume_Portfolio.pdf"}
            download="Asral_Miranda_Resume_Portfolio.pdf"
          >
            Download
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
