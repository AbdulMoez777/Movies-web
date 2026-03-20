import MovieCard from "../Components/MovieCard";

function Home() {
  
    const movies = [
      { id: 1, title: "John Wick", release_date: "2020" },
      { id: 2, title: "Need for speed", release_date: "2021" },
      { id: 3, title: "Fast and Furious x", release_date: "2024" },
    ];

    const handleSearch = () => {
      
    }
 
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for movies..." className="search-input" />
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
