import React, { useState } from 'react'
import MobileMenu from './MobileMenu'
import tomyalogo from "../assets/brand.svg"
import profileSvg from "../assets/profile.svg"
import { Fade as Hamburger } from 'hamburger-react'

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [isOpen, setOpen] = useState(false)
  
  return (
    <div className="bg-gradient-to-r from-[#544EDA] to-[#3E39A7] text-white">
      <div className='fixed top-0 left-0 w-full z-50'>
      <div className="lg:container mx-auto flex justify-between lg:py-10 p-2 items-center ">
          <a href="/" className='basis-1/4'>
            <img src={tomyalogo} alt="tomya-logo" className="min-w-[147px] max-w-[147px] invert"/>
          </a>
            <ul className='lg:flex hidden navbar items-center justify-between bg-[#5952e4] rounded-lg py-3 px-6 text-sm lg:basis-3/4 gap-4'>
                <li className='cursor-pointer'>Kripto Paralar</li>
                <li className='cursor-pointer'>Market</li>
                <li className='cursor-pointer'>Komisyonlar</li>
                <li className='cursor-pointer'>Hakkımızda</li>
                <li className='cursor-pointer'>Basında Biz</li>
                <li className='cursor-pointer'>Duyurular</li>
                <li className='cursor-pointer'>İletişim</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>
                    <button className='border rounded-[15px] py-1 px-3'>
                        Giriş Yap
                    </button>
                </li>
                <li>Kayıt Ol</li>
            </ul>
            <div className='lg:hidden flex gap-3 items-center'>
              <a href="/" className={`absolute right-16 ${mobileMenu && "hidden"}`}>
               <img src={profileSvg} alt="tomya-logo" className="w-5 invert"/>
              </a>
              <button className={`bg-[#4d47c7] rounded-[10px] z-40 ${mobileMenu && 'fixed'} right-2`} onClick={() => setMobileMenu(current => !current)}>
                 <Hamburger toggled={isOpen} toggle={setOpen} size={20} distance='lg' direction='right'/>
              </button>
            </div>
      </div>
      </div>
      {
        mobileMenu && <MobileMenu/>
      }
      {
        mobileMenu && <div className='bg-gray-400 opacity-50 fixed top-0 left-0 w-full h-full'></div>
      }
    </div>
  )
}

export default Header