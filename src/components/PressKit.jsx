import React from "react";

const PressKit = () => {
  return (
    <div className="sm:container sm:mx-auto mx-4 mt-40 bg-secondary rounded-[10px]">
      <div className="flex flex-col lg:px-32 md:px-20 sm:px-6 px-2 py-20">
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 mx-2">
          <h2 className="lg:text-4xl text-2xl font-medium basis-1/3">Basın kiti</h2>
          <p className="basis-2/3 text-2xl">
            Markamıza ait logomuzun medya kanallarında ya da farklı mecralarda
            en doğru şekilde kullanımı için basın materyallerini
            indirebilirsiniz.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col lg:mt-20 mt-10 gap-4">
          <div className="bg-white min-w-[200px] h-[270px] py-8 px-[38px] rounded-[5px] flex flex-col justify-end">
            <div className="mt-auto flex flex-col">
              <span className="text-xs">Logo kullanım</span>
              <span className="text-xs">kılavuzu</span>
            </div>
          </div>
          <div className="bg-white w-full md:h-[270px] h-[186px] py-8 lg:px-16 px-[30px] rounded-[5px] flex flex-col md:justify-end">
            <div className="flex md:flex-row flex-col md:gap-7 gap-16">
                <div className="md:mt-auto flex flex-col">
                    <span className="text-xs">Renkli ve</span>
                    <span className="text-xs">Siyah/Beyaz kullanım</span>
                </div>
                <div className="mt-auto md:flex hidden flex-col">
                    <span className="text-xs">Logo baskı, web ve</span>
                    <span className="text-xs">HEX renk kodları</span>
                </div>
                <a href="/" className="border border-primary px-3 py-[.125rem] rounded-[30px] text-primary text-sm font-medium mt-1  md:ml-auto w-fit">Basın kitini indir</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressKit;
