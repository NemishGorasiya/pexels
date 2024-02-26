import React from "react";
import "./ImagesLayout.scss";
const ImageLayoutGrid = ({ arr1, arr2, arr3, isTwoColumn }) => {
  return (
    <div className="LayoutContainer">
      <div className="ImageColumn">
        {arr1.map((image) => {
          return (
            <div key={image.id} className="imageContainer">
              <img src={image.src.medium} alt={image.alt} />
            </div>
          );
        })}
      </div>
      <div className="ImageColumn">
        {arr2.map((image) => {
          return (
            <div key={image.id} className="imageContainer">
              <img src={image.src.medium} alt={image.alt} />
            </div>
          );
        })}
      </div>
      {!isTwoColumn && (
        <div className="ImageColumn">
          {arr3.map((image) => {
            return (
              <div key={image.id} className="imageContainer">
                <img src={image.src.medium} alt={image.alt} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ImageLayoutGrid;
