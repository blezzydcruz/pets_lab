import { useEffect, useState } from "react";
import PetForm from "../components/PetForm";
import PetList from "../components/PetList";

const PetContainer = () => {

    const [pets, setPets] = useState([]);

//      DISPLAY ALL PETS     
    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets");
        const data = await response.json();
        setPets(data);
    }

    useEffect(() => {
        fetchPets();
    }, [])

//      ADD NEW PET
    const postPet = async (newPet) => {
        const response = await fetch("http://localhost:8080/pets", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPet)
        })
        const savedPet = await response.json();
        setPets( [...pets, savedPet] );
    }    

    return(
        <>
            <PetForm pets={pets} postPet={postPet}/>
            <PetList pets={pets}/>
        </>
    )
}

export default PetContainer;