import React from 'react'

const SingleFadeCard = () => {
  return (
    <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
        >
          <div className="relative isolate flex h-full w-full flex-col justify-between">
            <img
              alt="Philodendron hederaceum ‘Micans’"
              src="https://images.unsplash.com/photo-1557746889-f15e8043f832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wtQmhtQnNqNUhzVXx8ZW58MHx8fHx8&auto=format&fit=crop&w=1600&q=60"
              decoding="async"
              data-nimg="fill"
              className="pointer-events-none -z-10 object-cover transition-transform group-hover:z-10 group-hover:scale-105 absolute h-full w-full"
              loading="lazy"
              
            />
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
              <span className="py-1.5 mix-blend-plus-lighter">
                <a
                  className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline"
                  data-state="closed"
                  href="/hobbies"
                >
                  Hobbies
                </a>
                &nbsp;·&nbsp;Plants
              </span>
            </div>
            <div className="flex grow flex-col justify-end gap-3 p-5 transition-opacity bg-gradient-to-t from-neutral-50 group-focus-within:opacity-0 group-hover:opacity-20">
              <div className="flex gap-2">
                <div className="bg-sky-400/40 text-sky-900 inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight shadow-inset-skeuo">
                  <span>ARACEAE</span>
                </div>
              </div>
              <h3 className="font-serif-variation font-serif text-4xl font-light">
                Philodendron hederaceum ‘Micans’
              </h3>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SingleFadeCard