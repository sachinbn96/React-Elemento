import { useRef, useState } from "react";
import MainNavigation from "./MainNavigation";

const MOVIES = [
  {
    title: "The Shawshank Redemption",
    duration: "PT142M",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    ratings: [],
    watchlist: [15291, 51417, 62289, 6146, 71389, 93707],
  },
  {
    title: "The Godfather",
    duration: "PT175M",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    ratings: [],
    watchlist: [62289, 66380, 34139, 6146],
  },
  {
    title: "The Dark Knight",
    duration: "PT152M",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    ratings: [],
    watchlist: [51417, 62289, 6146, 71389, 7001],
  },
  {
    title: "Pulp Fiction",
    duration: "PT154M",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    ratings: [],
    watchlist: [7001, 9250, 34139, 6146],
  },
  {
    title: "Schindler's List",
    duration: "PT195M",
    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    watchlist: [15291, 51417, 7001, 9250, 93707],
  },
  {
    title: "Avengers - Endgame",
    duration: "PT195M",
    actors: ["RDJ", "Chris Evans", "Chris Hemsworth"],
    watchlist: [15291, 51417, 7001, 9250, 93707],
  },
  {
    title: "Ace Ventura",
    duration: "PT195M",
    actors: ["Jim Carrey", "Courtney Cox"],
    watchlist: [15291, 51417, 7001, 9250, 93707],
  },
  {
    title: "Spider-Man",
    duration: "PT195M",
    actors: ["Tobey Maguire", "Kirsten Dunst"],
    watchlist: [15291, 51417, 7001, 9250, 93707],
  },
];

export default function SearchableDropdown() {
  const lastChange = useRef();
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange(e) {
    if (lastChange.current) clearTimeout(lastChange.current);
    lastChange.current = setTimeout(() => {
      lastChange.current = null;
      setSearchTerm(e.target.value);
    }, 500);
    // setSearchTerm(searchElement.current.value);
  }

  const searchresults = MOVIES.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(searchresults);

  return (
    <div className="m-4">
      <MainNavigation />
      <div className="flex justify-center ">
        <input
          type="text"
          placeholder="Search Movies"
          className=" border-solid border-2 border-neutral-400 px-4 text-center"
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex justify-center mt-8">
        <div>
          {searchresults &&
            searchresults.map((elem, index) => {
              return <li key={index}>{elem.title}</li>;
            })}
          {!searchresults &&
            MOVIES.map((elem, index) => {
              return <li key={index}>{elem.title}</li>;
            })}
        </div>
      </div>
    </div>
  );
}
