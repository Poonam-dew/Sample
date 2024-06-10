import React from "react";
import "../Styles/Team.css";
import SLogo from "../assets/SLogo.png";
import vibhooshita from "../assets/vibhooshita.ogg";

const Team = () => {
  return (
    <>
      <div className="team">
      <div className="heading">
        <h1> Our Team</h1>
      </div>
      <div className="images">
      <img className="image" src={SLogo} />
      <img className="image" src={SLogo} />
      <img className="image" src={SLogo} />
      <img className="image" src={SLogo} />
      <img className="image" src={SLogo} />
      <img className="image" src={SLogo} />
      
      
      </div>
      </div>
     
    </>
  );
};
export default Team;
