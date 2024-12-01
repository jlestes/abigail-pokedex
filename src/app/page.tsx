import { PokemonCard } from "@/components/PokemonCard";
import { PokemonList } from "@/components/PokemonList";
import { getAllPokemon, getPokemon } from "@/utils/api";
import Form from "next/form";
import Link from "next/link";

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
  const ho_oh = await getPokemon("ho-oh");
  const jirachi = await getPokemon("jirachi");
  const meowth = await getPokemon("meowth");
  const doublade = await getPokemon("doublade");
  const squirtle = await getPokemon("squirtle");
  // const allPokemon = await getAllPokemon();
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold text-6xl">Pokedex</h1>
      <p className="text-4xl">By Abigail 🧚🏻‍♀️</p>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* <h2>{data.name}</h2> */}
      <div className="flex w-full justify-center items-center">
        <Form action="/search">
          <input
            type="text"
            name="name"
            className="w-1/2 border rounded-lg border-blue-900 h-12 p-6 m-6 dark:outline-blue-400 dark:bg-slate-800"
          />
          <input
            className="bg-slate-500 dark:bg-pink-900 dark:hover:bg-pink-600 h-12 rounded-full px-4 text-white font-semibold hover:cursor-pointer hover:bg-slate-600"
            type="submit"
            value="Search Pokemon"
          />
        </Form>
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
        <PokemonCard pokemon={ho_oh} />
        <PokemonCard pokemon={jirachi} />
        <PokemonCard pokemon={meowth} />
        <PokemonCard pokemon={doublade} />
        <PokemonCard pokemon={squirtle} />
      </div>
      {/* <PokemonList /> */}
      {/* <div className="flex gap-6 flex-wrap justify-evenly">
        {allPokemon.results.map((result: { name: string }) => (
          <p key={result.name} className="capitalize text-3xl p-4 font-bold">
            <Link href={result.name}>{result.name}</Link>
          </p>
        ))}
      </div> */}
    </div>
  );
}
