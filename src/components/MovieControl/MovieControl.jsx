import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/MovieContext'

const MovieControl = ({movie, type, show}) => {

  const { addMovieToWatched, addMovieToWatchlist, removeMovieToWatched, removeMovieToWatchlist, moveMovieToWatched, moveMovieToWatchlist, watched, watchlist } = useContext(MovieContext)


  const watchedArray = watched.find(watchedMovie => watchedMovie.id === movie.id)
  const watchlistArray = watchlist.find(watchlistMovie => watchlistMovie.id === movie.id)

  const watchedDisabled = watchedArray ? true : false
  const watchlistDisabled = watchlistArray ? true : false
  return (
    <div className={show ? 'modal active' : 'modal'}>

      {type === "all" && 
        <>
          <div><button onClick={() => addMovieToWatchlist(movie)} disabled={watchlistDisabled}>A Voir</button></div>
          <div><button onClick={() => addMovieToWatched(movie)} disabled={watchedDisabled}>Vu</button></div>
        </>
      }

      {type === "watched" && 
      <>
        <div><button onClick={() => moveMovieToWatchlist(movie)} disabled={watchlistDisabled}>A Voir</button></div>
        <div><button onClick={() => removeMovieToWatched(movie)}>Supprimer</button></div>
      </>}
      {type === "watchlist" && 
        <>
          <div><button onClick={() => moveMovieToWatched(movie)} disabled={watchedDisabled}>Vu</button></div>
          <div><button onClick={() => removeMovieToWatchlist(movie)}>Supprimer</button></div>
        </>}
    </div>
  )
}

export default MovieControl