import { Dialog } from '@headlessui/react'
import { X } from 'lucide-react'
import React from 'react'
import MainNav from './main-nav'
import Logo from './ui/logo'

const MobileMenu = ({open, onClose}) => {
  return (
    <div>
        <Dialog open={open} as='div' className="relative z-40 lg:hidden" onClose={onClose}>
            <div className='fixed inset-0 bg-primary-black bg-opacity-25' />
            <div className="fixed top-0 left-0 inset-0 z-[60px] flex">
                <Dialog.Panel className="relative mr-auto flex h-full w-[300px] max-w-xs flex-col overflow-y-auto gap-5 bg-white py-6 shadow-xl">
                    <div className='flex items-center justify-between px-4'>
                        <Logo />
                        <span onClick={onClose} className='text-primary-green cursor-pointer hover:text-dark-blue'>
                            <X size={25} />
                        </span>
                    </div>
                    <div className='p-4 flex flex-col gap-8'>
                        <MainNav />
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    </div>
  )
}

export default MobileMenu