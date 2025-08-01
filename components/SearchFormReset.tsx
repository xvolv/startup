"use client";
import Link from "next/link";
import { X } from "lucide-react";
import React from "react";

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    form?.reset();
    if (form) {
      form?.reset();
    }
  };
  return (
    <>
      <button type="reset" onClick={reset}>
        <Link href={"/"} className="search-btn text-white">
          <X />
        </Link>
      </button>
    </>
  );
};

export default SearchFormReset;
