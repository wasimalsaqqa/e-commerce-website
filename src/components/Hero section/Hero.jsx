import instagram from "../../assets/isnstagram.svg";
import tiktok from "../../assets/tiktok.svg";
import x from "../../assets/x.svg";
import fb from "../../assets/fb.svg";
import Buttons from "../Buttons/Buttons";
const Hero = ({ bg, title, desc, btn, icons }) => {
  return (
    <div
      className="relative min-h-[calc(100svh-105px)] bg-cover bg-center bg-black/50 bg-blend-multiply flex flex-col justify-center items-center text-white text-center px-4 py-10 md:px-10 lg:px-28"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="font-heading font-bold text-[#EEEEEE] text-3xl md:text-4xl lg:text-[48px] w-full max-w-140 mb-6 md:mb-8">
        {title}
      </h1>
      <p className="text-[#CEC7C7] font-lato font-bold text-sm md:text-base lg:text-lg w-full max-w-247 mb-8 md:mb-12">
        {desc}
      </p>

      {btn ? (
        <Buttons
          btnTitle={btn}
          btnStyle={
            "w-full max-w-64.5 text-base md:text-[20px] py-2 px-6 hover:brightness-150 transition duration-200 font-bold"
          }
        />
      ) : (
        ""
      )}

      {icons && (
        <div className="mt-8 flex flex-row gap-4 cursor-pointer lg:absolute lg:left-9 lg:top-1/2 lg:-translate-y-1/2 lg:mt-0 lg:flex-col lg:gap-6">
          <img
            src={fb}
            className="border-white border-[3px] rounded-full size-10 md:size-12 p-2 hover:scale-120 transition duration-200"
          />
          <img
            src={instagram}
            className="border-white border-[3px] rounded-full size-10 md:size-12 p-2 hover:scale-120 transition duration-200"
          />
          <img
            src={x}
            className="border-white border-[3px] rounded-full size-10 md:size-12 p-2 hover:scale-120 transition duration-200"
          />
          <img
            src={tiktok}
            className="border-white border-[3px] rounded-full size-10 md:size-12 p-2 hover:scale-120 transition duration-200"
          />
        </div>
      )}
    </div>
  );
};
export default Hero;
