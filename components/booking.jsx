'use client'
import { Controller, useForm } from 'react-hook-form'
import Container from './ui/container'
import { useEffect, useState } from 'react'
import FormElement from './ui/formElement'
import { from as fromDestination, time as timeDestination } from '@/utils/constants'
import Button from './ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'
const Booking = () => {
    const {
        reset,
        control,
        handleSubmit,
        formState: {errors, isSubmitSuccessful}
    } = useForm({
        defaultValues:{
            from : "",
            to: "",
            date : "",
            time: '',
            seat : ""
        }
    })
    const [to, setTo] = useState(false)
    const [from, setFrom] = useState(false)
    const [time, setTime] = useState(false)
    const [toValue, setToValue] = useState("")
    const [fromValue, setFromValue] = useState("")
    const [timeValue, setTimeValue] = useState("")

    useEffect(() => {
      if(isSubmitSuccessful){
        reset()
      }
    }, [isSubmitSuccessful, reset])
    
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <Container classname="bg-transparent z-[30px] mb-[40px] relative ">
        <div className='bg-white shadow-booking mt-[-90px] rounded-xl p-10'>
            <form onSubmit={handleSubmit(onSubmit)} className='md:grid md:grid-cols-12 gap-x-10'>
                <div className='lg:col-span-4 md:col-span-6'>
                    <Controller 
                        name="from"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <div className='flex flex-col gap-2 cursor-pointer mb-6'>
                            <label className='text-gray-700 text-small'>From</label>
                            <div
                                className='form-control w-full px-3 py-1.5 text-gray-700 rounded border border-[#eaeaea] cursor-pointer min-h-[40px] focus:border-primary-green focus:outline-none relative'
                                {...field}
                            >
                                <div className=' flex justify-between items-center'
                                onClick={() => {
                                    setFrom(prevState => !prevState)
                                }}
                                >
                                    <span>{fromValue ? fromValue :  'Select Destination' }</span>
                                    {
                                        from ?   
                                            <ChevronUp />
                              
                                        :
                                                                                                                        <ChevronDown />


                                    }
                                </div>
                                {
                                    from && 
                                    <div className='absolute z-10 w-full left-0 flex flex-col gap-2 mt-5 bg-white shadow-booking'>
                                        {fromDestination.map((location, id) => (
                                            <span 
                                                className='text-small hover:text-white px-3 py-1 hover:bg-primary-green' 
                                                key={id}
                                                onClick={
                                                    () => {
                                                        setFromValue(location)
                                                        setFrom(false)
                                                    }
                                                }
                                            >{location}</span>
                                        ))}
                                    </div>
                                }

                            </div>
                            </div>
                        )}
                    />
                </div>
                <div className='lg:col-span-4 md:col-span-6'>
                    <Controller 
                        name="to"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <div className='flex flex-col gap-2 cursor-pointer mb-6'>
                            <label className='text-gray-700 text-small'>To</label>
                            <div
                                className='form-control w-full px-3 py-1.5 text-gray-700 rounded border border-[#eaeaea] cursor-pointer min-h-[40px] focus:border-primary-green focus:outline-none relative'
                                {...field}
                            >
                                <div className=' flex justify-between items-center'
                                onClick={() => {
                                    setTo(prevState => !prevState)
                                }}
                                >
                                    <span>{toValue ? toValue :  'Select Destination' }</span>
                                    {
                                        to ?   
                                            <ChevronUp />
                              
                                        :
                                                                                                                        <ChevronDown />


                                    }
                                </div>
                                {
                                    to && 
                                    <div className='absolute w-full left-0 flex flex-col gap-2 z-10 mt-5 bg-white shadow-booking'>
                                        {fromDestination.map((toLocation, id) => (
                                            <span 
                                                className='text-small hover:text-white px-3 py-1 hover:bg-primary-green' 
                                                key={id}
                                                onClick={
                                                    () => {
                                                        setToValue(toLocation)
                                                        setTo(false)
                                                    }
                                                }
                                            >{toLocation}</span>
                                        ))}
                                    </div>
                                }

                            </div>
                            </div>
                        )}
                    />
                </div>
                <div className='lg:col-span-4 md:col-span-6'>
                    <Controller 
                        name="date"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormElement 
                                type="date"
                                label="When"
                                fieldRef={field}
                            />
                        )}
                    />
                </div>
                <div className='lg:col-span-4 md:col-span-6'>
                    <Controller 
                        name="time"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <div className='flex flex-col gap-2 cursor-pointer mb-6'>
                            <label className='text-gray-700 text-small'>Time</label>
                            <div
                                className='form-control w-full px-3 py-1.5 text-gray-700 rounded border border-[#eaeaea] cursor-pointer min-h-[40px] focus:border-primary-green focus:outline-none relative'
                                {...field}

                            >
                                <div className=' flex justify-between items-center'
                                onClick={() => {
                                    setTime(prevState => !prevState)
                                }}
                                >
                                    <span>{timeValue ? timeValue :  'Select Time' }</span>
                                    {
                                        to ?   
                                            <ChevronUp />
                              
                                        :
                                                                                                                        <ChevronDown />


                                    }
                                </div>
                                {
                                    time && 
                                    <div className='absolute z-10 w-full left-0 flex flex-col gap-2 mt-5 bg-white shadow-booking'>
                                        {timeDestination.map((time, id) => (
                                            <span 
                                                className='text-small hover:text-white px-3 py-1 hover:bg-primary-green' 
                                                key={id}
                                                onClick={
                                                    () => {
                                                        setTimeValue(time)
                                                        setTime(false)
                                                    }
                                                }
                                            >{time}</span>
                                        ))}
                                    </div>
                                }

                            </div>
                            </div>
                        )}
                    />
                </div>
                <div className='lg:col-span-4 md:col-span-6'>
                    <Controller 
                        name="seat"
                        control={control}
                        rules={{required: true}}
                        render={({field}) => (
                            <FormElement 
                                label="Seat"
                                type="number"
                                placeholder="Enter the seat number"
                                fieldRef={field}

                            />
                        )}
                    />
                </div>
                <div className='lg:col-span-4 md:col-span-6 flex items-center '>
                     <button type='submit' className='h-[40px] bg-primary-green w-full px-10 text-white py-6 rounded-3xl flex items-center justify-center'>Submit Request</button>
                </div>
            </form>
        </div>
    </Container>
  )
}

export default Booking