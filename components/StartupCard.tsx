import React from "react";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Startup,Author } from "@/sanity.types";
export type StartupTypeCard = Omit<Startup, "author"> & {author?: Author};

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    catagory,
    description,
    image,
    _id,
  } = post;

  return (
    <li className="startup-card group">
      {/* Top row: date and views */}
      <div className="flex justify-between items-start">
        <p className="startup-card_date">{formatDate(_createdAt)}</p>
        <div className="flex items-center gap-1.5">
          <EyeIcon className="size-5 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      {/* Name and Profile image on same line */}
      <div className="flex justify-between items-center mt-4">
        <Link href={`/user/${author?._id}`}>
          <p className="text-16-medium line-clamp-1">{author?.name}</p>
        </Link>
        <Link href={`/user/${author?._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt={`${author?.name}'s profile`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* Title */}
      <div className="mt-2">
        <Link href={`/startup/${_id}`}>
          <h3 className="text-26-semibold line-clamp-1">{title}</h3>
        </Link>
      </div>

      {/* Description */}
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc line-clamp-2 mt-2">{description}</p>
      </Link>

      {/* Image */}
      <Link href={`/startup/${_id}`}>
        <div className="mt-3 w-full max-w-md rounded-[20px] overflow-hidden">
          <img
            src={image}
            alt="Startup visual"
            className="w-full h-48 object-cover"
          />
        </div>
      </Link>

      {/* Category */}
      <div className=" flex-between gap-3 mt-5">
        <Link href={`/?query=${catagory?.toLowerCase()}`}>
          <p className="text-16-medium">{catagory}</p>
        </Link>
        <Button asChild className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
