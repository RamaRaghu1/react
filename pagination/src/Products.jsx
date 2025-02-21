import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber]=useState(1)
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(pageNumber, "ujgjhgjh")

  const fetchProducts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const result = await res.json();
    setData(result);
  };

const totalPosts=data.length;
const postPerPage=4;
const noOfPages=Math.ceil(totalPosts/postPerPage);

const handleGoBack=()=>{
  setPageNumber((prev)=>prev-1);
}
const handleGoNext=()=>{
  setPageNumber((prev)=>prev+1)
}

  return (
    <div>
      {data?.slice(pageNumber *postPerPage- postPerPage,pageNumber*postPerPage).map((dt, index) => (
        <div key={dt.id} style={{ border: "2px solid black", margin: "2px" }}>
                <span>{dt.id}</span>:<p>{dt.title}</p>
          <p>{dt.body}</p>
        </div>
      ))}



<div className="" style={{display:"flex", flexDirection:"row"}}>
<button className="image-container" disabled={pageNumber===1} onClick={handleGoBack}>◀️</button>
      <div >{[...Array(noOfPages)].map((_,i)=>{
        return <span className="image-container" onClick={()=>setPageNumber(i+1)}>{i+1}</span>
      })}</div>

<button className="image-container" onClick={handleGoNext} disabled={pageNumber===noOfPages}>▶️</button>   
</div>

    </div>

  );
};

export default Products;
