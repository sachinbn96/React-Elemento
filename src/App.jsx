import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ProgressBar from "./components/ProgressBar";
import SearchableDropdown from "./components/SearchableDropdown";
import ModalExample from "./components/ModalExample";
import Accordion from "./components/Accordion";
import Pagination from "./components/Pagination";
import StopWatch from "./components/StopWatch";
import Timer from "./components/Timer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/progress-bar",
    element: <ProgressBar />,
  },
  {
    path: "/searchable-dropdown",
    element: <SearchableDropdown />,
  },
  {
    path: "/modal",
    element: <ModalExample />,
  },
  {
    path: "/accordion",
    element: <Accordion />,
  },
  {
    path: "/pagination",
    element: <Pagination />,
  },
  {
    path: "/stop-watch",
    element: <StopWatch />,
  },
  {
    path: "/timer",
    element: <Timer />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
