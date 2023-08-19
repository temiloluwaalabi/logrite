import { Sparkles } from 'lucide-react'
import Container from './ui/container'
import Button from './ui/button'
import Title from './ui/title'
import Image from 'next/image'

const Solutions = () => {
  return (
    <Container classname="bg-dark-blue py-12 flex flex-col gap-8">
        <Title 
            subtitle="Our best solution for you"
            title="We have solutions that works for you!"
            show="true"
        />
            <div className='flex flex-col gap-4'>
                <div className='lg:grid lg:grid-cols-12 flex-col bg-primary-green rounded-xl p-5'>
                    <div className='lg:col-span-6 flex flex-col gap-5'>
                        <h3 className='text-[30px] font-medium text-white'>Executive Charter Service</h3>
                        <p className='text-sm max-w-[450px] text-[#e8e8e8]'>Experience luxury and professionalism like never before with our executive charter services. Whether it's a business meeting or a group outing, elevate your travel with comfort, style, and impeccable service.</p>
                        <div>
                            <Button label="Learn More" type="button" href="services/executive-travel" classname="bg-transparent border-solid border text-white border-white hover:bg-white hover:text-dark-blue" />
                        </div>
                    </div>
                    <div className='lg:col-span-6 flex flex-col items-center'>
                        {/* <div className='relative w-[200px] h-full'>
                            <Image 
                                src="/assets/carThree.png"
                                alt="Car BG"
                                fill
                                className="object-cover object-center transform origin-center mt-[-10px]"
                            />
                        </div> */}
                    </div>
                </div>
                <div className='bg-white rounded-xl p-5 lg:grid lg:grid-cols-12 flex-col'>
                <div className='lg:col-span-6 flex flex-col gap-5'>
                        <h3 className='text-[30px] font-medium text-primary-black'>Delivery Truck Transportation</h3>
                        <p className='text-sm max-w-[450px] text-[#282932]'>Logrite offers a comprehensive solution for your cargo needs, including bulk delivery, home moving, and truck rental services. Our skilled team ensures safe and timely transport, whether you're relocating or need to move goods in quantity</p>
                        <div>
                            <Button label="Learn More" type="button" href="services/truck-service" classname="bg-transparent border-solid border border-dark-blue hover:text-white hover:bg-dark-blue" />
                        </div>
                    </div>
                    <div className='lg:col-span-6 flex flex-col items-center'>
                        <div className='relative w-[310px] h-full'>
                            <Image 
                                src="/assets/carTwo.png"
                                alt="Car BG"
                                fill
                                className="object-cover object-center transform origin-center"
                            />
                        </div>
                    </div>                </div>
            </div>
    </Container>
  )
}

export default Solutions