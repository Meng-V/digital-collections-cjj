export default function History() {
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
          History of Freedom Summer
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Mississippi Summer Project took place on Oxford, Ohio’s, Western
            College campus in June 1964. Its participants, about 800 northern
            college students, learned about history and politics in the South
            while preparing to register African Americans to vote and to
            encourage a new political party.
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
                &#34;Bring the nation&#39;s children, and the parents will have to focus on Mississippi&#34;
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  alt=""
                  src="/MosesBob.jpg"
                  className="mt-1 h-20 w-16 flex-none rounded-full bg-gray-50"
                />
                <div className="text-base content-center">
                  <div className="font-semibold text-stone-800">
                  Bob Moses
                  </div>
                  <div className="text-gray-500">Co-director of the Council of Federated Organizations (COFO)</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              At the time, Black Mississippians were barred from Democratic
              party primaries and caucuses, and the movement sought to challenge
              the party’s all-white delegation at the Democratic National
              Convention that August.
            </p>

            <p className="mt-8">
              Three of those trainees, Michael Schwerner, James Chaney and
              Andrew Goodman would be murdered by the Ku Klux Klan after
              beginning their work in Mississippi. These murders focused
              national and international attention on the efforts of Freedom
              Summer, serving as a turning point for the civil rights movement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
