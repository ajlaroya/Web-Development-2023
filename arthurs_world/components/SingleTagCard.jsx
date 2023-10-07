import React from 'react'

const SingleTagCard = () => {
  return (
    <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
              <span className="py-1.5">
                <a
                  className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline"
                  data-state="closed"
                  href="/hobbies"
                >
                  Hobbies
                </a>
                &nbsp;·&nbsp;Coffee
              </span>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <div className="bg-lime-400/40 text-lime-900 inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight shadow-inset-skeuo">
                  <span>FILTER</span>
                </div>
                <div className="bg-orange-400/40 text-orange-900 inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight shadow-inset-skeuo">
                  <span>NOW BREWING</span>
                </div>
              </div>
              <h3
                className="font-serif-variation mt-3 mb-[.84rem] pb-[.4rem] font-serif text-3xl font-light md:text-5xl lg:text-6xl line-clamp-2"
                title="Colombia Finca La Camelia"
              >
                Colombia Finca La Camelia
              </h3>
              <p
                className="text-neutral-400 line-clamp-1"
                title="Colombia · Apartment Coffee"
              >
                <span>Colombia · Apartment Coffee</span>
              </p>
              <p
                className="text-neutral-700 line-clamp-1"
                title="Blackberry, white peach and grapefruit"
              >
                Blackberry, white peach and grapefruit
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SingleTagCard