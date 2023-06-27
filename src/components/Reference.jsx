import React from 'react'

const Reference = () => {
  return (
    <div className='sm:container mx-auto mt-36 mb-5'>
        <h2 className='font-medium text-4xl text-center'>İş Birliklerimiz</h2>
        <div className='mt-10 boxShadow flex md:flex-row flex-col lg:gap-28 md:gap-14 sm:mx-10 mx-4 sm:px-20 px-4 py-6 items-center rounded-lg'>
            <img src={require('../assets/BCTR-logo.png')} alt="" className='lg:w-72 md:w-52 w-56'/>
            <p className='text-sm'>Tomya Teknoloji A.Ş. olarak kripto ekosisteminde faaliyetlerimize hız kesmeden devam ediyoruz. Türkiye’de sürdürülebilir blockchain ekosistemi oluşturan, bu teknoloji ile yeni dönem iş yapış biçimlerinin önündeki zorlukların giderilmesine yönelik çalışmaları bulunan Blockchain Türkiye Platformu'na platin üye olduk.</p>
        </div>
    </div>
  )
}

export default Reference