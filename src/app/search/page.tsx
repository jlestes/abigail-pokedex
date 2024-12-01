import { PokemonCard } from "@/components/PokemonCard";
import { getPokemon } from "@/utils/api";
import Link from "next/link";

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const name = await searchParams.name;
  const data = await getPokemon(name as string);
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold text-6xl capitalize">{name}</h1>
      <PokemonCard pokemon={data} />
      <Link href="/">Go Home</Link>
    </div>
  );
}
