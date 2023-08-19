import React from 'react'
import Container from './ui/container'
import Heading from './ui/heading'
import TopAni from './ui/TopAni'
import { ourProcess } from '@/utils/constants'
import ProcessBox from './ui/ProcessBox'

const NewProcess = () => {
  return (
    <Container classname="py-20 flex flex-col gap-7">
            <div className='grid grid-cols-12'>
                <div className='lg:col-span-6 md:col-span-8 col-span-10'>
                    <Heading
                        subtitle="OUR PROCESS"
                        beforeText="The process we are working With"
                        text="Our client"
                        afterText="Nationwide"
                        desc="At Logrite, we seamlessly guide our clients through a tailored process, spanning consultation, booking, confirmation, and journey. With a client-centric approach, we ensure a smooth experience, exceeding expectations."
                    />
                </div>
                <div className='flex justify-end lg:col-span-6 md:col-span-4 col-span-2'>
                    <TopAni />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 '>
                {
                    ourProcess.map((item) => (
                        <ProcessBox number={item.number} title={item.title} desc={item.description} bottom={item.bottom}
                        key={item.title}
                        />
                    ))
                }
            </div>
    </Container>
  )
}

export default NewProcess