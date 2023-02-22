import "./AllDeleteButton.css"

const AllDeleteButton = (props) =>{
    return <button onClick={props.deleteAllMovie} className="main-delete-btn">Vymazat vše</button>
}

export default AllDeleteButton