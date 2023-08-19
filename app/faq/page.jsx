'use client'
import PageHero from '@/components/ui/PageHero'
import StepsBox from '@/components/ui/StepsBox'
import FaqComp from '@/components/ui/Faq'
import React from 'react'
import { facilitiesFaq, faq, paymentFaq } from '@/utils/constants'
import Container from '@/components/ui/container'
import GeneralFaq from '@/components/GeneralFaq'

const Faq = () => {
  return (
    <>
        <PageHero 
            title="FAQ"
            desc="Explore our FAQ section to find answers to common queries about our services, processes, and more. We've compiled essential information to ensure you have a seamless and informed experience with Logrite Nigeria Limited." 
            bgUrl="assets/charter.jpg"
        />
        <GeneralFaq />
        <Container classname="md:grid md:grid-cols-12 flex flex-col gap-8 py-10">
          <div className='md:col-span-6 flex flex-col gap-3'>
            <h4 className='text-medium mb-4'>Facilities Question</h4>
            {
              facilitiesFaq.map((item) => (
                <FaqComp title={item.title} desc={item.desc} />
              ))
            }
          </div>
          <div className='md:col-span-6 flex flex-col gap-3'>
            <h4 className='text-medium mb-4'>Payment Question</h4>
            {
              paymentFaq.map((item) => (
                <FaqComp 
                  title={item.title}
                  desc={item.desc}
                />
              ))
            }
          </div>
        </Container>
        <StepsBox />
    </>
  )
}

export default Faq