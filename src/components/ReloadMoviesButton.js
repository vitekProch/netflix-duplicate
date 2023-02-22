import "./ReloadMoviesButton.css"

const ReloadMovideButton = (props) =>{
    return <button onClick={props.reloadMovies} className="reload-movie-btn">Načíst filmy</button>
}

export default ReloadMovideButton