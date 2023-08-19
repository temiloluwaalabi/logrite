'use client'

import { ArrowBigUp } from "lucide-react";
import { useEffect, useState } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(window.pageYOffset > 300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    };

    const ScrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility)
    
      return () => {
        window.removeEventListener('scroll', toggleVisibility)
      }
    }, [])
    
  return (
    <div>
        {
            isVisible && (
                <button 
                    className="text-white fixed bottom-5 right-5 bg-primary-green shadow-step border-none rounded-full w-10 h-10 flex justify-center items-center text-lg cursor-pointer opacity-70 transition-opacity hover:opacity-100 z-100"
                    onClick={ScrollUp}
                >
                    <ArrowBigUp size={25} />
                </button>
            )
        }
    </div>
  )
}

export default BackToTop