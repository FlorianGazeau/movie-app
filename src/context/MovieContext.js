import React,  {useEffect, useState} from 'react'

import { firestore} from '../firebase/firebase'
import firebase from 'firebase'


const initialState = {
  watched: [],
  watchlist: []
}

export const MovieContext = React.createContext(initialState)

const MovieProvider = ({children}) => {

  // const [state, dispatch] = useReducer(MovieReducer, initialState)

  const [watched, setWatched] = useState([])

  useEffect(() => {
    fetchMovieFromWatched()
  }, [])

  const addMovieToWatched = (props) => {
    var WatchedMovie = firestore.collection("users").doc("C8fMC9KTszPI8cM97O9klxpTJwE3");
 
    WatchedMovie.update({
      watched: firebase.firestore.FieldValue.arrayUnion(props)
    });

    setWatched(prevwatched => [...watched, props])
  }

  const addMovieToWatchlist = (props) => {

  }

  const fetchMovieFromWatched = () => {
    console.log("here")
    var docRef = firestore.collection("users").doc("C8fMC9KTszPI8cM97O9klxpTJwE3");

    docRef.get().then((doc) => {
        if (doc.exists) {
            const data = doc.data()
             setWatched(data.watched)
        } else {
             doc.data()
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
  }


  const removeMovieToWatched = (props) => {

    var WatchedMovie = firestore.collection("users").doc("C8fMC9KTszPI8cM97O9klxpTJwE3");
 
    WatchedMovie.update({
      watched: firebase.firestore.FieldValue.arrayRemove(props)
    });

    const newArray = watched.filter((movie) => movie.id !== props.id)

    setWatched(newArray)
  }

  const value = {
    watched: watched,
    addMovieToWatched,
    addMovieToWatchlist,
    fetchMovieFromWatched,
    removeMovieToWatched
  }

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
