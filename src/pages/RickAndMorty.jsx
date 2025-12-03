import React, { useEffect, useState } from "react";
import CardBody from "../components/CardBody";
import Header from "../components/Header";

export default function RickAndMorty() {
  const [cards, setCards] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((res) => res.json())
      .then((data) => {
        const detailChart = data.results.map((item) => {
          return {
            image: item.image,
            name: item.name,
            species: item.species,
          };
        });
        setCards(detailChart);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(search);
  };
  const filtered = cards.filter((item) => {
    const filterName = item.name.toLowerCase().includes(keyword.toLowerCase());
    const filterSelect =
      statusFilter.toLocaleLowerCase() === "" ||
      item.species.toLowerCase() === statusFilter.toLowerCase();
    return filterName && filterSelect;
  });
  const handleReset = () => {
    setSearch("");
    setKeyword("");
    setStatusFilter("");
  };

  return (
    <>
      <Header title={"Rick And morty"} />
      <main className="p-10">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex justify-center gap-2 mb-5"
        >
          <select
            className="border-2 px-2 rounded-md"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Species</option>
            <option value="human">Human</option>
            <option value="alien">Alien</option>
            <option value="humanoid">Humanoid</option>
            <option value="poopybutthole">Poopybutthole</option>
            <option value="mythological creature">Mythological Creature</option>
            <option value="robot">Robot</option>
            <option value="animal">Animal</option>
            <option value="cronenberg">Cronenberg</option>
            <option value="disease">Disease</option>
            <option value="unknown">Unknown</option>
          </select>
          <input
            type="text"
            name="search"
            className="border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder=" search character......"
          />
          <button type="submit" className="border-2 px-2 rounded-md">
            search
          </button>
          <button
            type="reset"
            onClick={handleReset}
            className="border-2 px-2 rounded-md"
          >
            reset filter
          </button>
        </form>
        <CardBody cards={filtered} />
      </main>
    </>
  );
}
