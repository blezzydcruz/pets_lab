import { useState } from "react";

const PetForm = () => {

    const [statePet, setStatePet] = useState(
        {
            name: "",
            type: "",
            breed: "",
            age: 0
        }
    )

    return(
        <form id="pet-form">
            <h3>Add a new pet</h3>

            <label htmlFor="pet-name">Pet Name:</label>
            <input 
                id="pet-name"
                name="name"
                type="text"
                placeholder="enter pet name"
            />

            <label htmlFor="pet-type">Pet Type:</label>
            <select 
                id="pet-type"
                name="type"
                defaultValue="select-type"
            >
                <option disabled-value="select-type">Choose pet type</option>
            </select>

            <label htmlFor="pet-breed">Pet Name:</label>
            <input 
                id="pet-breed"
                name="name"
                type="text"
                placeholder="enter pet breed"
            />

            <label htmlFor="pet-age">Pet Name:</label>
            <input 
                id="pet-age"
                name="age"
                type="number"
                min={0}
                max={100}
            />

            <input type="submit" value="Add Pet"/>

        </form>
    )
}

export default PetForm;