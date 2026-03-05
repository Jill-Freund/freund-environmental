import Image from 'next/image'
import React from 'react'

const Hero2 = () => {
  return (
    <div className='h-dvh w-screen flex justify-center items-center'>
        <div className='relative size-full bg-black'>
            <Image src={"/assets/hero-bg.jpg"} alt='Hero Bg' className='object-cover opacity-50' fill />
        </div>
        <div className='absolute inset-0 flex items-center justify-center z-5'>
            <div className='px-5 max-w-6xl text-center [&_h1]:font-figtree-bold-italic [&_h2]:font-figtree-bold-italic text-white text-5xl lg:text-6xl [&_h2]:text-xl [&_h2]:lg:text-2xl [&_h1]:tracking-tight [&_h1]:md:text-[6.8vw] [&_h1]:lg:text-[6.5vw] [&_h1]:xl:text-[6vw]'>
              <h1>Drinking Water and Wastewater Consultants</h1>
              <h2 className='mt-5'>
                Specializing in projects for homeowners and small businesses.
              </h2>
            </div>
        </div>
    </div>
  )
}

export default Hero2