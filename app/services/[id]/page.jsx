'use client'

import PageHero from "@/components/ui/PageHero";
import Container from "@/components/ui/container";
import { ourServices } from "@/utils/constants";
import { usePathname } from "next/navigation"
import FormElement from '@/components/ui/formElement'
import Heading from '@/components/ui/heading'
import { Facebook, Instagram, Linkedin, LocateIcon, MailIcon, Phone, Twitter, Youtube } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import NormalButton from '@/components/ui/NormalButton'
import BookStepBox from "@/components/ui/BookStepBox";
const ServiceSub = () => {
  const pathName = usePathname()
  const parts = pathName.split("/");
  const url = parts.pop();
  const pageName = url.split('-').map((word) =>
  (word.charAt(0).toUpperCase() + word.slice(1))).join(' ');
  const item = ourServices.filter((item) => item.title === pageName)
  const [loading, setLoading] = useState(false)
  const {
    reset,
    control,
    handleSubmit,
    formState: {errors, isSubmitSuccessful}
  } = useForm({
    defaultValues:{
      name:"",
      phone:"",
      email:"",
      subject:"",
      message:""
    }
  })

  useEffect(() => {
    if(isSubmitSuccessful){
      reset();
    }
  }, [isSubmitSuccessful, reset])

  const onSubmit = async(data) => {
    setLoading(true)
    console.log(data)
  }
  return (
    <div>
      <PageHero 
            title={pageName}
            desc={item[0].description} 
            bgUrl="../assets/service.jpg"
        />
        <Container classname="py-12 lg:grid lg:grid-cols-12 flex flex-col-reverse lg:gap-12 gap-12">
          <div className='lg:col-span-6'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 rounded-xl shadow-step p-8'>
              <div className='md:grid md:grid-cols-12 flex flex-col gap-5'>
                <div className='md:col-span-6'>
                  <Controller 
                    name='name'
                    control={control}
                    rules={{required:true}}
                    render={({field}) => (
                      <FormElement 
                        type="text"
                        label="Name"
                        placeholder="Your Name"
                        fieldRef={field}
                        hasError={errors.name?.type === 'required'}
                      />
                    )}
                  />
                </div>
                <div className="md:col-span-6">
                  <Controller 
                    name='phone'
                    control={control}
                    rules={{required:true}}
                    render={({field}) => (
                      <FormElement 
                        type="text"
                        label="Phone Number"
                        placeholder="Your Phone Number"
                        fieldRef={field}
                        hasError={errors.phone?.type === 'required'}
                      />
                    )}
                  />
                </div>
              </div>
              <Controller 
                  name='email'
                  control={control}
                  rules={{required:true}}
                  render={({field}) => (
                    <FormElement 
                      type="text"
                      label="Email"
                      placeholder="Your Email"
                      fieldRef={field}
                      hasError={errors.email?.type === 'required'}
                    />
                  )}
                />
              <Controller 
                  name='subject'
                  control={control}
                  rules={{required:true}}
                  render={({field}) => (
                    <FormElement 
                      type="text"
                      label="Subject"
                      placeholder="Your Subject"
                      fieldRef={field}
                      hasError={errors.subject?.type === 'required'}
                    />
                  )}
                />
              <Controller 
                  name='message'
                  control={control}
                  rules={{required:true}}
                  render={({field}) => (
                    <FormElement 
                      type="textarea"
                      label="Message"
                      placeholder="Your Message"
                      fieldRef={field}
                      hasError={errors.message?.type === 'required'}
                    />
                  )}
                />
                {
                  loading ? <p className='bg-pink-300 text-black rounded-lg p-2'>Loading...</p> : 
                  <NormalButton 
                    label="Send Message"
                    type="Submit"
                    classname="text-white"
                  />
                }
            </form>
          </div>
          <div className='lg:col-span-6 flex flex-col gap-8 '>
            <Heading 
              subtitle="Book Now"
              beforeText={pageName}
              desc={item[0].description}
            />
            <div className='md:grid md:grid-cols-12 gap-8 flex flex-col'>
              <div className='md:col-span-6 flex items-center gap-5'>
                <span className='bg-primary-green text-white flex items-start justify-center rounded-xl p-4'>
                  <LocateIcon size={35} />
                </span>
                <div className='flex flex-col gap-2'>
                  <h4 className='text-base font-bold'>Abuja, Nigeria</h4>
                  <p className='text-sm'>30B, Ogunsana Crescent. Gateway Zone. Magodo Phase</p>
                </div>
              </div>
              <div className='md:col-span-6 flex items-center gap-5'>
                <span className='bg-primary-green text-white flex items-start justify-center rounded-xl p-4'>
                  <LocateIcon size={35} />
                </span>
                <div className='flex flex-col gap-2'>
                  <h4 className='text-base font-bold'>Abuja, Nigeria</h4>
                  <p className='text-sm'>30B, Ogunsana Crescent. Gateway Zone. Magodo Phase</p>
                </div>
              </div>
              <div className='md:col-span-6 flex items-center gap-5'>
                <span className='bg-primary-green text-white flex items-start justify-center rounded-xl p-4'>
                  <Phone size={35} />
                </span>
                <div className='flex flex-col gap-2'>
                  <h4 className='text-base font-bold'>Call Us</h4>
                  <p className='text-sm'>(+234) 81 290 23087</p>
                </div>
              </div>
              <div className='md:col-span-6 flex items-center gap-5'>
                <span className='bg-primary-green text-white flex items-start justify-center rounded-xl p-4'>
                  <MailIcon size={35} />
                </span>
                <div className='flex flex-col gap-2'>
                  <h4 className='text-base font-bold'>Email Information</h4>
                  <p className='text-sm'>support@domain.com</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
              <h4 className='text-base font-bold'>Follow Our Social Media</h4>
              <div className='flex items-center gap-3'>
                <span className='flex items-center justify-center p-4 rounded-xl bg-primary-green text-white'>
                  <Facebook size={20} />
                </span>
                <span className='flex items-center justify-center p-4 rounded-xl bg-primary-green text-white'>
                  <Twitter size={20} />
                </span>
                <span className='flex items-center justify-center p-4 rounded-xl bg-primary-green text-white'>
                  <Instagram size={20} />
                </span>
                <span className='flex items-center justify-center p-4 rounded-xl bg-primary-green text-white'>
                  <Linkedin size={20} />
                </span>
                <span className='flex items-center justify-center p-4 rounded-xl bg-primary-green text-white'>
                  <Youtube size={20} />
                </span>
              </div>
            </div>
          </div>
        </Container>
        <BookStepBox />
    </div>
  )
}

export default ServiceSub