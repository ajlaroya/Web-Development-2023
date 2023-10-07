import React from 'react'

const IntroCard = () => {
  return (
    <div
        className="row-span-2 px-1 pb-2 sm:col-span-2 lg:aspect-square"
        
      >
        <div className="h-full w-full p-4 sm:p-8">
          <h1 className="tracking-tighter text-2xl font-semibold text-neutral-400 sm:text-2xl lg:text-4xl text-justify">
          Mabuhay! My name is <span className="text-neutral-800">Arthur Laroya</span>, and I'm a passionate web developer with a penchant for crafting digital experiences that are not only functional but also aesthetically pleasing. This portfolio serves as a window into my journey, showcasing the diverse range of projects I've undertaken, my skills, and my dedication to the world of web development.
          </h1>
        </div>
      </div>
  )
}

export default IntroCard