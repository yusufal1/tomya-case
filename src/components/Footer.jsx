import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import twitterSvg from "../assets/twitter.svg";
import facebookSvg from "../assets/facebook.svg";
import directSvg from "../assets/direct.svg";
import instagramSvg from "../assets/instagram (2).svg";
import youtubeSvg from "../assets/youtube (1).svg";

const Footer = () => {
  const cryptocurrencies1 = [
    "Bitcoin",
    "Ethereum",
    "Ripple",
    "Litecoin",
    "Tether",
    "Chainlink",
    "Polkadot",
    "Avalanche",
    "Binance Coin",
    "Pancakeswap",
    "Solana",
    "Near Protocol",
    "ApeCoin",
    "Uniswap",
    "Fantom",
    "Curve Dao",
    "Ethereum Classic",
  ];
  const cryptocurrencies2 = [
    "Dogecoin",
    "Cardano",
    "NEO",
    "Chiliz",
    "Holochain",
    "BitTorrent Chain",
    "Decentraland",
    "The Sandbox",
    "Shiba Inu",
    "Polygon",
    "PAX Gold",
    "Cosmos",
    "Enjin Coin",
    "VeChain",
    "THORChain",
    "Oasis Network",
  ];
  const directory1 = [
    "Bitcoin Al",
    "Ethereum Al",
    "Ripple Al",
    "Litecoin Al",
    "Tether Al",
    "Chainlink Al",
    "Polkadot Al",
    "Avalanche Al",
    "Binance Coin Al",
    "Pancakeswap Al",
    "Solana Al",
    "Near Protocol Al",
    "ApeCoin Al",
    "Uniswap Al",
    "Fantom Al",
    "Curve Dao Al",
    "Ethereum Classic Al",
  ];
  const directory2 = [
    "Dogecoin Al",
    "Cardano Al",
    "NEO Al",
    "Chiliz Al",
    "Holochain Al",
    "BitTorrent Chain Al",
    "Decentraland Al",
    "The Sandbox Al",
    "Shiba Inu Al",
    "Polygon Al",
    "PAX Gold Al",
    "Cosmos Al",
    "Enjin Coin Al",
    "VeChain Al",
    "THORChain Al",
    "Oasis Network Al",
  ];

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <div className="bg-[#131416]">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col gap-x-5 pt-40 pb-16 gap-y-5 mx-2 lg:border-b border-gray-800">
          <div className="flex flex-col basis-1/4 lg:border-none border-b border-gray-700 lg:py-0 py-4">
            <div
              className="flex text-[#eeeff6] items-center justify-between"
              onClick={() => handleItemClick(1)}
            >
              <h6 className="font-medium text-sm">Kurumsal</h6>
              <FiChevronDown size={25} className="lg:hidden block" />
            </div>
            <ul
              className={`text-sm text-white mt-5 lg:flex flex-col gap-y-3 ${
                activeItem === 1 ? "flex " : "hidden"
              } transition-all duration-500 ease-in-out`}
            >
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Kullanıcı Sözleşmesi
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Gizlilik ve Çerez Politikası
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Kişisel Verilerin Korunması
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Açık Rıza Ve Dijital İletişim İzni Beyanı
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col basis-1/4 lg:border-none border-gray-700 lg:py-0 py-4 border-b">
            <div
              className="flex text-[#eeeff6] items-center justify-between"
              onClick={() => handleItemClick(2)}
            >
              <h6 className="font-medium text-sm">Kullanıcılar İçin</h6>
              <FiChevronDown size={25} className="lg:hidden block" />
            </div>
            <ul
              className={`text-sm text-white mt-5 lg:flex flex-col gap-y-3  ${
                activeItem === 2 ? "flex " : "hidden"
              }`}
            >
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Blog
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Basında Biz
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Kripto Hesaplayıcı
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Kripto Sözlük
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Duyurular
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Limitler
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Para Yatırma ve Çekme Platformları
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Kara Para Aklamayı Önleme Politikası
                </a>
              </li>
              <li>
                <a href="/" className="opacity-40 hover:opacity-100">
                  Müşterini Tanı (KYC) Politikası
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col basis-1/4 lg:border-none border-gray-700 lg:py-0 py-4 border-b">
            <div
              className="flex text-[#eeeff6] items-center justify-between"
              onClick={() => handleItemClick(3)}
            >
              <h6 className="font-medium text-sm">Kripto Paralar</h6>
              <FiChevronDown size={25} className="lg:hidden block" />
            </div>
            <div className={`flex lg:flex-row flex-col gap-x-8`}>
              <ul
                className={`text-sm text-white mt-5 lg:flex flex-col gap-y-3 ${
                  activeItem === 3 ? "flex" : "hidden"
                }`}
              >
                {cryptocurrencies1.map((item, index) => (
                  <li key={index}>
                    <a href="/" className="opacity-40 hover:opacity-100">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <ul
                className={`text-sm text-white lg:mt-5 mt-3 lg:flex flex-col gap-y-3  ${
                  activeItem === 3 ? "flex" : "hidden"
                }`}
              >
                {cryptocurrencies2.map((item, index) => (
                  <li key={index}>
                    <a href="/" className="opacity-40 hover:opacity-100">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col basis-1/4 lg:border-none border-gray-700 lg:py-0 py-4 border-b">
            <div
              className="flex text-[#eeeff6] items-center justify-between"
              onClick={() => handleItemClick(4)}
            >
              <h6 className="font-medium text-sm">Rehber</h6>
              <FiChevronDown size={25} className="lg:hidden block" />
            </div>
            <div className={`flex lg:flex-row flex-col gap-x-8`}>
              <ul
                className={`text-sm text-white mt-5 lg:flex flex-col gap-y-3 ${
                  activeItem === 4 ? "flex" : "hidden"
                }`}
              >
                {directory1.map((item, index) => (
                  <li key={index}>
                    <a href="/" className="opacity-40 hover:opacity-100">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <ul
                className={`text-sm text-white lg:mt-5 mt-3 lg:flex flex-col gap-y-3  ${
                  activeItem === 4 ? "flex" : "hidden"
                }`}
              >
                {directory2.map((item, index) => (
                  <li key={index}>
                    <a href="/" className="opacity-40 hover:opacity-100">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="py-32">
        <div className="flex lg:flex-row flex-col justify-between mx-2">
          <div className="flex flex-col text-[#eeeff6] text-xs gap-1">
            <span>TOMYA TEKNOLOJİ A.Ş.</span>
            <span>Maslak Mah. Saat Sok. Spine Tower No: 5/10,</span>
            <span>Sarıyer / İstanbul</span>
            <span className="mt-7 text-[#eeeff6]">
            Tel: 0(212) 807 10 71(72-73)
          </span>
          </div>
          <div className="flex flex-row invert gap-x-7 lg:mt-0 mt-7">
            <img src={facebookSvg} alt="" className="w-3" />
            <img src={twitterSvg} alt="" className="w-5" />
            <img src={instagramSvg} alt="" className="w-5" />
            <img src={directSvg} alt="" className="w-5" />
            <img src={youtubeSvg} alt="" className="w-6" />
          </div>
        </div>
        <div className="flex flex-col mt-2 mx-2">
          <div className="flex flex-col gap-1 mt-7 text-[#eeeff680] text-xs">
            <span>Tüm Hakları Saklıdır. © 2021 - TOMYA</span>
            <span>TOMYA TEKNOLOJİ A.Ş.</span>
            <span>Mersis No: 0850062440300001</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
