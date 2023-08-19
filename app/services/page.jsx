'use client'
import GeneralFaq from '@/components/GeneralFaq'
import NewProcess from '@/components/NewProcess'
import NewService from '@/components/NewService'
import Process from '@/components/process'
import PageHero from '@/components/ui/PageHero'

const Services = () => {
  return (
<>
        <PageHero 
            title="Our Charter Services"
            desc="Discover a world of tailored travel with our premium charter services. From executive rides to group excursions, our diverse fleet and luxurious amenities redefine your journey. Experience personalized comfort and convenience while our skilled chauffeurs ensure a seamless and sophisticated travel experience." 
            bgUrl="assets/service.jpg"
        />
        <NewProcess />
        <NewService />
        <Process />
        <GeneralFaq />
    </>  
    )
}

export default Services