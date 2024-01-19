import web from "../assets/vasilis-chatzopoulos-6lwyzronth8-unsplash.svg";
const Main = () => {
  return (
    <div className="mx-44 gap-5 flex font-inter">
      <div>
        <div>
          <img className="" src={web} alt="" />
        </div>
        <div className="flex my-7 w-[45.625rem] justify-between">
          <div className="w-[21.875rem] h-[11.375rem] justify-center">
            <h1 className="text-[#00001A] text-[3.5rem] font-extrabold leading-[3.5rem]">
              TheBright Future Of Web #.0?
            </h1>
          </div>
          <div className="w-[21.875rem] h-[11.375rem] space-y-[1.81rem]">
            <p className="text-[#5E607A] text-[0.9375rem] font-[400] leading-[1.625rem]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div className="w-[11.5625rem] h-[3rem] shrink-0 bg-[#F15D51] hover:bg-black">
              <p className="text-[#FFFDFA] text-[0.875rem] font-[700] leading-[1.5rem] tracking-[0.27344rem] text-center py-3">
                READ MORE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[21.875rem] h-[31.9375rem] bg-[#00001A] ">
        <div className="w-[18.875rem] m-auto mt-6 space-y-7">
          <h1 className="text-[#E9AA52] text-[2.5rem] font-bold ">New</h1>
          <div>
            <h2 className="text-[#FFFDFA] font-extrabold text-[1.25rem] hover:text-[#E9AA52]">
              Hydrogen VS Electric Cars
            </h2>
            <p className="text-[#C5C6CE] text-[0.9375rem] font-normal leading-[1.625rem]">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr />
          <div>
            <h2 className="text-[#FFFDFA] font-extrabold text-[1.25rem] hover:text-[#E9AA52] ">
              The Downsides of AI Artistry
            </h2>
            <p className="text-[#C5C6CE] text-[0.9375rem] font-normal leading-[1.625rem]">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr />
          <div className="">
            <h2 className="text-[#FFFDFA]  font-extrabold text-[1.25rem] hover:text-[#E9AA52]">
              Is VC Funding Drying Up?
            </h2>
            <p className="text-[#C5C6CE] text-[0.9375rem] font-normal leading-[1.625rem]">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
