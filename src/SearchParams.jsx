import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import AdoptPetContext from "./AdoptedPetContext";
import Results from "./Results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
import Results from "./Results";

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location:"",
        animal:"",
        breed:"",
    });
    const [animal , setAnimal] = useState("");
    const [breeds] = useBreedList(animal);
    const [adoptedPet] = useContext(AdoptPetContext);

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const obj = {
                    animal: formData.get("animal") ?? "",
                    breed: formData.get("breed") ?? "",
                    location: formData.get("location") ?? "",
                };
                setRequestParams(obj);
              }}
            >
                {
                    adoptedPet ? (
                        <div className="pet image-container">
                            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
                        </div>
                    ) : null
                }
                <label htmlFor="location">
                    Location
                    <input
                     name="location"
                     id="location" 
                     placeholder="location"
                      />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                     onChange={e => {
                        setAnimal(e.target.value);
                     }}
                     id="animal" 
                     value={animal} 
                     placeholder="animal"
                     >
                        <option />
                        {ANIMALS.map((animal) => (
                            <option key={animal}>{animal}</option>
                        ))}

                     </select>
                </label>

                <label htmlFor="breed">
                    Breed
                    <select
                     id="breed" 
                     disabled={breeds.length === 0}
                     name="breed"
                     >
                        <option />
                        {breed.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}

                     </select>
                </label>

                <button type="submit">Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;