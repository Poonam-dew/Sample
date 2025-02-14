import React from 'react';
import '../Styles/CourseCard.css';

const CourseCard = ({
  img,
  heading,
  subheading,
  info,
  setModal_1,
  setButtonText1,
  buttonText1,
  handleModalClose
}) => {
  return (
    <div className="course_card">
      <img src={img} className="course_img" alt="Course" />
      <div className="course_card_info">
        <h2 className="course_card_heading">{heading}</h2>
        <h3 className="course_card_subheading">{subheading}</h3>
        <ul className="courselinks">
          {info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div
          className="knowbtn"
          onClick={() => {
            setModal_1(true);
            setButtonText1(buttonText1 === 'KNOW MORE' ? 'KNOW MORE' : 'KNOW MORE');
          }}
        >
          {buttonText1}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
