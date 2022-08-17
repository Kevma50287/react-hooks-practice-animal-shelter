import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const renderPets = pets.map((pet) => {
    return (
      <Pet pet={pet} onAdoptPet={onAdoptPet} key={pet.id}/>
    )
  })
  return <div className="ui cards">{renderPets}</div>;
}

export default PetBrowser;
