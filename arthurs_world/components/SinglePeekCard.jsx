import React from 'react'

const SinglePeekCard = () => {
  return (
    <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative flex h-full w-full flex-col justify-between">
            <img
              alt="2022.12.05 @ Fit Bloc"
              src="https://images.unsplash.com/photo-1525296682-101c994ad524?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmlsbSUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1600&q=60"
              decoding="async"
              data-nimg="fill"
              className="rounded-lg object-cover transition-all group-focus-within:mt-12 group-hover:mt-12 absolute h-full w-full bg-transparent"
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
                &nbsp;·&nbsp;Climbing
              </span>
              <a
                href="https://www.instagram.com/reel/Cl0OXARAcq4/?utm_source=ig_web_copy_link"
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 group-focus-within:bg-white group-focus-within:text-neutral-700 group-focus-within:shadow-skeuo cursor-alias group-hover:bg-white group-hover:text-neutral-700 group-hover:shadow-skeuo"
                data-state="closed"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="z-10 p-2">
              <span className="inline-block rounded-lg px-2 py-1 text-sm text-white/70 transition-colors group-focus-within:bg-black/70 group-hover:bg-black/70">
                2022.12.05 @ Fit Bloc
              </span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SinglePeekCard