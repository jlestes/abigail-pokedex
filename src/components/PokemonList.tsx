import { PokemonCard } from "./PokemonCard";
import data from "@/app/pokemon.json";

export function PokemonList() {
  return (
    <div className="flex gap-6 flex-wrap justify-evenly">
      {data.map((name) => (
        <PokemonCard key={name} pokemon={name} />
      ))}
    </div>
  );
}
