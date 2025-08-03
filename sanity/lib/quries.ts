import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[
  _type == "startup" &&
  defined(slug.current) &&
  (
    !defined($search) ||
    catagory match $search ||
    title match $search ||
    description match $search ||
    author->name match $search
  )
] | order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  author->{
    _id,
    name,
    image,
    bio
  },
  views,
  description,
  catagory,
  image
}`);
