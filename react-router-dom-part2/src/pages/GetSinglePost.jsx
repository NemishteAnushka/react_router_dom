import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(`${url}/${params.id}`);
  //handle error
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
}
function GetSinglePost() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div style={{ margin: "1rem", padding: "1rem", border: "1px solid black" }}>
      <h2>{data.id}</h2>
      <h3>{data.title}</h3>
    </div>
  );
}

export default GetSinglePost;
