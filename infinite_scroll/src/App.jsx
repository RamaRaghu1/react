import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const fetchImages = async (index) => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=10`
      );
      return await result.json();
    } catch (error) {
      console.log("error", error);
      return [];
    }
  };

  const getData = useCallback(async () => {
    setLoading(true);

    const data = await fetchImages(page);

    setImages((prevImages) => [...prevImages, ...data]);

    setLoading(false);
  }, [page]);



  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setIsIntersecting(entries[0].isIntersecting);
    });
    if (isIntersecting) {
      setPage((prev) => prev + 1);
      getData();
    }
    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [isIntersecting]);

  console.log(isIntersecting);

  useEffect(() => {
    const fetchInitialData = async () => {
      const data = await fetchImages(1);
      setImages(data);
    };
    fetchInitialData();
  }, []);

  return (
    <div>
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <p>{image.id}</p>
        </div>
      ))}
      <div ref={loaderRef}>{<p>Loading...</p>}</div>
    </div>
  );
}

export default App;
