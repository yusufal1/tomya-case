import React from 'react'
import tomyalogo from "../assets/brand.svg"

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-[#544EDA] to-[#3E39A7] text-white">
      <div className="container mx-auto flex justify-between py-10 items-center">
          <a href="/" className='basis-1/4'>
            <img src={tomyalogo} alt="tomya-logo" className="w-36 invert"/>
          </a>
            <ul className='flex items-center justify-between bg-[#5952e4] rounded-lg py-2 px-6 text-sm basis-3/4 navbar'>
                <li className='cursor-pointer'>Kripto Paralar</li>
                <li className='cursor-pointer'>Market</li>
                <li className='cursor-pointer'>Komisyonlar</li>
                <li className='cursor-pointer'>Hakkımızda</li>
                <li className='cursor-pointer'>Basında Biz</li>
                <li className='cursor-pointer'>Duyurular</li>
                <li className='cursor-pointer'>İletişim</li>
                <li className='cursor-pointer'>Blog</li>
                <li className='cursor-pointer'>
                    <button className='border rounded-3xl py-1 px-3'>
                        Giriş Yap
                    </button>
                </li>
                <li>Kayıt Ol</li>
            </ul>
      </div>
    </div>
  )
}

export default Header