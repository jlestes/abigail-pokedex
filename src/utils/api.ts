import { Pokemon } from "@/components/PokemonCard";
import { notFound } from "next/navigation";

export async function getPokemon(name: string): Promise<Pokemon> {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
  );
  if (resp.status === 404) {
    notFound();
  }
  return await resp.json();
}

export async function getAllPokemon() {
  const resp = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
  );
  return await resp.json();
}
