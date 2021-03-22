import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/MovieContext'

const MovieControl = ({movie, type, show}) => {

  const [ShowModal, setShowModal] = useState(show)

  console.log(show)


  const { addMovieToWatched, addMovieToWatchlist, removeMovieToWatched, watched, watchlist } = useContext(MovieContext)

  const handleAction = () => {
    setShowModal(prevShowModal => !prevShowModal)
  }

  const watchedArray = watched.find(watchedMovie => watchedMovie.id === movie.id)
  // const watchlistArray = watchlist.find(watchlistMovie => watchlistMovie.id === movie.id)

  const watchedDisabled = watchedArray ? true : false
  const watchlistDisabled = false
// console.log(movie)
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
        <div><button onClick={() => addMovieToWatchlist(movie)} disabled={watchlistDisabled}>A Voir</button></div>
        <div><button onClick={() => removeMovieToWatched(movie)}>Supprimer</button></div>
      </>}
      {type === "watchlist" && 
        <>
          <div><button onClick={() => addMovieToWatched(movie)} disabled={watchedDisabled}>Vu</button></div>
          <div><button onClick={() => removeMovieToWatched(movie)}>Supprimer</button></div>
        </>}
    {/* // <div><button onClick={handleAction}>Fermer</button></div> */}
    </div>
  )
}

export default MovieControl