// import { PokemonCard } from "./PokemonCard";
import data from "@/app/pokemon.json";

export function PokemonList() {
  return (
    <div className="flex gap-6 flex-wrap justify-evenly">
      {data.map((name) => (
        <p key={name}>{name}</p>
        // <PokemonCard key={name} pokemon={name} />
      ))}
    </div>
  );
}
