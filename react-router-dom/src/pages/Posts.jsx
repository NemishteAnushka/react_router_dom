import React, { useEffect, useState } from "react";
import Post from "./Post";
const endpoints = "https://jsonplaceholder.typicode.com/posts";
function Posts() {
  const [data, setData] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(endpoints);
      const resdata = await response.json();
      console.log(resdata);
      setData(resdata);
    }
    fetchData();
  }, []);
  return (
    <div>
      {data &&
        data.map((items) => {
          return <Post {...items} key={items.id} />;
        })}
    </div>
  );
}

export default Posts;
