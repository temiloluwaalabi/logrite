import React from 'react'
import Container from './container'
import { ChevronsRight } from 'lucide-react'
import Title from './title'

const PageHero = (
    {title, desc, bgUrl}
) => {
  return (
    <section
        className="relative px-7 h-[450px] bg-cover"
        style={{backgroundImage: `url("${bgUrl}")`}}
    >
        <div className='absolute inset-0 z-20 bg-primary-black bg-opacity-60' />
        <div className='absolute md:pt-10 pt-16 top-0 left-0 px-7 text-white z-30 items-center gap-5 w-full h-full md:grid md:grid-cols-12 flex flex-col justify-center'>
            <div className='lg:col-span-7 md:col-span-6 flex flex-col md:items-start items-center'>
                <h2 className='text-[35px] text-bold'>{title}</h2>
                <p className='md:text-md text-sm max-w-[500px] md:text-left text-center'>{desc}</p>
            </div>
            <div className='lg:col-span-5 md:col-span-6 flex flex-row gap-4 items-center md:justify-end'>
                <span className='text-medium'>Home</span>
                <ChevronsRight size={20} className='text-primary-green'/>
                <span className='text-medium'>{title}</span>
            </div>
        </div>
    </section>

  )
}

export default PageHero