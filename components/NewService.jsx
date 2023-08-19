import React from 'react'
import ServiceBox from './ServiceBox'
import { ourServices } from "@/utils/constants"
import Container from './ui/container'
import Title from './ui/title'

const NewService = () => {
  return (
    <Container classname='flex flex-col py-10 gap-10 bg-primary-green'>
        <div className='text-white'>
            <Title 
                subtitle="Our Services"
                title="Expertise that Ignites Your Journey: Unveiling Logrite's Unparalleled Capabilities"
                desc=" From personalized consultations to finalizing trips, our process is designed to deliver excellence to clients across Nigeria." 
                // label="Start a Project"
                // href="enquiry"        
                // classname="bg-dark-blue text-dark-blue"
                divClass="items-center max-w-[85%]"
            />
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
          {
            ourServices.map((item) => (
              <ServiceBox title={item.title} desc={item.description} itemId={item.id} key={item.title} btnTitle="show"/>
            ))
          }
        </div>
    </Container>
  )
}

export default NewService