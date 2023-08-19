import React from 'react'
import Button from './ui/button'
import { Play } from 'lucide-react'

const Hero = () => {
  return (
    <section 
        style={{backgroundImage: `url("/assets/heroTwo.jpg")`}}
        className='relative flex items-center px-7 h-full object-center bg-cover md:bg-center bg-right-top'
    >
        <div className='absolute inset-0 bg-primary-black bg-opacity-70' />

        <div className='text-white z-30 md:grid md:grid-cols-12 items-center gap-x-12 w-full py-52 h-full'>
          <div className='lg:col-span-6 md:col-span-4'/>
          <div className='lg:col-span-6 md:col-span-8 flex flex-col justify-center md:gap-y-4 gap-y-8 h-full'>
            <h2 className='lg:text-[55px] md:text-[45px] text-[38px] font-bold lg:leading-[60px] md:leading-[55px] leading-[48px] text-white'>
            Your Partner in Logistics, <span className='text-primary-green'>Transportation</span> , and Business Advisory
            </h2>
            <p className='lg:text-[18px] text-[15px] lg:max-w-[80%] max-w-[90%]'>At Logrite Nigeria Limited, we go beyond ordinary to redefine how you experience logistics, transportation, and business consultancy. Our four sectors are designed to empower you with solutions that matter, enabling you to focus on what you do best. Explore our services and discover how we can transform your journey.</p>
            <div className='flex md:flex-row flex-col md:items-center items-start gap-y-2 gap-x-5'>
              <Button label="Get Started" href="contact" btnBg="#333" classname="text-medium font-bold" />
              <div className='flexBetween gap-4 py-4 cursor-pointer group'>
                <span className='flex items-center justify-center bg-white rounded-full p-3 group-hover:bg-primary-green '>
                  <Play className='text-primary-green group-hover:text-white' size={22} />
                </span>
                <h4 className='text-medium hover:text-primary-green'>Watch Video</h4>
            </div>
            </div>
            
          </div>
        </div>
        
    </section>
  )
}

export default Hero