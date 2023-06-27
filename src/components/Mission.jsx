import React from "react";

const Mission = () => {
  return (
    <div className="bg-secondary h-[700px] -mt-40">
      <div className="container mx-auto flex lg:flex-row flex-col-reverse gap-10 lg:pt-[340px] md:pt-40 sm:pt-48 pt-56 lg:px-0 sm:px-10">
        <img
          src={require("../assets/aboutus-coins.png")}
          alt=""
          className="lg:w-[632px] w-[440px]"
        />
        <div className="flex flex-col gap-3 mt-10">
          <h2 className="font-medium md:text-4xl text-2xl">Hizmet Misyonumuz</h2>
          <ul className="list-disc ml-5 md:text-lg text-sm flex flex-col gap-y-3">
            <li>Güçlü takım ve işbirliği ile tam hizmet</li>
            <li>Üstün teknoloji ürünleri ile 7/24 destek</li>
            <li>Güvenilir kaynaklardan en son piyasa bilgileri</li>
            <li>Sonuç odaklı araştırma ve strateji planlaması</li>
            <li>Yüksek güvenlik ve kişisel verilerin korunması</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mission;
