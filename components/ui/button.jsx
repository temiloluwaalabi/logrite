'use client'
import { hover, tap, xitem } from "@/utils/variants"
import {motion} from "framer-motion"
import Link from 'next/link'

const Button = ({label, href, classname, btnBg, type}) => {
  return (
    <motion.button 
      whileHover={hover}
      whileTap={tap}
      variants={xitem}
      initial="hidden"
      animate="visible"
      type={type} 
      className={`${classname} h-[40px] bg-primary-green px-10 py-6 rounded-3xl flex items-center justify-center`}
    >
        <Link href={`/${href}`}>
            {label}
        </Link>
    </motion.button>
  )
}

export default Button
