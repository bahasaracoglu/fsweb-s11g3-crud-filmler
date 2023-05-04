import React from "react";

import MovieListItem from "./MovieListItem";
import MovieFooter from "./MovieFooter";
import FavoriteMovieList from "./FavoriteMovieList";

const MovieList = (props) => {
  const { movies, favoriteMovies } = props;

  return (
    <div className="flex-1">
      <div className="overflow-hidden bg-white rounded-md shadow mb-4 sm:min-h-[400px]  dark:bg-neutral-300">
        <table className="table-auto border-collapse text-left w-full  dark:bg-neutral-200">
          <thead>
            <tr className="border-zinc-200 border-b   dark:text-white">
              <th className="pl-4  dark:bg-neutral-500">İsim</th>
              <th className="dark:bg-neutral-500">Yönetmen</th>
              <th className="dark:bg-neutral-500">Tür</th>
              <th className="dark:bg-neutral-500">Metascore</th>
              <th className="dark:bg-neutral-500"></th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {movies.map((movie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
          </tbody>
        </table>
      </div>
      <MovieFooter totalMovies={movies.length} />
    </div>
  );
};

export default MovieList;
