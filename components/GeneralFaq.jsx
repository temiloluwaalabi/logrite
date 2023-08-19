'use client'
import Container from './ui/container'
import Heading from './ui/heading'
import { faq } from '@/utils/constants'
import FaqComp from './ui/Faq'
import Button from './ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const GeneralFaq = () => {
  return (
<Container classname="lg:grid lg:grid-cols-12 flex py-12 flex-col gap-12">
          <div className='lg:col-span-6 flex flex-col gap-3'>
            <Heading 
              subtitle="FAQ"
              beforeText="General"
              text="Question"
              desc=" We've compiled essential information to ensure you have a seamless and informed experience with Logrite Nigeria Limited"
            />
            {faq.map((item) => (
                <FaqComp title={item.title} desc={item.desc} key={item} />
            ))}
            <div>
              <Button 
                label="More About Us"
                href="about"
                type="button"
                classname="text-white"
              />
            </div>
          </div>
          <div className='relative flex justify-end lg:col-span-6 w-full lg:h-full h-[450px]'>
                <div className='relative h-full w-full'>
                    <Image 
                        src="/assets/charter.jpg"
                        alt='about one'
                        className='object-cover object-center rounded-xl'
                        fill
                    />
                </div>
                <div className='absolute left-0 bottom-0 bg-white rounded-xl ml-10 mb-10 p-5 flex flex-col gap-3 '>
                    <h4 className='text-xl font-bold leading-6 '>If You Need Help, Get A <br />Consultation</h4>
                      <Link href="/contact" className='flex items-center gap-2 cursor-pointer text-small'>
                        View Details
                        <ArrowRight size={15} />
                      </Link>
                </div>
            </div>        
        </Container>  )
}

export default GeneralFaq