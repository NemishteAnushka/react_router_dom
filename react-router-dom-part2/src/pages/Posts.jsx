import React from "react";
import Post from "./Post";
import { redirect, useLoaderData } from "react-router-dom";

//in normal funtion
//component mount --> then fetchData

//in loader functions
//fetch data --> component mounts

//version react-router-dom 6.4+

//loader functions

// step 1 provide loader function to route
//step 2 get data in component using useLoaderData

//handling error in loader functions

//step 1 provide errorElement to the route for example <Error/>
//step 2 use  useRouteError hook in <Error/> Element
//step 3 if you want to provide with message you can throw new error with message
//step 4 message will be store in useRouteError hook

export async function fetchData(args, { isLoggedIn }) {
  if (!isLoggedIn) {
    return redirect("/login");
  }
  const endpoints = "https://jsonplaceholder.typicode.com/posts";

  const response = await fetch(endpoints);
  if (!response.ok) {
    throw new Error("Something Went Wrong");
  }
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
