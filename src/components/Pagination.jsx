import { useState } from "react";
import MainNavigation from "./MainNavigation";

const fruits = [
  "apple",
  "orange",
  "pineapple",
  "grapes",
  "watermelon",
  "cantaloupe",
  "mango",
  "moosambi",
  "tomato",
];

export default function Pagination() {
  const [fruitsPerPage, setFruitsPerPage] = useState(3);
  const [pageNum, setPageNum] = useState(1);
  const endIndex = pageNum * fruitsPerPage;
  const startIndex = endIndex - fruitsPerPage;
  const slicedFruits = fruits.slice(startIndex, endIndex);
  const numOfPages = fruits.length / fruitsPerPage + 1;

  function handlePageLimitChange(e) {
    setFruitsPerPage(e.target.value);
  }

  function handlePageChange(page) {
    setPageNum(page);
  }

  return (
    <div>
      <MainNavigation />
      {/* select dropdown for page limit */}
      <div className="flex justify-center border-2 border-solid border-neutral-500 mx-72 p-4">
        <label className="mx-4" htmlFor="selectedPageLimit">
          Select the Page Limit
        </label>
        <select
          className="border-2 border-solid border-neutral-600 mx-4"
          name="selectedPageLimit"
          id="selectedPageLimit"
          onChange={handlePageLimitChange}
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
      {/* sliced fruits */}
      <div className="flex justify-center mt-4">
        <ul>
          {slicedFruits.length &&
            slicedFruits.map((fruit, index) => {
              return <li key={index}>{fruit}</li>;
            })}
        </ul>
      </div>
      {/* Page numbers */}
      <div className="flex justify-center m-4">
        {Array.from({ length: numOfPages }, (_, i) => i + 1).map((elem) => {
          return (
            <button
              key={elem}
              className="border-2 border-neutral-400 p-2 ml-1"
              onClick={() => handlePageChange(elem)}
            >
              {elem}
            </button>
          );
        })}
      </div>
    </div>
  );
}
