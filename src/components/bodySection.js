import React from "react";
import logo from "../assets/family.jpg";
import "../Style/bodySection.css";
const BodySection = () => {
  return (
    <div>
      <div className="imageSection">
        <img src={logo} className="image"></img>
      </div>
      <div className="Banner">
        <h1 className="h1line">Think Health. Think Massage</h1>
        <p className="p1">
          We are open 9am to 6pm; Monday through Sunday. if you would like to
          schedule an appointment with us, please call us at 987-3210 today!
        </p>
        <div className="buttons">
          <button className="learnMore">LEARN MORE ABOUT US</button>
          <button className="contact">CONTACT US TODAY</button>
        </div>
      </div>
      <div className="three-lines">
        <p className="line1">
          Are you looking for a professinal, registered massage therapist?
          Sample Massage Therapy has 4 registered massage therapist who can
          provide clinical massage. Therapy has 4 registered massage therapist
          who can provide clinical massage.
        </p>
        <p className="line2">
          Are you looking for a professinal, registered massage therapist?
          Sample Massage Therapy has 4 registered massage therapist who can
          provide clinical massage. Therapy has 4 registered massage therapist
          who can provide clinical massage.
        </p>
        <p className="line3">
          Are you looking for a professinal, registered massage therapist?
          Sample Massage Therapy has 4 registered massage therapist who can
          provide clinical massage. Therapy has 4 registered massage therapist
          who can provide clinical massage.
        </p>
      </div>
         <hr></hr>
    </div>
  );
};

export default BodySection;
