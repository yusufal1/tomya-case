import React, { useState } from 'react'

const CookieNotification = () => {
    const [show, setShow] = useState(true)
  return (
    <div className={`bg-[#cecfcf96] w-full bottom-0 z-20 py-2 ${show ? "fixed" : "hidden"}`}>
        <div className='px-[10%] mx-auto text-center'>
            <span className='md:text-[13px] text-[10px] leading-normal'>KVKK'nın Veri Sorumlusunun Aydınlatma Yükümlülüğü Başlıklı 10. Maddesi uyarınca, gizlilik politikasında belirtilen amaçlarla, <b>kabul etmeniz dahilinde</b>, sınırlı olarak mevzuata uygun çerezler (cookies) kullanılacaktır. </span>
            <button className="bg-primary text-white rounded-md py-1 px-2 text-[13px] ml-2" onClick={() => setShow(false)}>Kabul Et</button>
        </div>
    </div>
  )
}

export default CookieNotification