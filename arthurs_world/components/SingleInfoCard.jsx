import React from 'react'

const SingleInfoCard = () => {
  return (
    <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="isolate flex h-full w-full flex-col">
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
              <span className="py-1.5">
                <a
                  className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline"
                  data-state="closed"
                  href="/reading"
                >
                  Reading
                </a>
                &nbsp;·&nbsp;Books
              </span>
              <a
                href="https://www.goodreads.com/book/show/840.The_Design_of_Everyday_Things?from_search=true&amp;from_srp=true&amp;qid=jglUkqyG2s&amp;rank=1"
                target="_blank"
                className="flex h-8 w-8 items-center justify-center rounded-full transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 group-focus-within:bg-white group-focus-within:text-neutral-900 group-focus-within:shadow-skeuo cursor-alias group-hover:bg-white group-hover:text-neutral-900 group-hover:shadow-skeuo"
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
            <div className="grid grow grid-cols-2 items-end gap-6 px-7 pb-10">
              <img
                src="https://ghepxtexbwweoynirspy.supabase.co/storage/v1/object/public/content/reading/the-design-of-everyday-things.jpg"
                alt="The Design of Everyday Things"
                className="rounded shadow-lg transition-transform group-focus-within:-rotate-3 group-focus-within:scale-110 group-focus-within:shadow-xl group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-xl"
              />
              <div className="-tracking-[0.03em]">
                <div className="bg-amber-400/40 text-amber-900 inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight shadow-inset-skeuo">
                  <span>READING</span>
                </div>
                <h3 className="mt-3 line-clamp-3">The Design of Everyday Things</h3>
                <span className="text-neutral-400">Donald A. Norman</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SingleInfoCard