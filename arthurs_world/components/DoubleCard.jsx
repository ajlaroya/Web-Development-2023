import React from 'react'

const DoubleCard = () => {
  return (
    <div className="aspect-[2] sm:col-span-2 px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
        >
          <div className="relative isolate h-full w-full">
            <img
              alt="Is It Toxic To?"
              src="https://images.unsplash.com/photo-1597157153515-028fa3d4bd69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80"
              decoding="async"
              data-nimg="fill"
              className="-z-10 object-cover transition-transform group-hover:scale-105 absolute h-full w-full bg-transparent"
              loading="lazy"
              
            />
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-50 mix-blend-soft-lighter">
              <span className="py-1.5">
                <a
                  className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline"
                  data-state="closed"
                  href="/projects"
                >
                  Projects
                </a>
                &nbsp;·&nbsp;Is It Toxic To?
              </span>
              <a
                href="https://iitt.chester.how/"
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
          </div>
        </div>
      </div>
  )
}

export default DoubleCard