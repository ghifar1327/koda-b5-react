  import React, {useState } from "react";
  import CardBody from "../components/CardBody";
  import Header from "../components/Header";
  import { Outlet } from "react-router";
  import useFetch from "../hooks/useFecht";

  export default function RickAndMorty() {
    // const [cards, setCards] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [search, setSearch] = useState("");
    const [spesiesFilter, setSpeciesFilter] = useState("");
    const [data, loading, error] = useFetch(
      "https://rickandmortyapi.com/api/character?page=1"
    );
    // useEffect(() => {
    //   fetch("https://rickandmortyapi.com/api/character?page=1")
    //     .then((res) => res.json())
    //     .then((data) => {
    //       const detailChart = data.results.map((item) => {
    //         return {
    //           id: item.id,
    //           image: item.image,
    //           name: item.name,
    //           species: item.species,
    //         };
    //       });
    //       setCards(detailChart);
    //       console.log(detailChart)
    //       console.log(data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }, []);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    const handleSubmit = (e) => {
      e.preventDefault();
      setKeyword(search);
    };
    const filtered = data.results.filter((item) => {
      const filterName = item.name.toLowerCase().includes(keyword.toLowerCase());
      const filterSelect =
        spesiesFilter.toLocaleLowerCase() === "" ||
        item.species.toLowerCase() === spesiesFilter.toLowerCase();
      return filterName && filterSelect;
    });
    const handleReset = () => {
      setSearch("");
      setKeyword("");
      setSpeciesFilter("");
    };

    return (
      <>
        <Header title="Rick And morty" />
        <main className="p-10">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex justify-center gap-2 mb-5"
          >
            <select
              className="border-2 px-2 rounded-md"
              value={spesiesFilter}
              onChange={(e) => setSpeciesFilter(e.target.value)}
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
          <Outlet />
        </main>
      </>
    );
  }
