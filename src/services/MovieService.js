import Client from './index'

const API_KEY = process.env.REACT_APP_API_KEY

export const GetMovies = async () => {
  try {
    const res = await Client.get(`/discover/movie/?api_key=${API_KEY}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetMovieDetails = async (id) => {
  try {
    const res = await Client.get(`/movie/${id}?api_key=${API_KEY}`)
    return res.data
  } catch (error) {
    throw error
  }
}
