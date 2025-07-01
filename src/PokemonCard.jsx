import React from "react";

const PokemonCard = ({ currPokemon }) => {
  return (
    <li className=" group shadow-xl hover:shadow-2xl h-90 w-70 mx-auto my-8 rounded-xl border-2 border-gray-400 bg-white relative transition-transform duration-500 hover:scale-110 450:w-87 sm:w-68 800:w-82 900:w-93 lg:w-75 1150:w-80 1300:w-92 2xl:w-82 cursor-pointer">
      <div
        className="absolute top-0 left-0 w-full h-[40%] rotate-180 bg-green-100 
                   rounded-[30%_70%_70%_30%/30%_30%_70%_70%] 
                   transition-all duration-300 
                   group-hover:rounded-[50%_50%_100%_0%/99%_100%_0%_1%] group-hover:rounded-b-xl"
      ></div>
      <figure className="relative flex justify-center drop-shadow-lg">
        <img
          src={currPokemon.sprites.other.dream_world.front_default}
          alt={currPokemon.name}
          className=" w-40 h-26 mx-auto my-5"
          loading="lazy"
        />
      </figure>
      <h1 className="font-bold tracking-wide text-2xl text-center capitalize">
        <span className=" border-b-2">{currPokemon.name}</span>
      </h1>
      <h1 className="tracking-wide text-md text-center p-3">
        <span className="bg-green-500 px-2 py-1 rounded-full text-white">
          {currPokemon.types.map((currTypeObj) => currTypeObj.type.name).join()}
        </span>
      </h1>
      <div className="grid grid-cols-3 px-2 py-3 text-sm tracking-tighter">
        <div className="text-center">
          <span className="underline font-semibold 450:text-lg sm:text-sm 800:text-md">
            Weight:
          </span>
          <p>("{currPokemon.weight}")</p>
        </div>
        <div className="text-center">
          <span className="underline font-semibold 450:text-lg sm:text-sm 800:text-md">
            Height:
          </span>
          <p>("{currPokemon.height}")</p>
        </div>
        <div className="text-center">
          <span className="underline font-semibold 450:text-lg sm:text-sm 800:text-md">
            Speed:
          </span>
          <p>({currPokemon.stats[5].base_stat}")</p>
        </div>
      </div>
      <div className="grid grid-cols-3 px-2 text-sm">
        <div className="text-center">
          <span className="underline font-semibold 450:text-lg sm:text-sm 800:text-md">
            Experience:
          </span>
          <p> ("{currPokemon.base_experience}")</p>
        </div>
        <div className="text-center 500:pl-2">
          <span className="underline font-semibold pl-2 450:text-lg 450:pl-3 sm:text-sm 800:text-md">
            Attack:
          </span>
          <p>("{currPokemon.stats[1].base_stat}")</p>
        </div>
        <div className="text-center">
          <span className="underline font-semibold 450:text-lg sm:text-sm 800:text-md">
            Ability:
          </span>
          <p>
            {currPokemon.abilities
              .map((currAbilityObj) => currAbilityObj.ability.name)
              .slice(0, 1)}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
