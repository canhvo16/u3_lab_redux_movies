import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { LoadMovieDetails } from '../store/actions/MovieActions'

const mapStateToProps = ({ movieDetailsState }) => {
  return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
  }
}

const MovieDetails = (props) => {
  let { id } = useParams()

  useEffect(() => {
    props.fetchMovieDetails(id)
  }, [])

  let image = `https://image.tmdb.org/t/p/w500${props.movieDetailsState.movieDetails.poster_path}`
  return (
    <div>
      <section>
        <h1>{props.movieDetailsState.movieDetails.title} ({props.movieDetailsState.movieDetails.runtime} mins)</h1>
        <h3>{props.movieDetailsState.movieDetails.release_date}</h3>
        <h3>Rating: {props.movieDetailsState.movieDetails.vote_average}/10</h3>
        <img src={image} alt='poster' />
        <p>{props.movieDetailsState.movieDetails.overview}</p>
      </section>
      <Link to='/'><button>Back to Home</button></Link>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)