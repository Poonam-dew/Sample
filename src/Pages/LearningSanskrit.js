import React, { useState } from "react";
import "../Styles/LearningSanskrit.css";
import vibhooshita from "../assets/vibhooshita.ogg";

const LearningSanskrit = () => {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const read1 = () => {
    setIsExpanded1(!isExpanded1);
  };
  return (
    <>
    <div className="learn"> 
      <div className="heading">
        <h1> Sanskrit for Fun!</h1>
        <h3>
          Come let's see some witty and thought provoking Subhashitas and their
          meanings.
        </h3>
        <h3>
          Click on a shloka to read more about it, and to listen to its melody.
        </h3>
      </div>
      <h2> ALLITERATION</h2>
      <div className="shlok">
        <p style={{fontWeight:700}}>
          विभूषितानङ्गरिपूत्तमाङ्गा 
          <br></br>सद्यः कृतानेकजनार्तिभङ्गा |
          <br></br>
          मनोहरोत्तुङ्गचलत्तरङ्गा
          <br></br> गङ्गा ममाङ्गान्यमलीकरोतु ||</p>
          <span
            id="dots1"
            style={{ display: isExpanded1 ? "none" : "inline" }}
          ></span>
          <span id="more1" style={{ display: isExpanded1 ? "inline" : "none" }}>
           
             <p className="audio"><audio controls >
                <source src={vibhooshita} type="audio/ogg" />
                Your browser does not support the audio tag.
              </audio></p> 
            
            This shloka is part of Ganga-Lahari (Waves of Ganga), composed by
            Pandit Jagannath. The story behind this famous composition is as
            interesting as the essence of the shloka itself. Pandit Jagannath,
            when faced with a terrible crisis, decides to please Mother Ganga by
            singing verses in her praise. He composes 52 shlokas there and then
            on the banks of Ganga, and with each shloka, she (Mother Ganga)
            rises one step. Eventually, the great pandit becomes one with her,
            that is, he dies a noble death. This particular shloka, composed in
            the viparītākhyānikī (विपरीताख्यानिकी) meter, is the 52nd shloka of
            Ganga-Lahari, and exemplifies the genius of Pandit Jagannath. The
            repetition of the ङ्ग sound is the key feature - the literary device
            of alliteration is used, but the arrangement of the adjectives used
            for Ganga is the true beauty; remember he was doing it extempore!
            <br></br>
            <p>
              विभूषिता अनङ्ग-रिपु-उत्तम-अङ्गा The one who adorns the upper-most
              part of the enemy of Ananga [Lord of Kama], that is, the one who
              adorns the head of Lord Shiva! सद्यः कृता अनेक-जन-आर्ति-भङ्गा The
              one who immediately destroys multiple griefs of people, मनोहरा
              उत्तुङ्ग-चलत्तरङ्गा The one whose huge waves are delightful, गङ्गा
              मम अङ्गानि अमली-करोतु O Ganga, make my parts (of the body)
              clean/pure.
            </p>
          </span>
        
        <button onClick={read1}>
          {isExpanded1 ? (
            <i class="fa-solid fa-angle-up"></i>
          ) : (
            <i class="fa-solid fa-angle-down"></i>
          )}
        </button>
      </div>
      </div>
    </>
  );
};
export default LearningSanskrit;
