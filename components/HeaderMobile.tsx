"use client";

import Link from "next/link";
import {
  ResearchMenu,
  UseLibraryMenu,
  AboutMenu,
  SuperTopMenu,
} from "@/constant/Nav";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { ChevronDownIcon } from "@heroicons/react/20/solid";

const HeaderMobile = () => {
  return (
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6" key="mainMenu">
          <Disclosure as="div" className="-mx-3">
            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              Research and Support
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none group-data-[open]:rotate-180"
              />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 space-y-2">
              {ResearchMenu.map((menuGroup, index) => (
                <DisclosureButton
                  className="block w-full rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                  key={menuGroup[index].name}
                >
                  <div className="menu-group">
                    {menuGroup.map((menuItem, subIndex) => (
                      <div
                        className="menu-item text-start"
                        key={menuItem.name + subIndex}
                      >
                        {"name" in menuItem ? (
                          menuItem.href ? (
                            <Link href={`/research${menuItem.href}`}>
                              {menuItem.name}
                            </Link>
                          ) : (
                            <span className="font-bold">{menuItem.name}</span>
                          )
                        ) : (
                          <></>
                        )}
                      </div>
                    ))}
                  </div>
                </DisclosureButton>
              ))}
            </DisclosurePanel>
          </Disclosure>

          <Disclosure as="div" className="-mx-3">
            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              Use the Libraries
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none group-data-[open]:rotate-180"
              />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 space-y-2">
              {UseLibraryMenu.map((menuGroup, index) => (
                <DisclosureButton
                  className="block w-full rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                  key={menuGroup[index].name}
                >
                  <div className="menu-group">
                    {menuGroup.map((menuItem, subIndex) => (
                      <div
                        className="menu-item text-start"
                        key={menuItem.name + subIndex}
                      >
                        {"name" in menuItem ? (
                          menuItem.href ? (
                            <Link href={`/use${menuItem.href}`}>
                              {menuItem.name}
                            </Link>
                          ) : (
                            <span className="font-bold">{menuItem.name}</span>
                          )
                        ) : (
                          <></>
                        )}
                      </div>
                    ))}
                  </div>
                </DisclosureButton>
              ))}
            </DisclosurePanel>
          </Disclosure>

          <Disclosure as="div" className="-mx-3">
            <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
              About
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none group-data-[open]:rotate-180"
              />
            </DisclosureButton>
            <DisclosurePanel className="mt-2 space-y-2">
              {AboutMenu.map((menuGroup, index) => (
                <DisclosureButton
                  className="block w-full rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50"
                  key={menuGroup[index].name}
                >
                  <div className="menu-group">
                    {menuGroup.map((menuItem, subIndex) => (
                      <div
                        className="menu-item text-start"
                        key={menuItem.name + subIndex}
                      >
                        {"name" in menuItem ? (
                          menuItem.href ? (
                            <Link href={`/about${menuItem.href}`}>
                              {menuItem.name}
                            </Link>
                          ) : (
                            <span className="font-bold">{menuItem.name}</span>
                          )
                        ) : (
                          <></>
                        )}
                      </div>
                    ))}
                  </div>
                </DisclosureButton>
              ))}
            </DisclosurePanel>
          </Disclosure>
        </div>
        <div className="py-6" key="superMenu">
          {SuperTopMenu.map((menuItem) => (
            <Link
              key={menuItem.name}
              href={menuItem.href}
              className="-mx-3 block rounded-lg px-3 py-1 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50"
            >
              {menuItem.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
