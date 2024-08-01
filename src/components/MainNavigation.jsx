import { Link, Outlet } from "react-router-dom";

export default function MainNavigation() {
  return (
    <>
      <div>
        <header>
          <nav>
            <ul className="flex m-4 text-blue-800">
              <li className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1">
                <Link to="/">Home</Link>
              </li>
              <li className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1">
                <Link to="/progress-bar">Progress Bar</Link>
              </li>
              <li className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1">
                <Link to="/searchable-dropdown">Searchable Dropdown</Link>
              </li>
              <li className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1">
                <Link to="/modal">Modal</Link>
              </li>
              <li className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1">
                <Link to="/accordion">Accordion</Link>
              </li>
              <li className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1">
                <Link to="/pagination">Pagination</Link>
              </li>
              <li className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1">
                <Link to="/stop-watch">Stop-watch</Link>
              </li>
              <li className="rounded-sm border-2 border-solid border-neutral-700 p-1 mx-1">
                <Link to="/timer">Countdown Timer</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
