import SearchForm from "../../components/SearchForm";
import Link from "next/link";
import Image from "next/image";
import StartupCard from "@/components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/quries";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUPS_QUERY);
  console.log(JSON.stringify(posts, null, 2));

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          pitch your startup, <br /> connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          submit ideas , vote on pitches, and get noticed in virtual
          competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All startups"}
        </p>
        <ul className=" mt-7 card_grid">
          {posts.length > 0 ? (
            posts.map((post, number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-result">No results found for "${query}"</p>
          )}
        </ul>
      </section>
    </>
  );
}
