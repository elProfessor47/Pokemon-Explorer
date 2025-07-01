import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const Pokemon = () => {
  const API = "https://pokeapi.co/api/v2/pokemon?limit=256"; //total limit 1302
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")

  const fetchPokemons = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (currPokemon) => {
        const res = await fetch(currPokemon.url);
        const data = await res.json();
        return data;
      });

      const detailedResponses = await Promise.all(detailedPokemonData);
      console.log(detailedResponses);
      setPokemons(detailedResponses);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
      setIsLoading(false)
      setError(error)
    }
  };

  const searchedPokemons = pokemons.filter((currPokemon) => (
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  ))

  useEffect(() => {
    fetchPokemons();
  }, []);

  if(isLoading) {
    return <div className="flex justify-center bg-[#e5ebfc] w-screen h-screen">
        <h1 className="text-4xl p-5 tracking-wide">Loading...</h1>
    </div>
  }

  if(error) {
    return <div className="flex justify-center bg-[#e5ebfc] w-screen h-screen">
        <h1 className="text-4xl p-5">{error.message}</h1>
    </div>
  }

  return (
    <section className="min-h-screen w-full bg-[#e5ebfc] pb-12">
      <div className="flex justify-center">
        <h1 className="text-2xl pt-4 pb-2 font-semibold tracking-wide 450:text-3xl sm:text-4xl lg:text-5xl 1150:text-6xl ">
          Pokemon-Explorer
        </h1>
      </div>
      <div className="flex justify-center">
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="bg-white px-5 pt-2 pb-1 outline-none border-b-3 border-black m-4 sm:h-12 "
          placeholder="Enter Pokemon"
        />
      </div>
      <ul className="grid w-[95%] mx-auto grid-cols-1 sm:grid-cols-2 sm:mt-10 lg:grid-cols-3 2xl:grid-cols-4 1700:w-[85%]">
        {/* {pokemons.map((currPokemon) => { */}
            {searchedPokemons.map((currPokemon) => {
          return <PokemonCard key={currPokemon.id} currPokemon={currPokemon}/>;
        })}
      </ul>
    </section>
  );
};

export default Pokemon;
