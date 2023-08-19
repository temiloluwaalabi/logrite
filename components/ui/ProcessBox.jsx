import Image from 'next/image'
import Barani from './Barani'

const ProcessBox = ({show, bottom, number, title, desc}) => {
  return (
    <div className='flex flex-col relative'>
        {
            !show && <div className="divider sm:block hidden"></div>

        }
    <div className='flex flex-row gap-5 p-6 border border-[#2325362B] relative'>
        <div>
            <div className="bg-[#37006718] p-2 rounded-full flex justify-center items-center w-[30px] h-[30px] ">
                <Image src="/assets/images/term.svg" width={25} height={25} className="w-[90%] h-[90%] object-cover" alt="Delivery" />
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='text-base font-semibold text-black'>{title}</h2>
            <p className='text-sm font-normal text-[#232536]'>{desc}</p>
        </div>
        <h4 className='absolute right-0 top-0 mr-4 mt-3 text-2xl font-semibold opacity-25'>{number}</h4>
    </div>
    <div className="w-[100%]">
        {
            bottom != show &&<Barani />

        }
        </div>
    </div>
    
        
  )
}

export default ProcessBox