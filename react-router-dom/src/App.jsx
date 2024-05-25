//step 1
//import 4 things
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Contact, Posts, Error, GetSinglePost } from "./pages";
import RootElement from "./layout/RootElement";
import RequiredLoginAuth from "./components/RequiredLoginAuth";
import Login from "./pages/Login";

//step 2 : create routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootElement />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* RequiredLoginAuth */}
      {/* The purpose of this component is to check if a user is logged in before allowing them to access the Posts component. */}
      {/* How It Works
          When a user navigates to /posts, the Route component will match this path.
          Instead of rendering the Posts component directly, it renders the RequiredLoginAuth component.
          RequiredLoginAuth is responsible for checking if the user is authenticated.
          If the user is authenticated, RequiredLoginAuth will render its children, which in this case is the Posts component.
          If the user is not authenticated, RequiredLoginAuth might redirect the user to a login page or show an appropriate message.
      */}
      <Route
        path="posts"
        element={
          <RequiredLoginAuth>
            <Posts />
          </RequiredLoginAuth>
        }
      />
      <Route path="posts/:id" element={<GetSinglePost />} />
      <Route path="/login" element={<Login />} />
      {/* error */}
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
