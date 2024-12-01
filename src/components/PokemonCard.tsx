import Image from "next/image";
import Link from "next/link";

export type Pokemon = {
  sprites: {
    front_default: string;
  };
  weight: number;
  height: number;
  name: string;
};

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Link href={pokemon.name}>
      <div className="bg-blue-200 dark:bg-blue-950 hover:dark:bg-indigo-600 flex border-2 hover:bg-pink-100 rounded-xl border-blue-500 dark:border-blue-800">
        <div className="flex flex-col items-center">
          <Image
            src={pokemon.sprites.front_default}
            alt="Pokemon"
            width={200}
            height={200}
          />
          <p className="capitalize font-bold text-xl p-4">{pokemon.name}</p>
        </div>
        <div className="bg-green-400 dark:bg-blue-800 rounded-xl p-4 text-2xl">
          <dl>
            <dt className="font-semibold">Weight:</dt>
            <dd
            // className={
            //   pokemon.weight > 1000 ? "text-red-600 font-semibold" : ""
            // }
            >
              {pokemon.weight} lbs.
            </dd>
            <dt className="font-semibold">Height:</dt>
            <dd>{pokemon.height} ft.</dd>
          </dl>
        </div>
      </div>
    </Link>
  );
}
