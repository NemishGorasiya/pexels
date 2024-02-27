import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ImagesLayout from "./components/ImageLayout/ImagesLayout";
import { HEADERS } from "./API/apiKey.js";

function App() {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const fetchImages = async () => {
    try {
      const res = await axios.get(
        `https://api.pexels.com/v1/curated?page=${pageNumber}&per_page=15`,
        { HEADERS }
      );
      const newImages = await res.data.photos;
      setImages((prev) => [...prev, ...newImages]);
      setPageNumber((prev) => prev + 1);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <ImagesLayout imageData={images} fetchImages={fetchImages} />
    </>
  );
}

export default App;
