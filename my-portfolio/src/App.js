/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import LargePiece from "./components/LargePiece";
import IndividualPiece from "./components/IndividualPiece";

import resume from "./images/Asral_Miranda_Resume.jpg";
import resume_mobile from "./images/Asral_Miranda_Resume_Mobile.jpg";

import { pieces } from './Pieces.js'

function App() {
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [pageView, setPageView] = useState("pieces"); // pieces, about, resume

<<<<<<< HEAD
  let { id } = useParams();

  const pieces = [
    {
      name: "Bethlehem Branding",
      listImg: crop_bbp, //replace with cropped
      fullImg: [
        bbp1,
        bbp2,
        bbp3,
        bbp4,
        bbp5,
        bbp6,
        bbp7,
        bbp8,
        bbp9,
        bbp10,
        bbp11,
        bbp12,
        bbp13,
        bbp14,
        bbp15,
        bbp16,
        bbp17,
        bbp18,
        bbp19,
        bbp20,
        bbp21,
        bbp22,
        bbp23,
      ],
      description: null,
    },
    {
      name: "Editorial Spread",
      listImg: crop_spread, //replace with cropped
      fullImg: [spread, spread],
      description:
        "Editorial spread inspired by artist Bozidar Brazda. This piece was part of a class-designed mockup of the 2008 Whitney Biennial. My spread was combined with the work of about 15 other students to make up the content of the magazine.",
    },
    {
      name: "Infographic",
      listImg: infographic_preview, //replace with cropped
      fullImg: infographic,
      description:
        "Infographic inspired by the question, 'What is truth?' Maps out the history of disinformation and mistrust of the media in the US.",
    },
    {
      name: "Packaging Design",
      listImg: package_design_preview, //replace with cropped
      fullImg: play_full,
      description:
        "Two tea packaging design directions inspired by the Turkish evil eye. ",
    },
    {
      name: "Editorial Spread",
      listImg: editorial_spread_2_preview, //replace with cropped
      fullImg: editorial_spread_2,
      description:
        "Editorial spread inspired by architect and artist Zaha Hadid.",
    },
    {
      name: "Hierarchy Exercise",
      listImg: Hierarchy_Text, //replace with cropped
      fullImg: Hierarchy_Text,
      description:
        "Design exercise exploring hierarchy, using letters and text as form.",
    },
    {
      name: "Letter as Form",
      listImg: letter_as_form_demo_copy, //replace with cropped
      fullImg: letter_as_form_demo_copy,
      description:
        "Design exercise exploring letter as form using multiple typefaces.",
    },
    {
      name: "Symbol Set",
      listImg: miranda_asral_symbol_set1024_2, //replace with cropped
      fullImg: miranda_asral_symbol_set1024_2,
      description:
        "An ominous piece inspired by the novel Gone Girl by Gillian Flynn representing an unstable marriage riddled with manipulation, lies, deceit, and the weaponization of the couple's best skill: writing. This collection pictures a weading band, a weaponized pen, a burner phone, and a flipped over chair.",
    },
    {
      name: "Lehigh Votes Website and Instagram",
      listImg: voting, //replace with cropped
      fullImg: voting,
      description: (
        <>
          Social media efforts to help promote the Civic Engagment Day events at
          Lehigh University. <br />
          <br />
          <a href="https://go.lehigh.edu/vote" alt="">
            go.lehigh.edu/vote
          </a>{" "}
          <br />
          <a href="https://instagram.com/lehighvotes" alt="">
            instagram.com/lehighvotes
          </a>
        </>
      ),
    },
  ];
=======
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
>>>>>>> 6fa02834bc0b95b136d56d832ea780e34477ca98

  useEffect(() => {
    switch (id) {
      case "resume":
        setPageView("resume");
        setSelectedPiece(null);
        break;
      case null:
        setSelectedPiece(null);
      default:
        setPageView("pieces");
        try {
          if (pieces?.[parseInt(id)]) {
            setSelectedPiece(pieces?.[parseInt(id)]);
          } else {
            setSelectedPiece(undefined);
          }
        } catch (err) {
          setSelectedPiece(undefined);
        }
    }
  }, [id]);

  if (id && selectedPiece === undefined) {
    return <Navigate to="/" />;
  }
  return (
    <div className="App">
      <div className="name-header">
        <Link to={{ pathname: `/` }}>
          <h1 className="m-0">MIRANDA ASRAL</h1>
        </Link>
        <div className="right-items">
          <p
            onClick={() => {
              setPageView("resume");
            }}
          >
            <Link to={{ pathname: `/project/resume` }}>Resume</Link>
          </p>
          {/* <p onClick={() => {setPageView('about')}}>About</p> */}
        </div>
      </div>
      {/* full view of one piece */}
      {selectedPiece &&
        pageView === "pieces" &&
        selectedPiece.name === "Bethlehem Branding" && (
          <>
            <LargePiece selectedPiece={selectedPiece} />
          </>
        )}
      {selectedPiece &&
        pageView === "pieces" &&
        !Array.isArray(selectedPiece.fullImg) && (
          <>
            <IndividualPiece selectedPiece={selectedPiece} />
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
                    <Link to={{ pathname: `/project/${i}` }}>
                      <img
                        src={piece.listImg}
                        alt=""
                        key={"img_" + i}
                        className="list-image"
                      />
                    </Link>
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
