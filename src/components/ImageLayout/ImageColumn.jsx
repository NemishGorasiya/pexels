import React from "react";

const ImageColumn = ({ arr }) => {
  return (
    <div className="ImageColumn">
      {arr.map((image) => {
        return (
          <div key={image.id} className="imageContainer">
            <img src={image.src.medium} alt={image.alt} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageColumn;
