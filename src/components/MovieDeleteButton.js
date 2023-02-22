import "./MovieDeleteButton.css"

const MovieDeleteButton = (props) => {
    return <button className="movie-delete-btn" onClick={props.deleteMovie}>Vymazat film</button>
}

export default MovieDeleteButton