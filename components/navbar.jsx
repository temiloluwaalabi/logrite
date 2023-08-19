'use client'
import Container from './ui/container'
import Logo from './ui/logo'
import MainNav from './main-nav'
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import MobileMenu from './mobileMenu';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const openMobileMenu = () => {
    setOpenMenu(true)
  }
  const onClose = () => {
    setOpenMenu(false)
  }
  return (
    <Container classname="absolute w-full self-center left-0 top-10 z-40" >
      <MobileMenu open={openMenu} onClose={onClose} />
      <nav className='h-[70px] bg-white flex items-center justify-between pl-5 rounded-xl'>
        <Logo />
        <div className='lg:flex hidden flex-row gap-12'>
          <MainNav />
        </div>
        <div className='relative lg:flex hidden bg-primary-green text-white rounded-e-xl h-full pr-5 pl-10  flex-col items-start justify-center'>
          <span className='w-[45px] h-[45px] absolute left-0 top-0 translate-y-[35%] translate-x-[-50%] bg-primary-green flex items-center justify-center rounded-full'>
            <Phone size={20} color='white' />
          </span>
          <h3 className='text-medium'>Contact Us Now</h3>
          <p className='text-small'>(+234) 8129 0230 87</p>
        </div>
        <div className='lg:hidden flex mr-5 cursor-pointer text-primary-green hover:text-dark-blue'>
          {openMenu ? 
            <button onClick={onClose} disabled={openMenu}>
              <X size={25}  />
            </button>
             : 
          <button onClick={openMobileMenu}>
            <Menu size={25}  />
          </button>
          }
        </div>
      </nav>
    </Container>
  )
}

export default Navbar