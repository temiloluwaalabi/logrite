import React from 'react'
import Container from './ui/container'
import Title from './ui/title'
import Image from 'next/image'

const Misbox = () => {
  return (
    <Container classname="py-10 flex flex-col gap-8">
        <div className=''>
          <Title 
            subtitle="Benefits that Set Us Apart"
            divClass="text-black"
            title="Unlock the Advantages with Logrite"
            desc="Experience hassle-free travel with personalized solutions, punctual service, and modern amenities that redefine your journey."
            label="Learn More"
            href="learn"
            classname="bg-transparent rounded-xl text-black hover:bg-primary-green hover:text-white border border-[#cdcdcd]"
          />
        </div>
        <div className='md:grid md:grid-cols-12 flex md:flex-row flex-col gap-4'>
          <div className='lg:col-span-4 md:col-span-5 shadow-step lg:p-8 md:p-6 p-4 border border-[#cdcdcd] rounded-xl flex flex-col gap-3'>
            <h3 className='text-2xl font-bold'>Our Mission: Shaping Futures through Excellence</h3>
            <p className='text-sm'>Guided by our unwavering commitment to integrity, innovation, and customer-centricity, our mission is to empower individuals and businesses with pioneering logistics solutions, unparalleled transportation services, and expert consultancy.</p>
          </div>
          <div className='lg:col-span-8 md:col-span-7 lg:p-8 md:p-6 p-4 pt-0 bg-primary-green rounded-xl shadow-step flex lg:flex-row justify-between flex-col-reverse gap-4 text-white'>
            <div className='flex flex-col gap-3 lg:max-w-[50%] max-w-[100%]'>
              <h3 className='text-2xl font-bold'>Unparalleled Charter Travel</h3>
              <p className='text-sm'>Embark on a journey of comfort and luxury with our array of charter services, catering to executive rides, group travel, airport transfers, and more.</p>
            </div>
            <div className='flex justify-center items-start gap-3 p-0'>
              <Image 
                src="/assets/carTwo.png"
                alt='Charter Car'
                width={180}
                height={200}
                className='object-cover object-center'
              />
            </div>
          </div>
        </div>
        <div className='md:grid md:grid-cols-12 flex md:flex-row flex-col-reverse gap-4'>
        <div className='lg:col-span-8 md:col-span-7 lg:p-8 md:p-6 p-4 pt-0 bg-primary-green rounded-xl shadow-step flex lg:flex-row justify-between flex-col-reverse gap-4 text-white'>
            <div className='flex flex-col gap-3 lg:max-w-[50%] max-w-[100%]'>
              <h3 className='text-2xl font-bold'>Strategic Business Guidance</h3>
              <p className='text-sm'>Navigate complexities confidently with our business and financial advisory services. Gain insights that transform decisions and propel growth, setting your enterprise on a trajectory towards success.</p>
            </div>
            <div className='flex justify-center items-center gap-3'>
              <Image 
                src="/assets/carTwo.png"
                alt='Charter Car'
                width={200}
                height={200}
                className='object-cover object-center'
              />
            </div>
          </div>
          <div className='lg:col-span-4 md:col-span-5 shadow-step lg:p-8 md:p-6 p-4 border border-[#cdcdcd] rounded-xl flex flex-col gap-3'>
            <h3 className='text-2xl font-bold'>Our Vision: Pioneering Progress, Leading the Way</h3>
            <p className='text-sm'>Envisioning a future where possibilities are limitless, we aspire to become the foremost provider of integrated logistics, transportation, and advisory solutions.  </p>
          </div>
        </div>
    </Container>
  )
}

export default Misbox