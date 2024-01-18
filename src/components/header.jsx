import letter from "../assets/W..svg";
const Header = () => {
  return (
    <div className="flex justify-between m-20 mx-44">
      <div>
        <img
          className="w-[4.00575rem] h-[2.49375rem] shrink-0"
          src={letter}
          alt=""
        />
      </div>
      <div
        className="text-[#5E607A] text-[0.9375rem] 
      font-[400] leading-[1.625rem] flex gap-8 cursor-pointer ">
        <div className="hover:text-[#F15D51]">Home</div>
        <div className="hover:text-[#F15D51]">New</div>
        <div className="hover:text-[#F15D51]">Popular</div>
        <div className="hover:text-[#F15D51]">Trending</div>
        <div className="hover:text-[#F15D51]">Categories</div>
      </div>
    </div>
  );
};

export default Header;
