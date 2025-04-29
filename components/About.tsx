import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Search from "./Search";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const About = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8">
      <div className="mx-auto max-w--xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About the Digital Collection
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="max-w-4xl lg:max-w-3xl">
            <p className="text-xl leading-8 text-gray-600">
              The Freedom Summer Digital Archive includes over 1,100 primary
              sources relating to the Mississippi Summer Project, the 1964
              African American voter registration drive later known as Freedom
              Summer.
            </p>

            <p className="mt-10 pr-4 text-base leading-6 text-gray-700">
              The digital collection brings together digitized material from
              several Freedom Summer collections in the United States, such as
              the Mark Levy Collection at the Queens College Special Collections
              and Archives, City University of New York and the Freedom Summer
              Archive at the Walter Havighurst Special Collections & University
              Archives at Miami University, originally part of the Western
              College Memorial Archives.
            </p>

            <p className="mt-10 pr-4 text-base leading-6 text-gray-700">
              The Freedom Summer Digital Archive was funded by the Ohio
              Humanities Council, Miami University Libraries, and through the
              generous support of Catherine Ross-Loveland, a 1952 graduate of
              the Western College for Women.
            </p>
          </div>

          <div className="w-full max-w-[600px] divide-y divide-gray-900/10">
            {/* Search */}
            <div key="search">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                Search
              </h2>
              <Search />
            </div>
            {/* Statements */}
            <div key="statements" className="mt-2 lg:mt-8">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mt-4">
                Statements
              </h2>
              <dl className="mt-2">
                <Disclosure as="div">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        Digitization Statement
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-6 w-6 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 px-8 py-4 rounded-md bg-stone-50">
                    <p className="text-base leading-7 text-gray-600">
                      Only a portion of Miami University’s Freedom Summer
                      Archive has been digitized. Researchers are encouraged to
                      explore the full collection housed at the Walter
                      Havighurst Special Collections & University Archives using
                      the{" "}
                      <a
                        href="https://archivesspace.lib.miamioh.edu/repositories/2/archival_objects/21880"
                        className="underlineLink"
                      >
                        collection finding aid
                      </a>
                      .
                    </p>
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="mt-4">
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        Copyright Statement
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusIcon
                          aria-hidden="true"
                          className="h-6 w-6 group-data-[open]:hidden"
                        />
                        <MinusIcon
                          aria-hidden="true"
                          className="h-6 w-6 [.group:not([data-open])_&]:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel
                    as="dd"
                    className="mt-2 px-8 py-4 rounded-md gap-y-4 flex flex-col bg-stone-50"
                  >
                    <p className="text-base leading-7 text-gray-600">
                      In the Miami University Libraries Digital Collections, you
                      will encounter works that are fully protected by
                      copyright, that are in the public domain, or that have an
                      unknown copyright status.
                    </p>
                    <div className="text-sm leading-7 text-gray-600">
                      Digital collections works are made available for you to
                      engage with online when:
                      <ul className="list-disc ms-4">
                        <li>
                          The work is in the public domain; Our use of the work
                          falls under one of the exceptions found in US
                          copyright law (e.g.fair use); or
                        </li>
                        <li>
                          We have obtained authorization from the rightsholder
                          to make the work available.
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm leading-7 text-gray-600">
                      Works in our digital collections have been labeled with
                      “rights statements” that can help you learn about the
                      copyright status of the item. If you have questions about
                      these right statements or information about the copyright
                      status of a particular work, please contact us at{"  "}
                      <Link
                        href="mailto:copyrightMUL@miamioh.edu"
                        className="underlineLink"
                      >
                        copyrightMUL@miamioh.edu
                      </Link>
                      .
                    </p>
                  </DisclosurePanel>
                </Disclosure>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
