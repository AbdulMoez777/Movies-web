import React from "react";
import MovieCard from "./Components/MovieCard";

const App = () => {
  return (
    <>
      <MovieCard movie={{title: "Need for Speed", release_date: "2026" }} />
    </>
  );
};

export default App;
