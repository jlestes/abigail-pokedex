import { PokemonFullCard } from "@/components/PokemonFullCard";
import { getPokemon } from "@/utils/api";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ pokemon: string }>;
}) {
  const pokemon = (await params).pokemon;
  const data = await getPokemon(pokemon);
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold text-6xl capitalize">{pokemon}</h1>
      <PokemonFullCard pokemon={data} />
      <Link href="/">Go Home</Link>
    </div>
  );
}
