import { Movie } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import Card from '../../components/Card/Card'

import './Movies.scss'

const Movies = () => {

  const [Movies, setMovies] = useState()

  const fetchMovie = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=81aa61866a4b8deb760704a6e2f11e52&language=en-US&page=1')
    const dataArray = await res.json()
    setMovies(dataArray)
  }

  useEffect(() => {
    fetchMovie()
    console.log(Movies)
  }, [])

  return (
    <div className='grid'>
    {Movies && Movies.results.map((movie, i) => {
      return (
        <Card key={i} {...movie} />
      )
    })}
    </div>
  )
}

export default Movies
