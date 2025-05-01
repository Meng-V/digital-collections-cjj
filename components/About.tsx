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
            The Dr. Carolyn Jefferson-Jenkins and the League of Women Voters Digital Collection includes records, correspondence, reports, printed materials, and memorabilia related to the life and career of Dr. Carolyn Jefferson-Jenkins, the 15th National President of the League of Women Voters of the United States, as well as documents relating to the mission and activities of that organization during her tenure as president. Original materials are held at the Walter Havighurst Special Collections & University Archives at Miami University, originally part of the Western College Memorial Archives.
            </p>

            <p className="mt-10 pr-4 text-base leading-6 text-gray-700">
            Dr. Carolyn Jefferson-Jenkins, a 1974 graduate of Western College for Women (now Miami University), served as the President of the League of Women Voters from 1998-2002. She is the only woman of African-American descent to head the League. During her presidency, Dr. Jefferson-Jenkins led the organization’s education and advocacy work and oversaw several comprehensive League initiatives. These included the 1996 “Get Out the Vote” campaign and “The Wired for Democracy” project, which increased voter education and participation via the Web. She also led the League in developing their strategic plan, “The Future Plan,” which emphasized keeping the League relevant through diversity, equity and inclusion.
            </p>

            <p className="mt-10 pr-4 text-base leading-6 text-gray-700">
            The Dr. Carolyn Jefferson-Jenkins Digital Collection was funded by a grant from the MIAMI Women Giving Circle and is hosted by the Miami University Libraries. 
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
                      Only a portion of the Carolyn Jefferson-Jenkins Collection
                      has been digitized. Researchers are encouraged to
                      explore the full collection housed at the Walter
                      Havighurst Special Collections & University Archives using
                      the{" "}
                      <a
                        href="https://archivesspace.lib.miamioh.edu/repositories/2/resources/722"
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
