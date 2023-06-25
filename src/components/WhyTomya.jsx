import React from 'react'
import phoneSvg from '../assets/phone.svg'
import securitySvg from '../assets/security.svg'
import sellbuySvg from '../assets/sellbuy.svg'
import peopleSvg from '../assets/people.svg'

const WhyTomya = () => {
  return (
    <div className='container mx-auto lg:mt-4 mt-28'>
        <h2 className='md:text-center text-left md:text-4xl text-2xl font-medium'>Neden Tomya?</h2>
        <h4 className='md:text-center text-left mt-3 md:text-lg text-base'>Temelleri 2019 yılında atılan TOMYA, Türkiye'nin kapsamlı, güvenilir ve hızlı kripto para borsası olma hedefiyle kuruldu. Mayıs 2020'de üye alımına başlayan TOMYA, Türkiye’nin en yüksek hacimli dijital varlık işlem platformu olmak için yola çıkmıştır. </h4>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-10 mt-10'>
            <div className='shadow-xl xl:w-[275px] md:h-[455px] w-full flex flex-col p-[30px] rounded-[10px] max-h-[290px]'>
                <img src={phoneSvg} alt="banner" className="w-10"/>
                <div className="mt-auto">
                <h4 className='mt-9 font-medium text-lg'>
                Multi Platform ve Akıllı Arayüz
                </h4>
                <p className='text-sm mt-2'>Kullanıcı dostu platformumuz ve arayüzlerimiz, her seviyedeki üyemizin tüm işlemlerini en kolay ve en hızlı şekilde yapabilmesi için tasarlandı.</p>
                </div>
            </div>
            <div className='shadow-xl xl:w-[275px] md:h-[455px] w-full flex flex-col p-[30px] rounded-[10px] max-h-[290px]'>
                <img src={securitySvg} alt="banner" className="w-10"/>
                <div className='mt-auto'>
                    <h4 className='mt-9 font-medium text-lg'>
                    İki Faktörlü Doğrulama
                    </h4>
                    <p className='text-sm mt-2'>TOMYA'da iki faktörlü güvenlik doğrulama sistemi uygulanır; kişisel bilgilerinizin ve yatırımlarınızın güvenliği en üst seviyede tutulur.</p>
                </div>
            </div>
            <div className='shadow-xl xl:w-[275px] md:h-[455px] w-full flex flex-col p-[30px] rounded-[10px] max-h-[290px]'>
                <img src={sellbuySvg} alt="banner" className="w-10"/>
                <div className='mt-auto'>
                <h4 className='mt-9 font-medium text-lg'>
                Hızlı Alım/Satım
                </h4>
                <p className='text-sm mt-2'>Tomya’nin pratik arayüzü ve gelişmiş mobil özellikleriyle işlemlerinizi dilediğiniz yerden takip etmek çok kolay!</p>
                </div>
            </div>
            <div className='shadow-xl xl:w-[275px] md:h-[455px] w-full flex flex-col p-[30px] rounded-[10px] max-h-[290px]'>
                <img src={peopleSvg} alt="banner" className="w-10"/>
                <div className='mt-auto'>
                <h4 className='mt-9 font-medium text-lg'>
                7/24 Yatırım İşlemleri
                </h4>
                <p className='text-sm mt-2'>Anlaşmalı olduğumuz bankalar üzerinden para gönderme işlemlerinizi 7/24 gerçekleştirebilirsiniz..</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyTomya