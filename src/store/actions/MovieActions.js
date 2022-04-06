import { GetMovies, GetMovieDetails } from '../../services/MovieService'
import { GET_MOVIES, GET_MOVIE_DETAILS } from '../types'

export const LoadMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMovies()
      dispatch({
        type: GET_MOVIES,
        payload: movies.results
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieDetails = (id) => {
  return async (dispatch) => {
    try {
      const movieDetails = await GetMovieDetails(id)
      console.log(movieDetails)
      dispatch({
        type: GET_MOVIE_DETAILS,
        payload: movieDetails
      })
    } catch (error) {
      throw error
    }
  }
}
