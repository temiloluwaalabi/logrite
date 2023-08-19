import { Disclosure } from '@headlessui/react'
import { ChevronsRight } from 'lucide-react'
import React from 'react'

const FaqComp = ({
  title, desc
}) => {
  return (
    <Disclosure className="bg-black w-full">
        {({open}) => (
            <>
            <Disclosure.Button className="p-5 flex flex-row gap-2 items-center bg-primary-green rounded-xl text-white w-full">
            <ChevronsRight size={20} className={open ? 'rotate-90 transform' : ''} />
            {title}
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 bg-transparent p-5 flex flex-row gap-2 items-center mt-2">
            {desc}
            </Disclosure.Panel>
            </>
        )}
        
    </Disclosure>
  )
}

export default FaqComp