import React from 'react'

const MobileMenu = () => {
  return (
    <div className='h-full bg-secondary w-[350px] fixed top-0 right-0 z-20'>
        <ul className='flex flex-col gap-3 text-[#24242a] text-[25px] font-medium mt-20 px-10'>
            <li><a href="/">Kripto Paralar</a></li>
            <li><a href="/">Market</a></li>
            <li><a href="/">Komisyonlar</a></li>
            <li><a href="/">Hakkımızda</a></li>
            <li><a href="/">Basında Biz</a></li>
            <li><a href="/">Duyurular</a></li>
            <li><a href="/">İletişim</a></li>
            <li><a href="/">Blog</a></li>
            <li className='mt-12'><a href="/" className='bg-primary text-white px-24 py-3 rounded-3xl text-lg'>Giriş Yap</a></li>
            <li className='text-center mt-2'><a href="/" className='text-lg'>Kayıt Ol</a></li>
        </ul>
    </div>
  )
}

export default MobileMenu