import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage";
import Packages from "./pages/packages";
import Restaurant from "./pages/restaurant";
import Contact from "./pages/contact";
import Faqs from "./pages/faqs";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/packages", element: <Packages /> },
  { path: "/restaurant", element: <Restaurant /> },
  { path: "/contact", element: <Contact /> },
  { path: "/faqs", element: <Faqs /> }
  
]);



function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
