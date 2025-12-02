import React, { useEffect, useState } from "react";
import CardBody from "../components/CardBody";

export default function RickAndMorty() {
  const [cards, setCards] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?")
      .then((res) => res.json())
      .then((data) => {
        const detailChart = data.results.map((item) => {
          return {
            image: item.image,
            name: item.name,
            status: item.status,
          };
        });
        setCards(detailChart);
        console.log(detailChart);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword(search);
  };
  const filtered = cards.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  const handleReset = () => {
    setSearch("");
    setKeyword("");
  };

  return (
    <>
      <header className="text-center text-6xl font-bold">Rick And Morty</header>
      <main className="p-10">
        <form action="" onSubmit={handleSubmit} className="flex justify-center gap-2 mb-5">
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
          <button type="reset" onClick={handleReset} className="border-2 px-2 rounded-md">
            reset filter
          </button>
        </form>
        <CardBody cards={filtered} />
      </main>
    </>
  );
}
