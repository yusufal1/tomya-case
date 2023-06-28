import React from 'react'

const CreateAccount = () => {
  return (
      <div className='sm:container sm:mx-auto mx-2 bg-secondary rounded-[10px] mt-10 md:px-16 py-10 px-6 -mb-14 z-10 relative'>
        <div className="flex lg:flex-row flex-col mx-2 items-start lg:gap-1 gap-4">
          <h2 className="lg:text-2xl font-medium text-xl basis-1/4">Avantajlı Kripto İşlemleri</h2>
          <p className="basis-3/4 text-lg">
          TOMYA, müşterilerine güvenilir ve șeffaf hizmet anlayışının yanında düșük komisyon prensipleri de sunar. TOMYA ile dijital para borsalarındaki alım satım deneyiminizi en üst noktaya çıkarabilirsiniz.
          </p>
          <a href="/" className='font-medium min-w-[190px] text-sm bg-primary rounded-[30px] text-white py-4 px-5 text-center lg:mt-0 mt-10 lg:mx-0 mx-auto'>Hesap Oluştur</a>
        </div>
    </div>
  )
}

export default CreateAccount