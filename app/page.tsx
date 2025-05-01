"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { CAROUSEL, COLLECTIONS, RESOURCES } from "@/constant/StaticInfo";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Link from "next/link";
import Biography from "@/components/Biography";
import RedButton from "@/components/RedButton";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="relative">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute inset-0 ">
          <Carousel className="slider " infiniteLoop>
            {CAROUSEL.map((imageItem) => (
              <div className="h-[30rem] sm:h-[45rem] " key={imageItem.imageAlt}>
                <img
                  src={imageItem.imageSrc}
                  alt={imageItem.imageAlt}
                  className="h-full w-full object-cover object-center "
                />
                <p className="legend italic">
                  <span>{imageItem.imageAlt}</span>{" "}
                  <span>{imageItem.description}</span>
                </p>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="relative flex flex-col items-center justify-center gap-y-4 sm:gap-y-8 mx-auto text-center text-white h-[30rem] sm:h-[45rem] ">
          <div className="max-w-7xl mx-4">
            <h1 className="text-4xl font-bold lg:text-5xl">
              Dr. Carolyn Jefferson-Jenkins and the League of Women Voters Digital Collection
            </h1>
          </div>
          {/* <p className="text-lg sm:text-xl bg-stone-800 bg-opacity-65 leading-7 sm:leading-9 p-4 rounded-3xl">
            Over 1,100 primary sources relating to the Mississippi Summer
            Project, the 1964 African American voter registration drive later
            known as Freedom Summer
          </p> */}
          <Link
            href="https://digital.lib.miamioh.edu/digital/collection/cjj/search"
            target="_blank"
          >
            <RedButton
              buttonType="submit"
              buttonName="Explore the Collection"
            />
          </Link>
        </div>
      </div>

      <main className="mt-12 sm:mt-16 grid gap-y-32">
        <section className="pt-24 sm:pt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
          <About />
        </section>
        <section>
          <Stats />
        </section>

        {/* Resources section */}
        <section
          aria-labelledby="category-heading"
          className="xl:mx-auto xl:max-w-7xl xl:px-8"
        >
          <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
            <h2
              id="category-heading"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Related Resources
            </h2>
            {/* <Link
              href="#"
              className="hidden text-sm font-semibold text-red-800 hover:text-red-700 sm:block"
            >
              Browse all related resoources
              <span aria-hidden="true"> &rarr;</span>
            </Link> */}
          </div>

          <div className="mt-4 flow-root">
            <div className="
            grid grid-cols-1 gap-y-4 mx-4
            sm:grid-cols-2 gap-x-4
            lg:grid lg:px-8 lg:grid-cols-4 
            xl:gap-x-8 xl:px-0
            ">
              {RESOURCES.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  target="_blank"
                  className="relative flex h-[24rem] w-auto flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                >
                  <span aria-hidden="true" className="absolute inset-0">
                    <img
                      alt=""
                      src={category.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                  />
                  <span className="relative mt-auto text-center text-xl font-bold text-white">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {/* <Link
              href="#"
              className="text-sm pl-4 font-semibold text-red-800 hover:text-red-700 block sm:hidden"
            >
              Browse all related resources
              <span aria-hidden="true"> &rarr;</span>
            </Link> */}
        </section>

        <section>
          <Biography />
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="social-impact-heading"
          className="mx-auto w-full max-w-7xl px-4 sm:px-6"
        >
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0">
              <img
                alt=""
                src="/Courage_04.jpg"
                className="mx-auto h-full aspect-[5/2] object-cover"
              />
            </div>
            <div className="relative bg-stone-800 opacity-[.85] px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center ">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center"
                >
                  <span className="block sm:inline">Support</span>
                </h2>
                <p className="mt-4 text-lg leading-7 text-stone-50 text-left">
                  The Dr. Carolyn Jefferson-Jenkins and the League of Women Voters Digital Collection received financial support from a grant from the MIAMI Women Giving Circle. Dr. Jefferson-Jenkins for generously donating her papers to the Walter Havighurst Special Collections and University Archives in 2006 and 2021. Funding from the MIAMI Women Giving Circle supported the physical processing of the 2021 gift, the digitization of the collection, and the creation of the Carolyn Jefferson-Jenkins Collection finding aid.
                </p>
                {/* <Link
                  href="https://digital.lib.miamioh.edu/digital/collection/fstxt/search"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                  target="_blank"
                >
                  Browse All Collections
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Collection section */}
        <section
          aria-labelledby="collection-heading"
          className="mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h2
            id="collection-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Related Collections
          </h2>

          <div className="mt-4 flow-root">
            <div className="
            grid grid-cols-1 gap-y-4 mx-4
            sm:grid-cols-2 gap-x-4
            lg:grid lg:px-8 lg:grid-cols-4 
            xl:gap-x-8 xl:px-0
            ">
              {COLLECTIONS.map((collection) => (
                <Link
                  key={collection.name}
                  href={collection.href}
                  target="_blank"
                  className="relative flex h-full w-auto flex-col overflow-hidden rounded-lg hover:opacity-75 xl:w-auto"
                >
                  <div
                    aria-hidden="true"
                    className="h-[24rem] w-auto overflow-hidden rounded-lg lg:aspect-h-6 lg:aspect-w-5 group-hover:opacity-75"
                  >
                    <img
                      alt={collection.imageAlt}
                      src={collection.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {collection.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {collection.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured section */}
        <section
          aria-labelledby="comfort-heading"
          className="mx-auto max-w-7xl w-full mb-32 px-4 sm:px-6"
        >
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0">
              <img
                alt=""
                src="/CJJ-1225_Hero1_1200px.jpg"
                className="mx-auto h-full aspect-[5/2] object-cover object-[0%_78%]"
              />
            </div>
            <div className="relative bg-stone-800 opacity-[.90] px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center ">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center"
                >
                  <span className="block sm:inline">League of Women Voters</span>
                </h2>
                <p className="mt-4 text-lg leading-8 text-stone-50 text-left">
                  Founded in 1920, the League of Women Voters (LWV) is a nonpartisan, grassroots nonprofit dedicated to ensuring that everyone has the opportunity to vote and participate in government from the local to national level. With active Leagues in every state and more than 700 Leagues across the nation, the LWV protects the right to vote through advocacy, education, litigation, and organization. Formed from the merger of the National American Women’s Suffrage Association and the National Council of Women Voters, the early LWV sought to help newly enfranchised women exercise their right to vote through education and advocacy. In recent years, the League has focused on building a more inclusive democracy where all Americans–regardless of gender, sex, race, ability, or party–can see themselves represented in government and actively participate in the political process. Contemporary issues include: expanding voter access, fighting voter suppression, money in politics, gerrymandering, and advocating for safe and fair elections. The League also promotes social and economic justice more broadly through policy work in health care, environmental, immigration reform, and census representation.
                </p>
                {/* <Link
                  href="https://digital.lib.miamioh.edu/digital/collection/fstxt/search"
                  className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                  target="_blank"
                >
                  Browse All Collections
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
