import { useState } from "react";

const PetForm = ( { pets, postPet }) => {

    const [statePet, setStatePet] = useState(
        {
            name: "",
            type: null,
            breed: "",
            age: 0
        }
    )

    const handleChange = (event) => {
        let propertyName = event.target.name;
        let clonedPet = {...statePet};
        clonedPet[propertyName] = event.target.value;
        setStatePet(clonedPet);
    } 

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postPet(statePet)
        setStatePet({
            name: "",
            type: null,
            breed: "",
            age: 0
        })
    }

    const petTypeOptions = pets.map((pet) => {
        return <option key={pet.id} value={pet.id}>{pet.type}</option>
    })


    return(
        <form id="pet-form" onSubmit={handleFormSubmit}>
            <h3>Add a new pet</h3>

            <label htmlFor="pet-name">Name:</label>
            <input 
                id="pet-name"
                name="name"
                type="text"
                placeholder="enter pet name"
                onChange={handleChange}
                value={statePet.name}
            />

            <label htmlFor="pet-type">Type:</label>
            <select 
                id="pet-type"
                name="type"
                defaultValue="select-type"
                onChange={handleChange}
            >
                <option disabled-value="select-type">Choose pet type</option>
                {petTypeOptions}
            </select>

            <label htmlFor="pet-breed">Breed:</label>
            <input 
                id="pet-breed"
                name="breed"
                type="text"
                placeholder="enter pet breed"
                onChange={handleChange}
                value={statePet.breed}
            />

            <label htmlFor="pet-age">Age:</label>
            <input 
                id="pet-age"
                name="age"
                type="number"
                min={1}
                max={100}
                onChange={handleChange}
                value={statePet.age}
            />

            <input type="submit" value="Add Pet"/>
            
        </form>
    )
}

export default PetForm;