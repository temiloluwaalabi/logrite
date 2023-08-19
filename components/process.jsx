import React from 'react'
import Container from './ui/container'
import Image from 'next/image'
import Heading from './ui/heading'

const Process = () => {
  return (
    <Container classname="my-10">
        <div className='lg:grid lg:grid-cols-12 gap-12 flex flex-col-reverse'>
            <div className='lg:col-span-6 flex relative w-full lg:h-full h-[450px] lg:mb-0 mb-10 '>
                <Image 
                    alt='Process Image'
                    src="/assets/features.jpg"
                    fill
                    className='object-cover object-center rounded-xl'
                />
            </div>
            <div className='lg:col-span-6 flex flex-col gap-5'>
                <Heading 
                    subtitle="Our best features"
                    beforeText="Let's see"
                    text="what we can"
                    afterText="do for you"
                    desc="At Logrite, we're committed to understanding your unique needs and tailoring our services to create solutions that exceed your expectations. Let's collaborate and embark on a journey towards success together"
                />
                <div className='grid grid-cols-12 flex-col gap-5'>
                    <div className='lg:col-span-12 md:col-span-6 col-span-12 bg-primary-green p-5 rounded-xl'>
                        <div className='text-white'>
                            <div className='flex flex-row gap-5 items-center'>
                                <span className='w-[30px] h-[30px] flex items-center border border-white justify-center rounded-full p-2'>1</span>
                                <h4 className="text-xl">Executive Charter</h4>
                            </div>
                            <p className='mt-3'>Experience luxury and professionalism like never before with our executive charter services. Whether it's a business meeting or a group outing, elevate your travel with comfort, style, and impeccable service.</p>
                        </div>
                    </div>
                    <div className='lg:col-span-12 md:col-span-6 col-span-12 bg-[#eaeaea] p-5 rounded-xl'>
                        <div className='text-black'>
                            <div className='flex flex-row gap-5 items-center'>
                                <span className='w-[30px] h-[30px] flex items-center border border-[#8b8b8b] text-[#8b8b8b] justify-center rounded-full p-2'>2</span>
                                <h4 className="text-xl">Asset Financing</h4>
                            </div>
                            <p className='mt-3'>Turn aspirations into reality with our asset financing solutions. From vehicles to equipment, we provide flexible options that empower you to acquire the resources you need to succeed.</p>
                        </div>
                    </div>
                    <div className='lg:col-span-12 md:col-span-12 col-span-12 bg-[#eaeaea] p-5 rounded-xl'>
                        <div className='text-black'>
                            <div className='flex flex-row gap-5 items-center'>
                                <span className='w-[30px] h-[30px] flex items-center border border-[#8b8b8b] text-[#8b8b8b] justify-center rounded-full p-2'>3</span>
                                <h4 className="text-xl">Delivery Truck Transportation</h4>
                            </div>
                            <p className='mt-3'>Efficient and reliable, our delivery truck transportation ensures your cargo reaches its destination seamlessly. Trust us to manage your deliveries with precision and care.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>

  )
}

export default Process