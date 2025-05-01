"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import RedButton from "./RedButton";

export default function Search() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="max-w-7xl gap-10 lg:grid-cols-12 lg:gap-8">
      <form
        className="w-full lg:pt-2"
        action={`https://digital.lib.miamioh.edu/digital/collection/cjj/search/searchterm/${inputValue}`}
      >
        <div className="flex gap-x-4">
          <label htmlFor="search-terms" className="sr-only">
            Search
          </label>
          <input
            value={inputValue}
            type="text"
            required
            placeholder="Search in collections"
            onChange={(e) => setInputValue(e.target.value)}
            className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-red-900 sm:text-sm sm:leading-6"
          />
          <RedButton buttonType="submit" buttonName="Search" />
        </div>

        <div className="mt-2">
          <Link
            href="https://digital.lib.miamioh.edu/digital/search/advanced"
            className="block text-sm font-semibold text-red-800 hover:text-red-700"
          >
            Advanced Search in Digital Collections
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </form>
    </div>
  );
}
