import React from "react";

const APODCard = ({ spaceImage }) => {
  //console.log(spaceImage);

  return (
    <div className="spaceImage-list">
      <h2>{spaceImage.title}</h2>
      <img src={spaceImage.url} />
      <div className="bottom">
        <p>Photo by {spaceImage.copyright}</p>
        <p className="explanation-paragraph">{spaceImage.explanation}</p>
      </div>
    </div>
  );
};

export default APODCard;
