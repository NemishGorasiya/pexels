import React from "react";
import "./ImagesLayout.scss";
import { Audio } from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageColumn from "./ImageColumn";
const ImageLayoutGrid = ({
  arr1,
  arr2,
  arr3,
  isTwoColumn,
  fetchImages,
  hasMore,
}) => {
  return (
    <InfiniteScroll
      dataLength={arr1.length}
      next={fetchImages}
      hasMore={hasMore}
      loader={
        <div
          className="loader"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "30px auto",
          }}
        >
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      }
    >
      <div className="LayoutContainer">
        <ImageColumn arr={arr1} />
        <ImageColumn arr={arr2} />
        {!isTwoColumn && <ImageColumn arr={arr3} />}
      </div>
    </InfiniteScroll>
  );
};

export default ImageLayoutGrid;
