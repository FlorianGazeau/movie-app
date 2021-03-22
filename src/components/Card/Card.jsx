import React, { useContext, useState } from 'react'
import { MovieContext } from '../../context/MovieContext'
import MovieControl from '../MovieControl/MovieControl'

import './Card.scss'

const Card = ({movie, type}) => {

  const TMDB_POSTER = 'https://image.tmdb.org/t/p/original/'

  const [ShowModal, setShowModal] = useState(false)


  // const { addMovieToWatched, addMovieToWatchlist, removeMovieToWatched, watched, watchlist } = useContext(MovieContext)

  const handleAction = () => {
    setShowModal(prevShowModal => !prevShowModal)
  }

  // const watchedArray = watched.find(movie => movie.id === movie.id)
  // const watchlistArray = watchlist.find(movie => movie.id === movie.id)

  // const watchedDisabled = watchedArray ? true : false
  // const watchlistDisabled = watchlistArray ? true : false

  return (
    <div className="card">
      <div className="card__wrapper">
        <img className="thumbnail" src={TMDB_POSTER + movie.poster_path} alt=""/>
        <span className="btn-plus" onClick={handleAction}><i className="fas fa-plus-circle"></i></span>
        <MovieControl movie={movie} type={type} show={ShowModal} />
        {/* <div className={ShowModal ? 'modal active' : 'modal'}>
          <div><button onClick={() => addMovieToWatchlist(movie)} disabled={watchlistDisabled}>A Voir</button></div>
          <div><button onClick={() => addMovieToWatched(movie)} disabled={watchedDisabled}>Vu</button></div>
          <div><button onClick={() => removeMovieToWatched(movie)}>Supprimer</button></div>
          <div><button onClick={handleAction}>Fermer</button></div>
        </div> */}
      </div>
    </div>
  )
}

export default Card