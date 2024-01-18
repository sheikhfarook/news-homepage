import letter from "../assets/W..svg";
const Header = () => {
  return (
    <div>
      <div>
        <img
          className="w-[ 4.00575rem] h-[ 2.49375rem] shrink-0"
          src={letter}
          alt=""
        />
      </div>
      <div
        className="text-[#5E607A] text-[0.9375rem] 
      font-[400] leading-[1.625rem] flex gap-8">
        <div>Home</div>
        <div>New</div>
        <div>Popular</div>
        <div>Trending</div>
        <div>Categories</div>
      </div>
    </div>
  );
};

export default Header;
