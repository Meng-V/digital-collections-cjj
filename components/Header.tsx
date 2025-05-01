"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  ResearchMenu,
  UseLibraryMenu,
  AboutMenu,
  SuperTopMenu,
} from "@/constant/Nav";

import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

import HeaderMobile from "./HeaderMobile";
import {
  Bars3Icon,
  GiftIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export function Header() {
  const divRef = useRef<HTMLDivElement>(null); // Reference for the div

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [siteSearchOpen, setSiteSearchOpen] = useState(false);

  // Toggle search handler
  const toggleSearch = () => {
    setSiteSearchOpen(!siteSearchOpen);
  };

  // Added useEffect to initialize the Google CSE script properly
  useEffect(() => {
    if (siteSearchOpen && divRef.current) {
      // Inject the search only when the search is open and the div is mounted
      const script = document.createElement("script");
      script.src = "https://cse.google.com/cse.js?cx=d11ec13d3a7b04466";
      script.async = true;
      divRef.current.appendChild(script); // Ensure script loads only when needed
      const divNode = document.createElement("div");
      divNode.classList.add("gcse-search");
      divRef.current.appendChild(divNode);
    }

    // Cleanup script when component unmounts or when the search is closed
    return () => {
      if (divRef.current) {
        while (divRef.current.firstChild) {
          divRef.current.removeChild(divRef.current.firstChild);
        }
      }
    };
  }, [siteSearchOpen]); // Re-run when `siteSearchOpen` changes

  return (
    <header className="relative isolate z-10 border-b-2">
      <nav aria-label="Global" className="mx-auto max-w-7xl p-6 lg:px-8">
        {/* Keep divRef as for Google search bar div */}
        <div ref={divRef}></div>
        {/* Super Top Menu */}
        <div
          className="hidden lg:flex space-x-1 justify-end SuperTopMenuMain"
          key="SuperTopMenuMain"
        >
          {SuperTopMenu.map((supertopitem) => (
            <Link
              key={supertopitem.name}
              className="text-sm text-white hover:text-gray-100 flex items-center"
              href={supertopitem.href}
            >
              {"icon" in supertopitem ? (
                <GiftIcon className="h-5 w-5 mr-1" />
              ) : (
                ""
              )}
              {supertopitem.name}
            </Link>
          ))}
          {siteSearchOpen ? (
            <button
              className="text-sm text-white hover:underline flex items-center"
              onClick={toggleSearch}
            >
              <XMarkIcon aria-hidden="true" className="h-5 w-5 mr-1" />
              Close
            </button>
          ) : (
            <button
              className="text-sm text-white hover:underline flex items-center"
              onClick={toggleSearch}
            >
              <MagnifyingGlassIcon className="h-5 w-5 mr-1" />
              Site Search
            </button>
          )}
        </div>
        {/* End of Super Top */}

        {/* Main Menu */}
        <div className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="https://www.lib.miamioh.edu/" className="-m-1.5 p-1.5">
              <span className="sr-only">Miami University Libraries</span>
              {!mobileMenuOpen && (
                <img
                  className="h-16 w-auto md:h-20 lg:h-24"
                  src="/Logos/MUL_red_white.png"
                  alt="MUL logo"
                />
              )}
            </Link>
          </div>
          {/* Mobile hamburger button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 text-gray-300" aria-hidden="true" />
            </button>
          </div>
          {/* End of hamburger button */}

          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover>
              <PopoverButton className="flex items-center xl:gap-x-1 text-xl xl:text-2xl text-gray-100 nav-title">
                Research and Support
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
              </PopoverButton>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <PopoverPanel className="absolute inset-x-0 top-[10.4rem] -z-10 bg-white shadow-lg ring-2 ring-gray-900/5">
                  <div
                    className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-16 xl:gap-x-8 
                    bg-auto bg-no-repeat corner-alumni bg-right-bottom"
                  >
                    {ResearchMenu.map((menuGroup, index) => (
                      <div
                        className="menu-group flex flex-col gap-y-3"
                        key={menuGroup[index].name}
                      >
                        {menuGroup.map((menuItem, subIndex) => (
                          <div
                            className="menu-item navLinkItem rounded-sm"
                            key={menuItem.name + subIndex}
                          >
                            {"name" in menuItem ? (
                              menuItem.href ? (
                                menuItem.redirect ? (
                                  <Link href={menuItem.href}>
                                    {menuItem.name}
                                  </Link>
                                ) : (
                                  <Link href={`/research${menuItem.href}`}>
                                    {menuItem.name}
                                  </Link>
                                )
                              ) : (
                                <span className="font-bold">
                                  {menuItem.name}
                                </span>
                              )
                            ) : (
                              <></>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>

            <Popover>
              <PopoverButton className="flex items-center xl:gap-x-1 text-xl xl:text-2xl font-normal text-gray-100 nav-title">
                Use the Libraries
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
              </PopoverButton>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <PopoverPanel className="absolute inset-x-0 top-[10.4rem] -z-10 bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-16 xl:gap-x-8">
                    {UseLibraryMenu.map((menuGroup, index) => (
                      <div
                        className="menu-group flex flex-col gap-y-3"
                        key={menuGroup[index].name}
                      >
                        {menuGroup.map((menuItem, subIndex) => (
                          <div
                            className="menu-item navLinkItem rounded-sm"
                            key={menuItem.name + subIndex}
                          >
                            {"name" in menuItem ? (
                              menuItem.href ? (
                                menuItem.redirect ? (
                                  <Link href={menuItem.href}>
                                    {menuItem.name}
                                  </Link>
                                ) : (
                                  <Link href={`/use${menuItem.href}`}>
                                    {menuItem.name}
                                  </Link>
                                )
                              ) : (
                                <span className="font-bold">
                                  {menuItem.name}
                                </span>
                              )
                            ) : (
                              <></>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>

            <Popover>
              <PopoverButton className="flex items-center xl:gap-x-1 text-xl xl:text-2xl font-normal text-gray-100 nav-title">
                About
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-300"
                  aria-hidden="true"
                />
              </PopoverButton>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
              >
                <PopoverPanel className="absolute inset-x-0 top-[10.4rem] -z-10 bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="mx-auto grid max-w-7xl grid-cols-3 gap-x-4 px-6 py-10 lg:px-16 xl:gap-x-8">
                    {AboutMenu.map((menuGroup, index) => (
                      <div
                        className="menu-group flex flex-col gap-y-3"
                        key={menuGroup[index].name}
                      >
                        {menuGroup.map((menuItem, subIndex) => (
                          <div
                            className="menu-item navLinkItem rounded-sm"
                            key={menuItem.name + subIndex}
                          >
                            {"name" in menuItem ? (
                              menuItem.href ? (
                                <Link href={`/about${menuItem.href}`}>
                                  {menuItem.name}
                                </Link>
                              ) : (
                                <span className="font-bold">
                                  {menuItem.name}
                                </span>
                              )
                            ) : (
                              <></>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </Transition>
            </Popover>
          </PopoverGroup>
        </div>
        {/* End of Main */}
      </nav>

      {/* Mobile Menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="https://www.lib.miamioh.edu/" className="-m-1.5 p-1.5 flex-1">
              <span className="sr-only">Miami University Libraries</span>
              <img
                className="h-[5rem] w-auto"
                src="/Logos/MUL_red_black.png"
                alt="MUL logo"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <HeaderMobile />
        </DialogPanel>
      </Dialog>
    </header>
  );
}
