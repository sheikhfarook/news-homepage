import pcs from "../assets/Bitmap.svg";
import laptops from "../assets/Bitmap2.svg";
import gaming from "../assets/Bitmap3.png";

const Footer = () => {
  return (
    <div
      className="flex my-10 lg:mx-44 gap-8 font-inter 
      xl:flex-row md:flex-col 
    max-sm:mx-auto max-sm:flex-col max-sm:w-[21.4375rem]">
      <div className="xl:gap-10 md:flex ">
        <div className="flex ">
          <div className="w-[11.90625rem] h-[7.9375rem]">
            <img className="" src={pcs} alt="" />
          </div>
          <div
            className="w-[14.125rem] -mt-2 space-y-1 h-[8.0625rem]  
          ml-[-4.1rem]">
            <h2 className="text-[#C5C6CE] text-[2rem] font-bold ">01</h2>
            <p className="text-[#00001A] text-[1.125rem] font-[800] cursor-pointer hover:text-[#F15D51] tracking-tighter">
              Reviving Retro PCs
            </p>
            <p className="text-[#5E607A] w-[13.125rem] text-[0.9375rem] font-normal leading-[1.625rem]">
              {" "}
              What happens when old PCs are given modern upgrades?
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="w-[11.90625rem] h-[7.9375rem]">
            <img src={laptops} alt="" />
          </div>
          <div className="w-[14.125rem] h-[8.0625rem] space-y-2  ml-[-4.1rem]">
            <h2 className="text-[#C5C6CE] text-[2rem] font-bold leading-[2rem]">
              02
            </h2>
            <p className="text-[#00001A]  w-[15.125rem] text-[1.125rem] tracking-[-1px] font-extrabold leading-[1.5rem] cursor-pointer hover:text-[#F15D51]">
              Top 10 Laptops of 2022
            </p>
            <p className="text-[#5E607A] w-[13rem] text-[0.9375rem] font-normal leading-[1.625rem]">
              Our best picks for various needs and budgets.
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:m-auto xl:m-0 xl:mr-[13.5rem]">
        <div className="w-[11.90625rem] h-[7.9375rem]">
          <img src={gaming} alt="" />
        </div>
        <div className="w-[14.125rem] h-[8.0625rem] space-y-2  ml-[-4.1rem]">
          <h2 className="text-[#C5C6CE] text-[2rem] font-bold leading-[2rem]">
            03
          </h2>
          <p className="text-[#00001A] text-[1.125rem] font-extrabold  tracking-[-1px] leading-[1.5rem] cursor-pointer hover:text-[#F15D51]">
            The Growth of Gaming
          </p>
          <p className="text-[#5E607A] text-[0.9375rem] font-normal leading-[1.625rem]">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
