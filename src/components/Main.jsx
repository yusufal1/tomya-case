import React from "react";

const Main = () => {
  return (
    <div>
      <div className="container mx-auto relative">
          <img
            src="https://www.tomya.com/assets/img/subpages/sub/aboutus-banner-icons.svg"
            alt=""
            className="absolute"
          />
      </div>
      <div className="h-[400px] bg-gradient-to-r from-[#544EDA] to-[#3E39A7]">
        <div className="container mx-auto flex text-white relative">
          <img src={require('../assets/aboutus-banner.png')} alt="banner" className="w-auto h-[677px] relative"/>
          <div className="flex flex-col gap-y-5 mt-28">
          <h1 className="text-[3.375rem] font-bold leading-none">TOMYA; kripto para almanın hızlı ve kolay yoludur.</h1>
          <h4 className="font-medium text-[1.125rem]">Yenilikçi, dürüst ve profesyonel bakış açısı ile hareket eden TOMYA, kullanıcılara dijital para borsalarında güvenli ve şeffaf şekilde hizmet etmeyi vizyon edinmiştir.</h4>
          </div>
        </div>
      </div>
      <div className="h-[400px]">
        <div className="container mx-auto"></div>
      </div>
    </div>
  );
};

export default Main;
