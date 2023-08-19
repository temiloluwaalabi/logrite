import React from 'react'
import Button from './button'
import { Sparkles } from 'lucide-react'

const Title = ({
  subtitle,
  title,
  desc,
  label,
  href,
  classname,
  divClass,
  show,
  showBtn,
  showDesc
}) => {
  return (
    <div className='text-white flex flex-col items-center gap-5'>
                <h5 className='text-small flex gap-3 text-dark-blue-100 bg-[#bdbdbd] px-4 py-2 rounded-3xl w-fit'>
                    {subtitle}
                    {show &&                     
                    <Sparkles size={20} className='text-primary-green' />
                    }
                </h5>
                <div className={`flex flex-col gap-1 ${divClass}`}>
                  <h2 className='lg:text-[40px] text-[30px] text-center leading-[44px] font-bold'>{title}</h2>  
                  {desc &&                 
                  <p className='test-sm text-center max-w-[650px]'>{desc}</p>
                  }
                </div>
                {label &&
                <Button 
                  label={label}
                  href={href}
                  classname={classname}
                />          
                }
    </div>
  )
}

export default Title