import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const Ratingdict = {
    "The future we're building -- and boring | Elon Musk": "10/10",
    "Sleep is your superpower | Matt Walker": "8/10",
    "25 Chemistry Experiments in 15 Minutes | Andrew Szydlo | TEDxNewcastle":
      "8.5/10",
    "The psychology of self-motivation | Scott Geller | TEDxVirginiaTech":
      "7/10",
    "Being happy and living at the moment: Aisha Chaudhari at TEDxPune":
      "9.5/10",

    "The internet of things | Jordan Duffy | TEDxSouthBank": "9.5/10",
    "How a 13 year old changed 'Impossible' to 'I'm Possible' | Sparsh Shah | TEDxGateway":
      "8.5/10",
    "The mind behind Linux | Linus Torvalds": "9/10",
    "Your fingerprints reveal more than you think | Simona Francese": "7.5/10",
    "How immersive technologies (AR/VR) will reform the human experience | Tiffany Lam | TEDxQueensU":
      "9/10",

    "How boredom can lead to your most brilliant ideas | Manoush Zomorodi":
      "8/10",
    "Broken English: Every Indian Kid's Ordeal | Esha Manwani | TEDxHLCC":
      "7/10",
    "How Netflix changed entertainment -- and where it's headed | Reed:Hastings":
      "8.5/10",
    "Inside the mind of a master procrastinator | Tim Urban": "9/10",
    "The Power of Immersive Entertainment | Brent Bushnell | TEDxLA": "7/10"
  };

  const linksdict = {
    "The future we're building -- and boring | Elon Musk":
      "https://www.youtube.com/watch?v=zIwLWfaAg-8",
    "Sleep is your superpower | Matt Walker":
      "https://www.youtube.com/watch?v=5MuIMqhT8DM",
    "25 Chemistry Experiments in 15 Minutes | Andrew Szydlo | TEDxNewcastle":
      "https://www.youtube.com/watch?v=bOuEJf8Dr_4",
    "The psychology of self-motivation | Scott Geller | TEDxVirginiaTech":
      "https://www.youtube.com/watch?v=7sxpKhIbr0E",
    "Being happy and living at the moment: Aisha Chaudhari at TEDxPune":
      "https://www.youtube.com/watch?v=ENTf10L1jt0",

    "The internet of things | Jordan Duffy | TEDxSouthBank":
      "https://www.youtube.com/watch?v=mzy84Vb_Gxk",
    "How a 13 year old changed 'Impossible' to 'I'm Possible' | Sparsh Shah | TEDxGateway":
      "https://www.youtube.com/watch?v=bC0hlK7WGcM",
    "The mind behind Linux | Linus Torvalds":
      "https://www.youtube.com/watch?v=o8NPllzkFhE",
    "Your fingerprints reveal more than you think | Simona Francese":
      "https://www.youtube.com/watch?v=0DHywidLX6A",
    "How immersive technologies (AR/VR) will reform the human experience | Tiffany Lam | TEDxQueensU":
      "https://www.youtube.com/watch?v=Fi97-DAcGMk",

    "How boredom can lead to your most brilliant ideas | Manoush Zomorodi":
      "https://www.youtube.com/watch?v=c73Q8oQmwzo",
    "Broken English: Every Indian Kid's Ordeal | Esha Manwani | TEDxHLCC":
      "https://www.youtube.com/watch?v=XqqIzCPUcgs",
    "How Netflix changed entertainment -- and where it's headed | Reed:Hastings":
      "https://www.youtube.com/watch?v=LsAN-TEJfN0",
    "Inside the mind of a master procrastinator | Tim Urban":
      "https://www.youtube.com/watch?v=arj7oStGLkU",
    "The Power of Immersive Entertainment | Brent Bushnell | TEDxLA":
      "https://www.youtube.com/watch?v=XfHL4xEuolc"
  };

  const Science = [
    "The future we're building -- and boring | Elon Musk",
    "Sleep is your superpower | Matt Walker",
    "25 Chemistry Experiments in 15 Minutes | Andrew Szydlo | TEDxNewcastle",
    "The psychology of self-motivation | Scott Geller | TEDxVirginiaTech",
    "Being happy and living at the moment: Aisha Chaudhari at TEDxPune"
  ];

  const Technology = [
    "The internet of things | Jordan Duffy | TEDxSouthBank",
    "How a 13 year old changed 'Impossible' to 'I'm Possible' | Sparsh Shah | TEDxGateway",
    "The mind behind Linux | Linus Torvalds",
    "Your fingerprints reveal more than you think | Simona Francese",
    "How immersive technologies (AR/VR) will reform the human experience | Tiffany Lam | TEDxQueensU"
  ];

  const Entertainment = [
    "How boredom can lead to your most brilliant ideas | Manoush Zomorodi",
    "Broken English: Every Indian Kid's Ordeal | Esha Manwani | TEDxHLCC",
    "How Netflix changed entertainment -- and where it's headed | Reed Hastings",
    "Inside the mind of a master procrastinator | Tim Urban",
    "The Power of Immersive Entertainment | Brent Bushnell | TEDxLA"
  ];
  // using state in react
  const [genre, clickgenre] = useState([]);

  //clickevent function for button
  function genreclickEvent(event) {
    var userInput = event;

    switch (userInput) {
      case 1:
        clickgenre(Science);
        return;
      case 2:
        clickgenre(Technology);
        return;
      case 3:
        clickgenre(Entertainment);
        return;

      default:
        return;
    }
  }
  function onClicklink(event) {
    return <a href="item.linksdict">more</a>;
  }

  return (
    <div className="App">
      <div>
        <div id="navdiv">
          <a id="logo" href="https://www.ted.com/watch/tedx-talks">
            TED
          </a>
        </div>
        <hr />

        <div id="head-para-1">
          <span>TEDx Talks</span>
        </div>

        <div id="para-1">
          <p>
            <strong>Drive</strong> into our library of{" "}
            <strong>TEDx Talks -Clone and rating review of TEDx video </strong>{" "}
            of local speakers presenting to local audiences about everything
            from politics to pollination. All of their talks for the world to{" "}
            <strong>enjoy, explore, and use.</strong>
          </p>
        </div>

        <div id="btn-para">
          <a id="btn-click" href="https://www.youtube.com/user/TEDxTalks">
            TEDx Library
          </a>
        </div>

        <div id="genre-div">
          <a onClick={() => genreclickEvent(1)} class="genre" id="genre-1">
            Science
          </a>

          <a onClick={() => genreclickEvent(2)} class="genre" id="genre-2">
            Technology
          </a>

          <a onClick={() => genreclickEvent(3)} class="genre" id="genre-3">
            Entertainment
          </a>
        </div>
        <span>
          {genre.map((task) => {
            return (
              <li key={task.toString()}>
                <a href={linksdict[task]}>
                  <div>
                    <p>{task}</p>

                    <div>
                      <small>{Ratingdict[task]}</small>
                    </div>
                  </div>
                </a>
              </li>
            );
          })}
        </span>
      </div>
    </div>
  );
}
