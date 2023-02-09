import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import { GetServerSideProps } from "next";
import getRandomPokemon from "../utils/getRandomPokemon";

export default function IndexPage() {
  const { data, isLoading } = trpc.useQuery(["get-pokemon-by-id", { id: 49 }]);

  if (isLoading) return <div>Loading.....</div>;

  if (data) return <div>{data.name}</div>;

  return (
    <div>
      <p>Hello Pokemon</p>
    </div>
  );
}
