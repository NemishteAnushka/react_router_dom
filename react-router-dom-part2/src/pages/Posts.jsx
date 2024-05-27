import React from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";
const endpoints = "https://jsonplaceholder.typicode.com/posts";

//in normal funtion
//component mount --> then fetchData

//in loader functions
//fetch data --> component mounts

//version react-router-dom 6.4+

//loader functions

// step 1 provide loader function to route
//step 2 get data in component using useLoaderData

export async function fetchData() {
  const response = await fetch(endpoints);
  const resdata = await response.json();
  return resdata;
}
function Posts() {
  const posts = useLoaderData();
  console.log(posts);

  return (
    <div>
      <h2>Posts</h2>
      {posts &&
        posts.map((items) => {
          return <Post {...items} key={items.id} />;
        })}
    </div>
  );
}

export default Posts;
