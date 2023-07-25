const Content = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-flow-row-dense sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Intro card */}
      <div
        className="row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square"
        
      >
        <div className="h-full w-full p-4 sm:p-8">
          <h1 className="font-serif-variation tracking-tight text-2xl font-semibold !leading-tight text-neutral-400 sm:text-3xl lg:text-4xl">
            Hola, I’m <span className="text-neutral-900">Arthur</span>{" "}
            👋&nbsp; Welcome to my{" "}
            <a
              href="https://lowercasedc.wordpress.com/2023/02/01/what-the-heck-is-a-digital-garden/"
              className="cursor-alias rounded underline decoration-dotted transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 hover:text-neutral-500"
              data-state="closed"
            >
              digital world
            </a>{" "}
            🚀 I build{" "}
            <a
              className="rounded text-neutral-900 underline-offset-4 decoration-orange-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline"
              href="/projects"
            >
              websites
            </a>
            , and I’m currently building{" "}
            <a
              href="https://mobbin.com/?via=chester"
              target="_blank"
              className="cursor-alias rounded text-neutral-900 decoration-wavy underline-offset-4 decoration-sky-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline"
            >
              QKC Studios
            </a>
            .<br/><br/>In my free time, I enjoy gaming{" "}
            <a
              className="rounded text-neutral-900 underline-offset-4 decoration-rose-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline"
              href="/hobbies"
            >
              nature
            </a>
            , working{" "}
            <a
              className="rounded text-neutral-900 underline-offset-4 decoration-lime-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline"
              href="/hobbies"
            >
              out
            </a>
            , and&nbsp;
            <a
              className="rounded text-neutral-900 underline-offset-4 decoration-purple-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline"
              href="/hobbies"
            >
              playing
            </a>{" "}
            (crappy) guitar<br/><br/>I do some{" "}
            <a
              className="rounded text-neutral-900 underline-offset-4 decoration-fuchsia-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline"
              href="/reading"
            >
              reading
            </a>{" "}
            and{" "}
            <a
              className="rounded text-neutral-900 underline-offset-4 decoration-teal-400 focus-visible:ring-4 focus-visible:ring-blue-200 focus:underline hover:underline"
              href="/writing"
            >
              writing
            </a>{" "}
            as well, albeit not as consistently, but I’m working on being better
            at that.
          </h1>
        </div>
      </div>

      {/* Info cards */}
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
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-50 mix-blend-difference">
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
          </div>
        </div>
      </div>

      <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative isolate h-full w-full">
            <img
              alt="sample"
              src="https://images.unsplash.com/photo-1568190002605-b51fa38eac46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=938&q=80"
              decoding="async"
              data-nimg="fill"
              className="-z-10 object-cover transition-transform group-hover:scale-105 absolute h-full w-full left-0 top-0 right-0 bottom-0 bg-transparent"
              loading="lazy"
              
            />
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-50 mix-blend-difference">
              <span className="py-1.5">
                <a
                  className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline"
                  data-state="closed"
                  href="/projects"
                >
                  Projects
                </a>
                &nbsp;·&nbsp;Billbreak
              </span>
              <a
                href="https://apps.apple.com/sg/app/billbreak-split-group-bills/id1640687547"
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
          </div>
        </div>
      </div>

      <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative flex h-full w-full flex-col justify-between">
            <img
              alt="2022.12.05 @ Fit Bloc"
              src="https://images.unsplash.com/photo-1559762759-d4dddb38c2a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
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
            <div className="z-10 p-2">
              <span className="inline-block rounded-lg px-2 py-1 text-sm text-white/70 transition-colors group-focus-within:bg-black/70 group-hover:bg-black/70">
                2022.12.05 @ Fit Bloc
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative flex h-full w-full flex-col justify-between">
            <img
              alt="FilmNeverDie KIRO 400"
              sizes="(min-width: 1280px) 25vw,
      (min-width: 1024px) 33vw,
      (min-width: 640px) 50vw,
      100vw"
              srcset="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000045460013.jpeg&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="fill"
              className="rounded-lg object-cover transition-all group-focus-within:mt-12 group-hover:mt-12"
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
                FilmNeverDie KIRO 400
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-[2] sm:col-span-2 px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative isolate h-full w-full">
            <img
              alt="Average Joe Coffeehouse Reviews"
              sizes="(min-width: 1280px) 50vw,
      (min-width: 1024px) 66vw,
      100vw"
              srcset="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Faverage-joe-coffeehouse-reviews_2.png&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="fill"
              className="-z-10 object-contain transition-transform group-hover:scale-105"
              loading="lazy"
              
            />
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
              <span className="py-1.5">
                <a
                  className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline"
                  data-state="closed"
                  href="/projects"
                >
                  Projects
                </a>
                &nbsp;·&nbsp;Average Joe Coffeehouse Reviews
              </span>
              <a
                href="https://averagejoe.reviews/"
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
          </div>
        </div>
      </div>
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
      <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative isolate h-full w-full">
            <img
              alt="Snob"
              sizes="(min-width: 1280px) 25vw,
      (min-width: 1024px) 33vw,
      (min-width: 640px) 50vw,
      100vw"
              srcset="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fprojects%2Fsnob_3.png&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="fill"
              className="-z-10 object-contain transition-transform group-hover:scale-105"
              loading="lazy"
              
            />
            <div className="flex items-center justify-between pl-4 pr-2 pt-2 text-sm tracking-tight text-neutral-400">
              <span className="py-1.5">
                <a
                  className="transition-colors focus-visible:ring-4 focus-visible:ring-blue-200 focus-visible:text-neutral-500 focus-visible:underline hover:text-neutral-500 hover:underline"
                  data-state="closed"
                  href="/projects"
                >
                  Projects
                </a>
                &nbsp;·&nbsp;Snob
              </span>
              <a
                href="https://snob.averagejoe.reviews/"
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
          </div>
        </div>
      </div>
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
      <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative flex h-full w-full flex-col justify-between">
            <img
              alt="Plants"
              sizes="(min-width: 1280px) 25vw,
      (min-width: 1024px) 33vw,
      (min-width: 640px) 50vw,
      100vw"
              srcset="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2FIMG_0960.jpeg&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="fill"
              className="rounded-lg object-cover transition-all group-focus-within:mt-12 group-hover:mt-12"
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
                &nbsp;·&nbsp;Plants
              </span>
            </div>
          </div>
        </div>
      </div>
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
                className="font-serif-variation mt-3 mb-[.84rem] pb-[.4rem] font-serif text-4xl font-light md:text-5xl lg:text-6xl line-clamp-2"
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
      <div className="aspect-[2] sm:col-span-2 px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative flex h-full w-full flex-col justify-between">
            <img
              alt="Kentmere Pan 400"
              sizes="(min-width: 1280px) 50vw,
      (min-width: 1024px) 66vw,
      100vw"
              srcset="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F000047120039.jpeg&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="fill"
              className="rounded-lg object-cover transition-all group-focus-within:mt-12 group-hover:mt-12"
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
                href="https://www.goodreads.com/book/show/44492286-children-of-dune"
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
                src="https://ghepxtexbwweoynirspy.supabase.co/storage/v1/object/public/content/reading/children-of-dune.jpg"
                alt="Children of Dune"
                className="rounded shadow-lg transition-transform group-focus-within:-rotate-3 group-focus-within:scale-110 group-focus-within:shadow-xl group-hover:-rotate-3 group-hover:scale-110 group-hover:shadow-xl"
              />
              <div className="-tracking-[0.03em]">
                <div className="bg-green-400/40 text-green-900 inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight shadow-inset-skeuo">
                  <span>READ</span>
                </div>
                <h3 className="mt-3 line-clamp-3">Children of Dune</h3>
                <span className="text-neutral-400">Frank Herbert</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative isolate flex h-full w-full flex-col justify-between">
            <img
              alt="Philodendron hederaceum ‘Micans’"
              sizes="(min-width: 1280px) 25vw,
      (min-width: 1024px) 33vw,
      (min-width: 640px) 50vw,
      100vw"
              srcset="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Fphilodendron-micans.png&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="fill"
              className="pointer-events-none -z-10 object-cover transition-transform group-hover:z-10 group-hover:scale-105"
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
      <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative isolate flex h-full w-full flex-col justify-between">
            <img
              alt="Alocasia baginda ‘Silver Dragon’"
              sizes="(min-width: 1280px) 25vw,
      (min-width: 1024px) 33vw,
      (min-width: 640px) 50vw,
      100vw"
              srcset="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fplants%2Falocasia-silver-dragon_2.png&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="fill"
              className="pointer-events-none -z-10 object-cover transition-transform group-hover:z-10 group-hover:scale-105"
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
                Alocasia baginda ‘Silver Dragon’
              </h3>
            </div>
          </div>
        </div>
      </div>
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
                href="https://lowercasedc.wordpress.com/2021/11/19/dune-2021/"
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
            <div className="p-5">
              <h3 className="font-serif-variation font-serif text-3xl font-light">
                Dune (2021)
              </h3>
              <span className="mt-2 mb-4 block text-sm -tracking-[0.03em] text-neutral-400">
                November 19, 2021
              </span>
              <p className="leading-relaxed text-neutral-700 line-clamp-3 md:line-clamp-4">
                Ah, Dune. I remember the first time watching it in the cinema
                (yes, I watched it twice). It was literally a jaw-dropping
                experience, and I remember so many times during the movie where
                I couldn’t help but chuckle to myself and shake my head in
                disbelief and amazement. I absolutely loved it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative isolate flex h-full w-full flex-col justify-between">
            <img
              alt="MONOKEI x Hand Engineering KAGE"
              sizes="(min-width: 1280px) 25vw,
      (min-width: 1024px) 33vw,
      (min-width: 640px) 50vw,
      100vw"
              srcset="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Fkeyboards%2Fkage.png&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="fill"
              className="pointer-events-none -z-10 object-cover transition-transform group-hover:z-10 group-hover:scale-105"
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
                &nbsp;·&nbsp;Keyboards
              </span>
            </div>
            <div className="flex grow flex-col justify-end gap-3 p-5 transition-opacity bg-gradient-to-t from-neutral-50 group-focus-within:opacity-0 group-hover:opacity-20">
              <div className="flex gap-2">
                <div className="bg-purple-400/40 text-purple-900 inline-block rounded px-1.5 pt-0.5 pb-1 font-mono text-sm tracking-tight shadow-inset-skeuo">
                  <span>EMOGOGO GREY 01</span>
                </div>
              </div>
              <h3 className="font-serif-variation font-serif text-4xl font-light">
                MONOKEI x Hand Engineering KAGE
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="aspect-square px-1 pb-2">
        <div
          className="group h-full w-full overflow-hidden rounded-lg bg-neutral-50 transition-colors focus-within:bg-neutral-100 hover:bg-neutral-100"
          
        >
          <div className="relative flex h-full w-full flex-col justify-between">
            <img
              alt="Fujicolor C200"
              sizes="(min-width: 1280px) 25vw,
      (min-width: 1024px) 33vw,
      (min-width: 640px) 50vw,
      100vw"
              srcset="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=256&amp;q=75 256w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=384&amp;q=75 384w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=3840&amp;q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fghepxtexbwweoynirspy.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fcontent%2Ffilm%2F0032.jpeg&amp;w=3840&amp;q=75"
              decoding="async"
              data-nimg="fill"
              className="rounded-lg object-cover transition-all group-focus-within:mt-12 group-hover:mt-12"
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
                Fujicolor C200
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Content;
