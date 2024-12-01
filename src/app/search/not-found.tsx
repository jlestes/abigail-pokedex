import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold text-3xl capitalize">Not Found</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
}
