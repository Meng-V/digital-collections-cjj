export default function Biography() {
  return (
    <div className="relative isolate overflow-hidden bg-white ">
      <div
        aria-hidden="true"
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
      >
        <div
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-gray-100 to-yellow-100 opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-red-800">
            Background
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Dr. Carolyn Jefferson-Jenkins Biography
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Dr. Carolyn Jefferson-Jenkins served two terms as president of the League of Women Voters of the United States from 1998–2002. Before being elected president, she served as Vice President of the League of Women Voters of the United States from 1996-1998. She is the only woman of color to have served as national president in the organization&#39;s first one hundred years.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              aria-hidden="true"
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
            <figure className="border-l border-red-700 pl-8">
              <blockquote className="text-2xl font-semibold leading-8 tracking-tight text-stone-700">
                <p>
                  &#34;I do not represent all Black people. I do not represent all women. No one person represents all, and we need to remember that as we listen to people who speak to us and how we give weight to what they say.&#34;
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
                  src="/CJJ-0992_Portrait_800px.jpg"
                  className="mt-1 h-48 w-36 flex-none rounded-full bg-gray-50 object-cover"
                />
                <div className="text-base content-center">
                  <div className="font-semibold text-stone-800">
                    Dr. Carolyn Jefferson-Jenkins
                  </div>
                  <div className="text-gray-500">
                    President of the U.S. League of Women Voters
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              Jefferson-Jenkins was born in Cleveland, Ohio. She grew up during the American Civil Rights Movement and was inspired by the movement to become active in civics. Jefferson-Jenkins attended Western College for Women in Oxford, Ohio and graduated with a B.A. in education and political science in 1974. She went on to earn an M.Ed. from John Carroll University in Cleveland, Ohio, and an Ed.S. from Kent State University in Kent, Ohio. She graduated with her doctorate from Cleveland State University in 1991, focusing her dissertation on analyzing the role of administration on racial isolation in Cleveland public schools in the early twentieth century.
            </p>
            <p>
              She worked in the Cleveland public schools from 1979 until 1993, and then served as principal of Taylor Academy until 1995. Jefferson-Jenkins was a vice president of Junior Achievement starting in 1995 and was promoted to a vice president in 1996. She left the organization in 1998 to work for the National Center for Education and the Economy, the University of Colorado at Denver, and retired from Douglas County Schools Colorado. She now works with the Center for Racial Justice in Education.
            </p>

            <p className="mt-8">
              Jefferson-Jenkins joined the League of Women Voters in 1982, and she led a 1996 "Get Out the Vote" campaign, which registered more than 50,000 voters nationally. In 1998 she was elected as the 15th President of the League of Women Voters and subsequently elected to a second term as president. She was the first woman of African descent to serve as president of the league. While Jefferson-Jenkins served as president, the League helped pass the Bipartisan Campaign Reform Act in 2002, which closed loopholes in campaign finance. She also spoke on the need for campaign finance, worked to increase voting using public awareness ads, sought to broaden participation in democracy, and established a means to increase membership in the League of Women Voters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
