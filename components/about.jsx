import Container from './ui/container'
import { Check } from 'lucide-react'
import Image from 'next/image'
import Button from './ui/button'
import Heading from './ui/heading'
import { about } from '@/utils/constants'

const About = () => {
  return (
    <Container>
        <div className='lg:grid lg:grid-cols-12 flex-col gap-10 py-12'>
            <div className='lg:col-span-6 flex flex-col gap-6'>
                <Heading 
                    subtitle="About Logrite"
                    beforeText="Discover the Journey of Innovation and Reliability at "
                    text="Logrite"
                    afterText="Nigeria Limited"
                    desc="Logrite isn't just about logistics and transportation; we're catalysts for progress across industries. With innovation and commitment, we're here to redefine journeys and empower success. Join us on this transformative path."
                />
                <div className='flex gap-5'>
                    <div className='md:grid md:grid-cols-12 flex flex-col flex-wrap gap-5'>
                        {
                            about.map((item) => (
                                <div key={item} className='md:col-span-6 flex gap-3 items-center'>
                            <span className='w-[20px] h-[20px] rounded-full bg-primary-green text-white flex items-center justify-center'>
                                <Check size={15} />
                            </span>
                            <span className='text-small'>{item}</span>
                        </div>  
                            ))
                        }
                    </div>
                </div>
                <div>
                <Button type="button" label="More About Us" href="about" classname="text-white" />
                </div>
            </div>
            <div className='relative lg:col-span-6 w-full lg:h-full h-[450px] lg:mt-0 mt-10'>
                <div className='relative h-full w-[75%]'>
                    <Image 
                        src="/assets/aboutCompTwo.jpg"
                        alt='about one'
                        className='object-cover object-center rounded-xl'
                        fill
                    />
                </div>
                <div className='absolute top-0 right-0 translate-y-[30%] w-[50%] h-[270px] '>
                    <Image 
                        src="/assets/aboutTwo.jpg"
                        alt='about two'
                        className='object-cover object-center rounded-xl border-8 border-solid border-white'
                        fill
                    />
                </div>
                <div></div>
            </div>
        </div>
    </Container>
  )
}

export default About