import { useEffect, useState } from "react";

const PetContainer = () => {

    const [pets, setPets] = useState([]);

    const fetchPets = async () => {
        const response = await fetch("http://localhost:8080/pets");
        const data = await response.json;
        setPets(data);
    }

    useEffect(() => {
        fetchPets();
    }, [])

    return(
        <>
        
        </>
    )
}

export default PetContainer;