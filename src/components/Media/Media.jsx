import React from "react";
import "./Media.Style.css";

const Media = ({ media }) => {
  return (
    <div className="question-media">
      <img className="question-img" src={media} alt="" />
    </div>
  );
};

export default Media;
