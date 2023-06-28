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
      <div className="sm:h-[550px] h-[500px] bg-gradient-to-r from-[#544EDA] to-[#3E39A7]">
        <div className="container mx-auto flex lg:flex-row flex-col-reverse text-white relative">
          <img
            src={require("../assets/aboutus-banner.png")}
            alt="banner"
            className="w-auto h-[677px] relative object-contain sm:-bottom-20 bottom-36"
          />
          <div className="flex flex-col gap-y-5 lg:mt-56 mt-20 lg:px-0 md:px-10 px-4">
            <h1 className="lg:text-[3.375rem] text-[32px] lg:text-left text-center font-bold leading-none ">
              TOMYA; kripto para almanın hızlı ve kolay yoludur.
            </h1>
            <h4 className="font-medium lg:text-[1.125rem] text-base lg:text-left text-center ">
              Yenilikçi, dürüst ve profesyonel bakış açısı ile hareket eden
              TOMYA, kullanıcılara dijital para borsalarında güvenli ve şeffaf
              şekilde hizmet etmeyi vizyon edinmiştir.
            </h4>
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
