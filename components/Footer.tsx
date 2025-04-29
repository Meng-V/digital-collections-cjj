import Link from "next/link";
import { FooterMenu } from "@/constant/Nav";

const currentYear = new Date();

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-red-800">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-1">
            <img
              alt="Miami University Libraries Logo"
              src="/Logos/MUL_white_white.png"
              className="h-20"
            />
            <div className="mt-3 text-gray-300 pl-6">
              <p className="library-address">
                151 South Campus Avenue
                <br />
                Oxford, Ohio 45056
                <br />
                <a href="tel:+15135294141">
                  <abbr title="Phone" aria-label="Phone number">
                    P:
                  </abbr>{" "}
                  (513) 529-4141
                </a>
              </p>
              <br />
              <p>Give to the Libraries</p>
              <p>Miami University</p>
            </div>
          </div>

          <div className="mt-16 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              {FooterMenu.map((menuGroup, index) => (
                <div
                  className="menu-group flex flex-col gap-y-3"
                  key={menuGroup[index] + index.toString()}
                >
                  {menuGroup.map((menuItem, subIndex) => (
                    <div
                      className="menu-item text-gray-200"
                      key={menuItem.name + subIndex}
                    >
                      {"name" in menuItem ? (
                        menuItem.href ? (
                          <Link href={menuItem.href}>{menuItem.name}</Link>
                        ) : (
                          <span className="font-semibold text-gray-100">
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
          </div>
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2"></div>
          <p className="mt-8 text-sm leading-5 text-gray-300 md:order-1 md:mt-0">
            &copy; {currentYear.getFullYear()} Miami University Libraries. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
