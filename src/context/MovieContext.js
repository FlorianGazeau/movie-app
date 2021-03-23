import React,  {useEffect, useState} from 'react'

import { firestore} from '../firebase/firebase'
import firebase from 'firebase/app'


const initialState = {
  watched: [],
  watchlist: []
}

export const MovieContext = React.createContext(initialState)

const MovieProvider = ({children}) => {

  const [watched, setWatched] = useState([])
  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    fetchMovieFromWatched()
    fetchMovieFromWatchlist()
  }, [])

  const addMovieToWatched = (props) => {
    var WatchedMovie = firestore.collection("users").doc("C8fMC9KTszPI8cM97O9klxpTJwE3");
 
    WatchedMovie.update({
      watched: firebase.firestore.FieldValue.arrayUnion(props)
    });

    setWatched(prevwatched => [...watched, props])
  }

  const addMovieToWatchlist = (props) => {
    var WatchlistMovie = firestore.collection("users").doc("C8fMC9KTszPI8cM97O9klxpTJwE3");
 
    WatchlistMovie.update({
      watchlist: firebase.firestore.FieldValue.arrayUnion(props)
    });

    setWatchlist(prevwatchlist => [...watchlist, props])
  }

  const fetchMovieFromWatched = () => {
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

  const fetchMovieFromWatchlist = () => {
    var docRef = firestore.collection("users").doc("C8fMC9KTszPI8cM97O9klxpTJwE3");

    docRef.get().then((doc) => {
        if (doc.exists) {
            const data = doc.data()
             setWatchlist(data.watchlist)
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

  const removeMovieToWatchlist = (props) => {
    var WatchlistMovie = firestore.collection("users").doc("C8fMC9KTszPI8cM97O9klxpTJwE3");
 
    WatchlistMovie.update({
      watchlist: firebase.firestore.FieldValue.arrayRemove(props)
    });

    const newArray = watchlist.filter((movie) => movie.id !== props.id)

    setWatchlist(newArray)
  }

  const moveMovieToWatched = (props) => {
    removeMovieToWatchlist(props)
    addMovieToWatched(props)
  }

  const moveMovieToWatchlist = (props) => {
    removeMovieToWatched(props)
    addMovieToWatchlist(props)
  }

  const value = {
    watched: watched,
    watchlist: watchlist,
    addMovieToWatched,
    addMovieToWatchlist,
    fetchMovieFromWatched,
    fetchMovieFromWatchlist,
    removeMovieToWatchlist,
    removeMovieToWatched,
    moveMovieToWatched,
    moveMovieToWatchlist
  }

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  )
}

export default MovieProvider
