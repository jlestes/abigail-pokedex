import { Pokemon, PokemonCard } from "@/components/PokemonCard";

async function getPokemon(name: string): Promise<Pokemon> {
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return await resp.json();
}

export default async function Home() {
  const mew = await getPokemon("mew");
  const raichu = await getPokemon("raichu");
  const mewtwo = await getPokemon("mewtwo");
  const smoochum = await getPokemon("smoochum");
  const sylveon = await getPokemon("sylveon");
  const pikachu = await getPokemon("pikachu");
  const noibat = await getPokemon("noibat");
  const ninetales = await getPokemon("ninetales");
  const mr_mime = await getPokemon("mr-mime");
  const jigglypuff = await getPokemon("jigglypuff");
  const florges = await getPokemon("florges");
  const diancie = await getPokemon("diancie");
  const dratini = await getPokemon("dratini");
  const garchomp = await getPokemon("garchomp");
  const gardevoir = await getPokemon("gardevoir");
  const dragonite = await getPokemon("dragonite");
  const sprigatito = await getPokemon("sprigatito");
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold text-6xl">Pokedex</h1>
      <p className="text-4xl">By Abigail 🧚🏻‍♀️</p>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <h2>{data.name}</h2> */}
      <div className="flex w-full justify-center items-baseline">
        <input
          type="text"
          className="w-1/2 border rounded-lg border-blue-900 h-12 p-6 m-6"
        />
        <input
          className="bg-slate-500 h-12 rounded-full px-4 text-white font-semibold"
          type="submit"
          value="Search Pokemon"
        />
      </div>

      <div className="flex gap-6 flex-wrap justify-evenly">
        <PokemonCard pokemon={mew} />
        <PokemonCard pokemon={raichu} />
        <PokemonCard pokemon={mewtwo} />
        <PokemonCard pokemon={smoochum} />
        <PokemonCard pokemon={sylveon} />
        <PokemonCard pokemon={pikachu} />
        <PokemonCard pokemon={noibat} />
        <PokemonCard pokemon={ninetales} />
        <PokemonCard pokemon={mr_mime} />
        <PokemonCard pokemon={jigglypuff} />
        <PokemonCard pokemon={florges} />
        <PokemonCard pokemon={diancie} />
        <PokemonCard pokemon={dratini} />
        <PokemonCard pokemon={garchomp} />
        <PokemonCard pokemon={gardevoir} />
        <PokemonCard pokemon={dragonite} />
        <PokemonCard pokemon={sprigatito} />
      </div>
    </div>
  );
}
