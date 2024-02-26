import React, { useEffect, useState } from "react";
import ImageLayoutGrid from "./ImageLayoutGrid";
import "./ImagesLayout.scss";

const ImagesLayout = ({ imageData, fetchMoreImages }) => {
  const [isTwoColumn, setIsTwoColumn] = useState(window.innerWidth <= 900);
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let column1Height = 0;
  let column2Height = 0;
  let column3Height = 0;
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [isTwoColumn]);

  function handleResize() {
    if (window.innerWidth > 900 && isTwoColumn) {
      setIsTwoColumn(false);
    } else if (window.innerWidth <= 900 && !isTwoColumn) {
      setIsTwoColumn(true);
    }
  }

  function handleLoadNewImages() {
    // const container = event.target;
    console.log("container");
  }

  if (!isTwoColumn) {
    // arr1 = imageData.filter((image, idx) => idx % 2 === 0);
    // arr2 = imageData.filter((image, idx) => idx % 2 === 1);
    // arr3 = [];
    // console.log(arr1);
    // console.log(arr2);
    imageData.forEach((image) => {
      if (
        column1Height === Math.min(column1Height, column2Height, column3Height)
      ) {
        arr1.push(image);
        column1Height += (window.innerWidth * image.height) / (image.width * 3);
        column1Height = +column1Height.toFixed(2); // + to convert to int/float
      } else if (column2Height === Math.min(column2Height, column3Height)) {
        arr2.push(image);
        column2Height += (window.innerWidth * image.height) / (image.width * 3);
        column2Height = +column2Height.toFixed(2);
      } else {
        arr3.push(image);
        column3Height += (window.innerWidth * image.height) / (image.width * 3);
        column3Height = +column3Height.toFixed(2);
      }
      // console.log("column1Height", column1Height);
      // console.log("column2Height", column2Height);
      // console.log("column3Height", column3Height);
    });
  } else {
    // arr1 = imageData.filter((image, idx) => idx % 3 === 0);
    // arr2 = imageData.filter((image, idx) => idx % 3 === 1);
    // arr3 = imageData.filter((image, idx) => idx % 3 === 2);
    // console.log(arr1);
    // console.log(arr2);
    // console.log(arr3);
    imageData.forEach((image) => {
      if (column1Height <= column2Height) {
        arr1.push(image);
        column1Height += (window.innerWidth * image.height) / (image.width * 2);
        column1Height = +column1Height.toFixed(2);
      } else {
        arr2.push(image);
        column2Height += (window.innerWidth * image.height) / (image.width * 2);
        column2Height = +column2Height.toFixed(2);
      }
      // console.log("column1Height", column1Height);
      // console.log("column2Height", column2Height);
      // console.log("column3Height", column3Height);
    });
  }
  return (
    <ImageLayoutGrid
      arr1={arr1}
      arr2={arr2}
      arr3={arr3}
      isTwoColumn={isTwoColumn}
      fetchMoreImages={fetchMoreImages}
    />
  );
};

export default ImagesLayout;
