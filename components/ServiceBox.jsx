'use client';
import Image from "next/image";
import {motion} from "framer-motion";
import {hover, tap, xitem } from "@/utils/variants";
import Link from "next/link";
const ServiceBox = ({icon, title, desc, itemId, btnTitle}) => {
  const smallTitle = title.toLowerCase().replace(/\s+/g, "-")
    return (
    <div className='flex flex-col bg-white gap-4 p-4'>
        <div className="bg-[#37006718] p-2 rounded-full w-[30px] h-[30px] flex justify-center items-center ">
            <Image src="/assets/term.svg" width={15} height={15} className="" alt="Delivery" />
        </div>
        <h2 className='text-base text-black font-semibold'>{title}</h2>
        <p className='text-base text-[#5D5F6D] font-normal'>{desc}</p>
{
  btnTitle &&  <motion.button type="button" whileHover={hover}
  whileTap={tap} variants={xitem} initial="hidden" animate="visible" className={`relative mt-4 w-[200px] h-[20px] flex gap-2 items-center text-sm text-[#370067]`}>
      <Link href={`/services/${smallTitle}`} className="flex gap-2 items-center text-sm text-[#370067]">
      Read More
      <motion.svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </motion.svg>
      </Link> 
  </motion.button>
}
       
    </div>
  )
}

export default ServiceBox
