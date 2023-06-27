import React from "react";
import twitterSvg from "../assets/twitter.svg";

const Social = () => {
  return (
    <div className="sm:container mx-auto sm:mt-44 mt-32">
      <div className="flex lg:flex-row flex-col lg:gap-32 gap-10 mx-10">
        <div className="flex flex-col gap-6">
          <h2 className="subTitle">TOMYA'yı Sosyal Medyada Takip Edin</h2>
          <p className="lg:text-2xl text-xl">
            Dijital para borsalarındaki diğer yatırımcılarla bağlantı kurmak,
            promosyonlar hakkında bilgi almak ve yatırım stratejilerini
            tartışmak için TOMYA'yı sosyal medya üzerinden takip edebilirsiniz.
          </p>
        </div>
        <img
          src={require("../assets/img_twitter_social.png")}
          alt=""
          className="w-[445px]"
        />
      </div>
      <a
        href="/"
        className="bg-[#00BDFF] rounded-sm w-fit px-2 py-[6px] font-medium flex text-white text-xs gap-3 ml-8 lg:mt-0 mt-4"
      >
        <img src={twitterSvg} alt="twitter" className="w-5 invert" />
        <span>Fallow @tomyacom</span>
      </a>
    </div>
  );
};

export default Social;
