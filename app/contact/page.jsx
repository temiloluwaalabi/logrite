'use client'
import NormalButton from '@/components/ui/NormalButton'
import PageHero from '@/components/ui/PageHero'
import StepsBox from '@/components/ui/StepsBox'
import Container from '@/components/ui/container'
import FormElement from '@/components/ui/formElement'
import Heading from '@/components/ui/heading'
import { Facebook, Instagram, Linkedin, LocateIcon, MailIcon, Phone, Twitter, Youtube } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'


const Contact = () => {
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
    <>
        <PageHero 
            title="Contact Us"
            desc="Get in touch with us to explore how Logrite Nigeria Limited can partner with you to achieve excellence. Our dedicated team is ready to assist you with personalized solutions tailored to your needs." 
            bgUrl="assets/contact.jpg"
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
              subtitle="Contact Us"
              beforeText="Get In Touch"
              desc="Our dedicated team is ready to assist you with personalized solutions tailored to your needs."
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
        <StepsBox />
    </>
  )
}

export default Contact