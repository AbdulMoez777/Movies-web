import { useState } from "react";
import MovieCard from "../Components/MovieCard";
import "../css/Home.css"


function Home() {

  const [searchQuery, setsearchQuery] = useState("");
  
    const movies = [
      { id: 1, title: "John Wick", release_date: "2020" },
      { id: 2, title: "Need for speed", release_date: "2021" },
      { id: 3, title: "Fast and Furious x", release_date: "2024" },
    ];

    const handleSearch = (e) => {
      e.preventDefault()
      alert(searchQuery)
      setsearchQuery("")

    }
 
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
        <button type="submit" className="search-button">Search</button>
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
