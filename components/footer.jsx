import React from 'react'
import Container from './ui/container'
import FooterLogo from './ui/FooterLogo'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import Widget from './ui/widget'
import { aboutLinks, logriteSub } from '@/utils/constants'

const Footer = () => {
  
  return (
    <Container classname="bg-dark-blue text-white py-16">
      <div className='md:grid md:grid-cols-12 gap-10 flex md:flex-row flex-col'>
        <div className='lg:col-span-3 md:col-span-6 flex flex-col items-start gap-4'>
          <FooterLogo />
          <p className='text-sm '>Learn about Logrite Nigeria Limited - our history, values, and commitment to elevating logistics, travel, and business advisory. Explore our journey towards excellence and the pillars that define us.
          </p>
          <div className='flex text-primary-green gap-4'>
            <Facebook size={20} className='cursor-pointer' />
            <Twitter size={20} className='cursor-pointer' />
            <Instagram size={20} className='cursor-pointer' />
            <Youtube size={20} className='cursor-pointer' />
          </div>
        </div>
        <div className='lg:col-span-3 md:col-span-6 flex'>
          <Widget 
            WidgetTitle="About Logrite"
            links={aboutLinks}
          />
        </div>
        <div className='lg:col-span-3 md:col-span-6'>
          <Widget 
            WidgetTitle="Logrite Companies"
            links={logriteSub}
          />
        </div>
        <div className='lg:col-span-3 md:col-span-6 flex flex-col gap-2'>
          <h4 className='text-white font-semibold text-lg'>Contact Info</h4>
          <div className='flex flex-col gap-4'>
            <span className='flex flex-row text-sm gap-2 items-center'>
              <MapPin size={20} className='text-primary-green' />
              30B Ogunsana Crescent, Gateway Zone. Magodo Phase 1
            </span>
            <div className='lg:w-full w-[70%] h-[1px] bg-[#bdbdbd63]' />
            <span className='flex flex-row text-sm gap-2 items-center'>
              <Phone size={20} className='text-primary-green' />
              (+234) 81 290 230 87
            </span> 
            <div className='lg:w-full w-[70%] h-[1px] bg-[#bdbdbd63]' />
            <span className='flex flex-row text-sm gap-2 items-center'>
              <Mail size={20} className='text-primary-green' />
              support@logrite.com
            </span>
          </div>
        </div>
      </div>
    </Container>

  )
}

export default Footer