import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailCharacter() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchDetail() {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await res.json();
      setCharacter(data);
    }
    fetchDetail();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">{character.name}</h1>
      <img src={character.image} alt={character.name} className="w-60 rounded-md" />

      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin?.name}</p>
      <p>Location: {character.location?.name}</p>
    </div>
  );
}
