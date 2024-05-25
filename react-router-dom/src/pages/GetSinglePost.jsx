import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function GetSinglePost() {
  const { id } = useParams();
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState("");
  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`${url}/${id}`);
      const data = await res.json();
      console.log(data);
      setPost(data);
    }
    fetchPost();
  }, []);
  return (
    <div style={{ margin: "1rem", padding: "1rem", border: "1px solid black" }}>
      <h2>{post.id}</h2>
      <h3>{post.title}</h3>
    </div>
  );
}

export default GetSinglePost;
