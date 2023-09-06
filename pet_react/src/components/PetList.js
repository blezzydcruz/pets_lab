import Pet from "./Pet";

const PetList = ({ pets }) => {

    const petComponents = pets.map(pet => {
        return <Pet 
            key={pet.id}
            pet={pet}
        />
    });

    return(
        <div id="pet-list">
            <h3>List of Pets</h3>
            <hr />

            {petComponents}
        </div>
    )
}

export default PetList;