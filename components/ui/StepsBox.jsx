import React from 'react'
import Container from './container'
import Heading from './heading'
import { Bus, DollarSign, File, LocateIcon } from 'lucide-react'

const StepsBox = () => {
  return (
    <Container classname="py-10 flex flex-col gap-8">
        <div className='text-center self-center'>
            <Heading 
                subtitle="How it Works"
                beforeText="4 Steps To"
                text="Booking a Ride"
                afterText="On Logrite"
                desc="Embarking on a journey with Logrite is a seamless process that takes just four easy steps. From exploring our services to receiving confirmation, discover how simple it is to book your ride and experience excellence in transportation."
                pClass="self-center"
            />
        </div>
        <div className='md:grid md:grid-cols-12 flex flex-col gap-8'>
            <div className='bg-white flex flex-col items-center relative gap-1 p-10 shadow-step rounded-[10px] lg:col-span-3 md:col-span-6'>
                <span className="bg-primary-green hover:bg-dark-blue w-[70px] h-[70px] rounded-[10px] flex justify-center items-center">
                    <Bus size={40} className='text-white' />
                </span>
                <h4 className='text-xl mt-4 font-medium'>Book</h4>
                <p className='text-base text-center'>Fill form, choose vehicle & service type for tailored travel experience</p>
                <div className='absolute lg:flex hidden opacity-20 w-[120px] right-0 translate-x-[50%] z-10 translate-y-[30%] transform scale-y-[-1]'>
                    <img 
                        src="assets/arrow-image.png" alt="arrow-image"
                        fill 
                        className='bg-cover'

                    />
                </div>
                
            </div>
            <div className='bg-white flex flex-col items-center relative gap-1 p-10 shadow-step rounded-[10px] lg:col-span-3 md:col-span-6'>
                <span className="bg-primary-green hover:bg-dark-blue w-[70px] h-[70px] rounded-[10px] flex justify-center items-center">
                    <File size={40} className='text-white' />
                </span>
                <h4 className='text-xl mt-4 font-medium'>Consult</h4>
                <p className='text-base text-center'>Personalized call ensures trip details align with your needs and preferences.</p>
                <div className='absolute lg:flex hidden opacity-20 w-[120px] right-0 translate-x-[50%] z-10 translate-y-[150%] transform'>
                    <img 
                        src="assets/arrow-image.png" alt="arrow-image"
                        fill 
                        className='bg-cover'
                    />
                </div>
                
            </div>
            <div className='bg-white flex flex-col items-center relative gap-1 p-10 shadow-step rounded-[10px] lg:col-span-3 md:col-span-6'>
                <span className="bg-primary-green hover:bg-dark-blue w-[70px] h-[70px] rounded-[10px] flex justify-center items-center">
                    <DollarSign size={40} className='text-white' />
                </span>
                <h4 className='text-xl mt-4 font-medium'>Confirm</h4>
                <p className='text-base text-center'>Complete forms, validate trip, receive payment instructions..</p>
                <div className='absolute lg:flex hidden opacity-20 w-[120px] right-0 translate-x-[50%] z-10 translate-y-[30%] transform scale-y-[-1]'>
                    <img 
                        src="assets/arrow-image.png" alt="arrow-image"
                        fill 
                        className='bg-cover'

                    />
                </div>
                
            </div>
            <div className='bg-white flex flex-col items-center relative gap-1 p-10 shadow-step rounded-[10px] lg:col-span-3 md:col-span-6'>
                <span className="bg-primary-green hover:bg-dark-blue w-[70px] h-[70px] rounded-[10px] flex justify-center items-center">
                    <LocateIcon size={40} className='text-white' />
                </span>
                <h4 className='text-xl mt-4 font-medium'>Embark</h4>
                <p className='text-base text-center'>Pay, finalize, and set off on a seamless and unforgettable journey with confidence</p>
            </div>
        </div>
    </Container>
  )
}

export default StepsBox