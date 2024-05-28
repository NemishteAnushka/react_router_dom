import React from "react";
import { useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();
  console.dir(error);
  return (
    <div>
      <h1>{error.message}</h1>
    </div>
  );
}

export default Error;
