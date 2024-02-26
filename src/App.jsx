import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ImagesLayout from "./components/ImageLayout/ImagesLayout";

function App() {
  const [images, setImages] = useState([]);
  // console.log(images);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const headers = {
          Authorization:
            "NBhTzuZCRDTnbvHZ0WId1WRSK9UViRoTnNz7ARkYWqLHEVIBb09IDdLF",
        };
        const res = await axios.get(
          "https://api.pexels.com/v1/search?query=people",
          { headers }
        );
        setImages(await res.data.photos);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchImages();
  }, []);
  return (
    <>
      <ImagesLayout imageData={images} />
    </>
  );
}

export default App;
