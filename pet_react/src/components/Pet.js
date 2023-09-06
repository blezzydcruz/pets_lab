const Pet = ({ pet }) => {

    return(
        
        <div className="pet">
            <h4>{pet.name}</h4>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>    
            <button>Delete</button>
        </div>
        
    )
}

export default Pet;