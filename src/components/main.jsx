import web from "../assets/vasilis-chatzopoulos-6lwyzronth8-unsplash.svg";
import mobile from "../assets/vasilis-chatzopoulos-6lwyzronth8-unsplash-mobile.svg";
const Main = () => {
  return (
    <div
      className=" gap-5 flex font-inter lg:flex-row xl:mx-44 m-auto 
     md:flex-col md:m-4 max-sm:flex-col max-sm:mx-5 ">
      <div>
        <div>
          <img
            className="xl:w-[45.625rem] lg:w-[40rem] max-sm:hidden  "
            src={web}
            alt=""
          />
          <img
            className="md:hidden max-sm:-[12rem] max-sm:h-[18rem] max-sm:w-[23.4375rem]"
            src={mobile}
            alt=""
          />
        </div>
        <div
          className="flex my-7 w-[45.625rem] justify-between 
          lg:flex-row 
          md:flex-col 
        max-sm:flex-col max-sm:w-[21.4375rem] ">
          <div className="w-[21.875rem] h-[11.375rem] justify-center">
            <h1
              className="text-[#00001A] text-[3.5rem] font-extrabold leading-[3.5rem]
            lg:w-full lg:text-left lg:ml-0
              md:w-[40rem] md:text-center md:ml-8
            max-sm:text-[2.5rem] max-sm:leading-[2.5rem]">
              The Bright Future Of Web 3.0?
            </h1>
          </div>
          <div
            className=" w-[21.875rem] h-[11.375rem] space-y-[1.5rem]
            lg:flex-col lg:w-[21.875rem] lg:gap-0 lg:text-left lg:ml-0
           md:flex md:w-[37rem] md:gap-10 md:text-center md:ml-20
           max-sm:-mt-10">
            <p
              className="text-[#5E607A] text-[0.9375rem] font-[400]
              xl:w-[19.875rem] xl:ml-0 
              lg:ml-[-30px] lg:w-[18.5rem]
             leading-[1.625rem]">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <div
              className="w-[11.5625rem] h-[3rem] shrink-0 bg-[#F15D51] hover:bg-black
              xl:ml-0 lg:ml-[-30px]">
              <p
                className="text-[#FFFDFA] text-[0.875rem] font-[700] leading-[1.5rem] tracking-[0.27344rem] text-center py-3
              ">
                READ MORE
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-[31.9375rem] bg-[#00001A] 
        xl:ml-0 xl:px-8
        lg:w-[24.875rem] lg:relative lg:ml-[-6rem] lg:rounded-none lg:m-0 lg:text-left 
       md:w-[40rem] md:rounded-2xl md:m-auto md:text-center">
        <div className="w-[18.875rem] m-auto mt-6 space-y-5">
          <h1 className="text-[#E9AA52] text-[2.5rem] font-bold max-sm:text-[2rem]">
            New
          </h1>
          <div className="space-y-3">
            <h2 className="text-[#FFFDFA]  font-[800] text-[1.25rem] hover:text-[#E9AA52]">
              Hydrogen VS Electric Cars
            </h2>
            <p className="text-[#C5C6CE] text-[0.9375rem] font-normal leading-[1.625rem]">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <hr />
          <div className="space-y-3">
            <h2 className="text-[#FFFDFA] font-extrabold w-[19.9rem] text-[1.25rem] hover:text-[#E9AA52] ">
              The Downsides of AI Artistry
            </h2>
            <p className="text-[#C5C6CE] w-[17.875rem] text-[0.9375rem] font-normal leading-[1.625rem]">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <hr />
          <div className="space-y-3">
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
