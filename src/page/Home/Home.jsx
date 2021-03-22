import React, { useState, useEffect } from 'react'
import Auth from '../../components/Auth/Auth'
import Card from '../../components/Card/Card'
import { useAuth } from '../../context/AuthContext'

import './Home.scss'

const Home = () => {

  const {currentUser} = useAuth()
  const [Movies, setMovies] = useState()

  const fetchMovie = async () => {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=81aa61866a4b8deb760704a6e2f11e52&language=en-US&page=1')
    const dataArray = await res.json()
    setMovies(dataArray)
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <div>
      {currentUser ?
      <div>
        <h2>Bienvenue {currentUser.displayName}</h2>
         <div className='grid'>
          {Movies && Movies.results.map((movie, i) => {
            return (
              <Card key={i} movie={movie} type={"all"} />
            )
          })}
        </div>
      </div>
      :
      <Auth />  
    }
    </div>
  )
}

export default Home
