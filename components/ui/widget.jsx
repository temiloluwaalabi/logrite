'use client'
import { ChevronsRight } from 'lucide-react'
import Link from 'next/link'

const Widget = ({WidgetTitle, links}) => {
  return (
    <div className='flex flex-col gap-2'>
        <h2 className='text-white font-semibold text-lg'>{WidgetTitle}</h2>
        <div className='flex flex-col gap-2 '>
            {links.map((link, id) => (
                <Link className='text-white font-medium text-sm capitalize flex flex-row items-center gap-4' href={`/${
                  link.toLowerCase()
                  .replace(/\s+/g, "-")
                  }`} key={id}>
                    <ChevronsRight size={15} className='text-primary-green'/>
                    <span>
                    {link}
                    </span>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Widget