import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts`
    );
    const result = await res.json();
    setData(result);
  };

const totalPosts=data.length;
const postPerPage=10;
const noOfPages=Math.ceil(totalPosts/postPerPage);


  return (
    <div>
      {data?.slice(10,20).map((dt, index) => (
        <div key={dt.id} style={{ border: "2px solid black", margin: "2px" }}>
                <span>{dt.id}</span>:<p>{dt.title}</p>
          <p>{dt.body}</p>
        </div>
      ))}

      <div>{[...Array(data.length / 10)].map((_,i)=>{
        return <span>{i+1}</span>
      })}</div>
    </div>
  );
};

export default Products;
