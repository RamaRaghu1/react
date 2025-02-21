import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1); // Start at page 1
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true); // Track if there's more data

  const fetchImages = useCallback(async (index) => {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${index}&_limit=9`
      );
      const data = await result.json();
      return data;
    } catch (error) {
      console.error("Error fetching images:", error);
      // You might want to set an error state to display an error message
      return []; // Return an empty array on error to avoid breaking the logic
    }
  }, []);

  const loaderRef = useRef(null);

  const getData = useCallback(async () => {
    if (loading || !hasMore) return; // Don't fetch if already loading or no more data

    setLoading(true);
    try {
      const data = await fetchImages(page);

      if (data.length === 0) {
        setHasMore(false); // No more data from the API
      } else {
        setImages((prev) => [...prev, ...data]);
        setPage((prevPage) => prevPage + 1); // Increment page
      }
    } finally {
      setLoading(false);
    }
  }, [fetchImages, hasMore, loading, page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getData();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current && hasMore) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [getData, hasMore]);

  return (
    <div>
      {images.map((image, index) => (
        <div className="image-container" key={index}> {/* Add key prop! */}
          <p>{image.title}</p>
          <img src={image.url} alt={image.title} /> {/* Display the image */}
        </div>
      ))}

      <div ref={loaderRef}>
        {loading && <p>Loading...</p>}
        {!hasMore && <p>No more images to load.</p>}
      </div>
    </div>
  );
}

export default App;