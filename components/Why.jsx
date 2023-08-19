import React from 'react'
import Container from './ui/container'
import Title from './ui/title'
import { AlarmClock, CarFront, CheckCheck, Goal, UserCheck, Zap } from 'lucide-react'

const Why = () => {
  return (
    <Container classname="py-10 flex flex-col gap-10 bg-dark-blue">
        <Title 
            title="Why partner with logrite?"
            subtitle="Benefits partnering with us"
            desc="Discover the compelling reasons to choose Logrite Nigeria Limited as your trusted partner in logistics and transportation."
            show
            divClass="text-white"
        />
        <div className='md:grid md:grid-cols-12 flex md:flex-row flex-col gap-5 text-white'>
            <div className='lg:col-span-4 md:col-span-6 flex flex-col gap-5 shadow-booking rounded-xl p-5'>
                <Zap className='text-primary-green' size={20}/>
                <h3 className='text-2xl font-bold'>Experience and Expertise</h3>
                <p className='text-sm text-[#bdbdbd]'>Benefit from our years of experience and industry expertise, ensuring a smooth and efficient journey.</p>
            </div>
            <div className='lg:col-span-4 md:col-span-6 flex flex-col gap-5 shadow-menu border border-[#bdbdbd63] rounded-xl p-5'>
                <CarFront className='text-primary-green' size={20}/>
                <h3 className='text-2xl font-bold'>Quality Fleet</h3>
                <p className='text-sm text-[#bdbdbd]'>Enjoy top-notch vehicles that are meticulously maintained, ensuring safety, comfort, and style. </p>
            </div>
            <div className='lg:col-span-4 md:col-span-12 flex flex-col gap-5 shadow-menu border border-[#bdbdbd63] rounded-xl p-5'>
                <Goal className='text-primary-green' size={20}/>
                <h3 className='text-2xl font-bold'>Client-Centric Approach</h3>
                <p className='text-sm text-[#bdbdbd]'>Our focus is on your satisfaction. We prioritize your needs to deliver exceptional experiences. </p>
            </div>
        </div>
        <div className='md:grid md:grid-cols-12 flex md:flex-row flex-col gap-5 text-white'>
            <div className='lg:col-span-4 md:col-span-6 flex flex-col gap-5 shadow-booking rounded-xl p-5'>
                <CheckCheck className='text-primary-green' size={20}/>
                <h3 className='text-2xl font-bold'>Tailored Solutions</h3>
                <p className='text-sm text-[#bdbdbd]'>We understand your unique needs, offering personalized solutions that exceed your expectations.</p>
            </div>
            <div className='lg:col-span-4 md:col-span-6 flex flex-col gap-5 shadow-menu border border-[#bdbdbd63] rounded-xl p-5'>
                <UserCheck className='text-primary-green' size={20}/>
                <h3 className='text-2xl font-bold'>Dedicated Support</h3>
                <p className='text-sm text-[#bdbdbd]'>Our attentive customer service is always ready to assist, providing seamless communication and support.</p>
            </div>
            <div className='lg:col-span-4 md:col-span-12 flex flex-col gap-5 shadow-menu border border-[#bdbdbd63] rounded-xl p-5'>
                <AlarmClock className='text-primary-green' size={20}/>
                <h3 className='text-2xl font-bold'>Punctuality and Reliability</h3>
                <p className='text-sm text-[#bdbdbd]'>Count on us for punctual arrivals and dependable service, respecting your time and commitments.</p>
            </div>
        </div>
    </Container>

  )
}

export default Why