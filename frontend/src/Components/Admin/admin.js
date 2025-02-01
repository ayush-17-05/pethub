import { useState } from "react";
import { Link } from "react-router-dom";

const PetManager = () => {
  const [pets, setPets] = useState([]);

  const removePet = () => {
    if (pets.length === 0) return;
    setPets(pets.slice(0, -1)); // Removes the last pet
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Pet Manager</h2>
      <div className="flex gap-4">
        <Link to={"/addPet"}>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add Pet
          </button>
        </Link>
        <button
          onClick={removePet}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove Pet
        </button>
      </div>
      <ul className="mt-4">
        {pets.map((pet) => (
          <li key={pet.id} className="bg-white p-2 rounded shadow mb-2">
            {pet.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetManager;
