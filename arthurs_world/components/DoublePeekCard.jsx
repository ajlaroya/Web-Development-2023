import React from 'react'

const DoublePeekCard = () => {
  return (
    <div className="aspect-[2] sm:col-span-2 px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative flex h-full w-full flex-col justify-between">
            <img
              alt="Kentmere Pan 400"
              src="https://images.unsplash.com/photo-1610408167724-d808000c11fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
              decoding="async"
              data-nimg="fill"
              className="rounded-lg object-cover transition-all group-focus-within:mt-12 group-hover:mt-12 absolute h-full w-full"
              loading="lazy"
            />
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
              <span className="py-1.5">
                <a
                  className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline"
                  data-state="closed"
                  href="/hobbies"
                >
                  Hobbies
                </a>
                &nbsp;·&nbsp;Film
              </span>
            </div>
            <div className="z-10 p-2">
              <span className="inline-block rounded-lg px-2 py-1 text-sm text-white/70 transition-colors group-focus-within:bg-black/70 group-hover:bg-black/70">
                Kentmere Pan 400
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DoublePeekCard