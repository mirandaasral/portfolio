/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import resume from "./images/resume.jpg"
import resume_mobile from "./images/resume_mobile.jpg"

import infographic from "./images/infographic.jpg";
import play from "./images/play.jpg";
import play_full from "./images/play_full.jpg"
import infographic_preview from "./images/infographic_preview.jpg";
import package_design_preview from "./images/package_design_preview.jpg";
import editorial_spread_2 from "./images/editorial_spread_2.jpg"
import editorial_spread_2_preview from "./images/editorial_spread_2_preview.jpg";
import Hierarchy_Text from "./images/Hierarchy_Text.jpg";
import letter_as_form_demo_copy from "./images/letter_as_form_demo_copy.jpg";
import miranda_asral_symbol_set1024_2 from "./images/miranda_asral_symbol_set1024_2.jpg";
import voting from './images/voter-registration.png'
import crop_spread from './images/brazda_crop.png'
import spread from './images/brazda_full.jpg'

function App() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [pageView, setPageView] = useState('pieces'); // pieces, about, resume

  const pieces = [
    {
      name: "Editorial Spread",
      listImg: crop_spread, //replace with cropped
      fullImg: spread,
      description: "Editorial spread inspired by artist Bozidar Brazda. This piece was part of a class-designed mockup of hte 2008 Whitney Biennial. My spread was combined with the work of about 15 other students to make up the content of the magazine.",
    },
    {
      name: "Infographic",
      listImg: infographic_preview, //replace with cropped
      fullImg: infographic,
      description: "Infographic inspired by the question, 'what is truth?' Maps out the history of disinformation and mistrust of the media in the US.",
    },
    {
      name: "Packaging Design",
      listImg: package_design_preview, //replace with cropped
      fullImg: play_full,
      description: "Two tea packaging design directions inspired by the Turkish evil eye. ",
    },
    {
      name: "Editorial Spread",
      listImg: editorial_spread_2_preview, //replace with cropped
      fullImg: editorial_spread_2,
      description: "Editorial spread inspired by architect and artist Zaha Hadid.",
    },
    {
      name: "Hierarchy Exercise",
      listImg: Hierarchy_Text, //replace with cropped
      fullImg: Hierarchy_Text,
      description: "Design exercise exploring hierarchy, using letters and text as form.",
    },
    {
      name: "Letter as Form",
      listImg: letter_as_form_demo_copy, //replace with cropped
      fullImg: letter_as_form_demo_copy,
      description: "Design exercise exploring letter as form using multiple typefaces.",
    },
    {
      name: "Symbol Set",
      listImg: miranda_asral_symbol_set1024_2, //replace with cropped
      fullImg: miranda_asral_symbol_set1024_2,
      description: "An ominous piece inspired by the novel Gone Girl by Gillian Flynn representing an unstable marriage riddled with manipulation, lies, deceit, and the weaponization of the couple's best skill: writing. This collection pictures a weading band, a weaponized pen, a burner phone, and a flipped over chair.",
    },
    {
      name: "Lehigh Votes Website and Instagram",
      listImg: voting, //replace with cropped
      fullImg: voting,
      description: "Social media efforts to help promote the Civic Engagment Day events at Lehigh University. Website: go.lehigh.edu/vote Instagram: https://instagram.com/lehighvotes",
    },
  ] ;

  return (
    <div className="App">
      <div className="name-header">
        <h1
          className="m-0"
          onClick={(e) => {
            e.preventDefault();
            setSelectedPiece(null);
            setPageView('pieces');
          }}
        >
          MIRANDA ASRAL
        </h1>
        <div className="right-items">
          <p onClick={() => {setPageView('resume')}}>Resume</p>
          {/* <p onClick={() => {setPageView('about')}}>About</p> */}
        </div>
      </div>
      {/* full view of one piece */}
      {selectedPiece && pageView === 'pieces' && (
        <>
            <div className="web-view">
                <div className="piece-view-main">
                <div className="piece-view">
                    <div className="piece-description">
                        <div className="piece-text">
                            <h5>{selectedPiece.name.toUpperCase()}</h5>
                            <p>{selectedPiece.description}</p>
                            <a
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedPiece(null);
                                setPageView('pieces');
                            }}
                            className="piece-back-link"
                            >
                            &larr; Back
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
                        <p>{selectedPiece.description}</p>
                        <a
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedPiece(null);
                            setPageView('pieces');
                        }}
                        className="piece-back-link"
                        >
                        &larr; Back
                        </a>
                    </div>
                </div>
            </div>
        </>
      )}
      {/* list view of all pieces */}
      {!selectedPiece && pageView === 'pieces' && (
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
                  {((i+1)%3 !== 0 && i !== pieces.length - 1) && (
                    <div className="web-pads" key={'pad_'+i} style={{ width: "48px" }}></div>
                  )}
                </>
              );
            })}
        </div>
      )}
      {pageView === 'about' &&
        <div className="specialView">
          <h2>About</h2>
          <p> pretty cool gal</p>
          <ul>
            <li>
                cool
            </li>
            <li>
                very cool
            </li>
          </ul>
        </div>
      }
      {pageView === 'resume' &&
        <div className="specialView">
          <img className="resumeView web-view" src={resume} alt=""/>
          <img className="resumeView mobile-view" src={resume_mobile} alt=""/>
          <a className="downloadButton" href={'./resume.pdf'} download='Asral_Miranda.pdf'>Download</a>
        </div>
      }
    </div>
  );
}

export default App;
