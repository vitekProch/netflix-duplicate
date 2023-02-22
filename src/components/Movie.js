import "./Movie.css"
import data from "../data"

const Movie = () => {
    return(
        <div className="all-movies">
            {
                data.map( (oneMovie) =>{
                    const{id, image, title, age, tags, description} = oneMovie
                    return (
                        <div key={id} className="one-movie">
                            <img src={image} alt={title} />
                            <h2>{title}</h2>
                            <p>{age}</p>
                            <p>{tags}</p>
                            <p>{description}</p>
                            <button>Vymazat film</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Movie