import React from 'react'

const SingleBlogCard = () => {
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
                  href="/writing"
                >
                  Writing
                </a>
                &nbsp;·&nbsp;Blog
              </span>
              <a
                href="https://lowercasedc.wordpress.com/2023/02/01/what-the-heck-is-a-digital-garden/"
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
            <div className="p-5">
              <h3 className="font-serif-variation font-serif text-3xl font-light">
                What the heck is a digital garden?
              </h3>
              <span className="mt-2 mb-4 block text-sm -tracking-[0.03em] text-neutral-400">
                February 1, 2023
              </span>
              <p className="leading-relaxed text-neutral-700 line-clamp-3 md:line-clamp-4">
                So you’ve landed on my site (or not, that’s okay you can check
                it out here), and you’re curious about this “digital garden”
                thing. Or perhaps you’ve heard of digital gardens and you’re
                wondering if my site really qualifies as one. Well, either way,
                allow me to explain.
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SingleBlogCard