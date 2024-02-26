import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ImagesLayout from "./components/ImageLayout/ImagesLayout";

function App() {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(2);
  // console.log(images);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const headers = {
          Authorization:
            "NBhTzuZCRDTnbvHZ0WId1WRSK9UViRoTnNz7ARkYWqLHEVIBb09IDdLF",
        };
        const res = await axios.get(
          "https://api.pexels.com/v1/curated?page=1&per_page=15",
          { headers }
        );
        setImages(await res.data.photos);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchImages();
  }, []);

  function fetchMoreImages() {
    console.log("calleddddd");
    const fetchImages = async () => {
      try {
        const headers = {
          Authorization:
            "NBhTzuZCRDTnbvHZ0WId1WRSK9UViRoTnNz7ARkYWqLHEVIBb09IDdLF",
        };
        const res = await axios.get(
          `https://api.pexels.com/v1/curated?page=${pageNumber}&per_page=15`,
          { headers }
        );
        const temp = await res.data.photos;
        setImages((prev) => [...prev, ...temp]);
        console.log(images);
      } catch (error) {
        console.error(error.message);
      }
      setPageNumber((prev) => prev + 1);
    };
    fetchImages();
  }

  return (
    <>
      <ImagesLayout imageData={images} fetchMoreImages={fetchMoreImages} />
    </>
  );
}

export default App;
