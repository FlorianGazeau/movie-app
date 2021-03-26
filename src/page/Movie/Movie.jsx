import { useParams } from 'react-router'
import { useEffect, useState } from 'react'

import './Movie.scss'

const Movie = () => {

  const TMDB_POSTER = 'https://image.tmdb.org/t/p/original/'
  const [movieData, setmovieData] = useState([])
  let { id } = useParams()

  useEffect(() => {

    const fetchMovieInfo = async() => {
      const resp = await fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=81aa61866a4b8deb760704a6e2f11e52&language=en-US')
      const data = await resp.json()
      setmovieData(data)
      console.log(data)
    }

    fetchMovieInfo()
  }, [])
  return (
    <div className="movie">
      <div className="movie__content">
        <div className="movie__thumbnail">
          <img src={TMDB_POSTER + movieData.poster_path} alt={movieData.original_title}/>
        </div>
        <div className="movie__info">
          <h1>{movieData.original_title}</h1>
          <h2>{movieData.release_date}</h2>
          <div className="movie__buttons">
            <button>A Voir</button>
            <button>Vu</button>
          </div>
          <div className='movie__synopsis'>
            <h3>Synopsis: </h3>
            <p>{movieData.overview}</p>
          </div>
          <div className='movie__actors'>
            <p>Réal: <span>Spike Jonze</span></p>
            <p>Réal: <span>Spike Jonze</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
