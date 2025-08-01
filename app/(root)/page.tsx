import SearchForm from "../../components/SearchForm";
import Link from "next/link";
import Image from "next/image";
import StartupCard from "@/components/StartupCard";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: "1", name: "elon musk" },
      _id: "1",
      title: "we robots",
      catagory: "robots",
      description: "this is description",
      image:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];
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
