import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const url = 'http://localhost:3001/pets'

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const onChangeType = (newFilter) => {
    setFilters({type:newFilter})
  }
  console.log(filters)

  const onFindPetsClick = async () => {
    let newURL
    if (filters.type !== 'all') {
      newURL = `${url}?type=${filters.type}`
    } else {
      newURL = url
    }
    const res = await fetch(newURL)
    const data = await res.json()
    setPets(data)
    console.log(newURL)
  }

  const onAdoptPet = (id) => {
    const newPets = pets.map((pet) => {
      if (pet.id === id){
        pet.isAdopted = true
        return pet
      } else {
        return pet
      }
    })
    setPets(newPets)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
