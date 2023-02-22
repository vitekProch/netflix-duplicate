import "./Movie.css"
import data from "../data"
import MovieDeleteButton from "./MovieDeleteButton"
import AllDeleteButton from "./AllDeleteButton"

import { useState } from "react"

const Movie = () => {
    const[movieList, setMovieList] = useState(data)

    const deleteMovieHandler = (id) => {
        const filteredMovies = movieList.filter( (oneMovie) => {
            return oneMovie.id !== id
        })
        setMovieList(filteredMovies)
    }

    const deleteAllMovieHandler = () => {
        setMovieList([])
    }

    return(
        <section>
            <div className="all-movies">
                {
                    movieList.map( (oneMovie) =>{
                        const{id, image, title, age, tags, description} = oneMovie
                        return (
                            <div key={id} className="one-movie">
                                <img src={image} alt={title} />
                                <h2>{title}</h2>
                                <p>{age}</p>
                                <p>{tags}</p>
                                <p>{description}</p>
                                <MovieDeleteButton deleteMovie={() => {deleteMovieHandler(id)}}/>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <AllDeleteButton deleteAllMovie={deleteAllMovieHandler}/>
            </div>
        </section>
    )
}

export default Movie