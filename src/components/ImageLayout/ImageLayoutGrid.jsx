import React from "react";
import "./ImagesLayout.scss";
import { Audio } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";
const ImageLayoutGrid = ({
  arr1,
  arr2,
  arr3,
  isTwoColumn,
  fetchMoreImages,
}) => {
  return (
    <InfiniteScroll
      dataLength={arr1.length}
      next={fetchMoreImages}
      hasMore={true}
      loader={
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      }
    >
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
    </InfiniteScroll>
  );
};

export default ImageLayoutGrid;
