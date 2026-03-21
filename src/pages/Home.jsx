import { useState, useEffect } from "react";
import MovieCard from "../Components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setsearchQuer] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() =>  {}, [])

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setsearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
