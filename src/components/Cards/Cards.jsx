import DetailsBtn from "../Buttons/DetailsBtn";
import BedroomIcon from "../../assets/BedroomIcon.svg";
import BathroomIcon from "../../assets/BathroomIcon.svg";
import SizeIcon from "../../assets/SizeIcon.svg";
import { useNavigate } from "react-router-dom";

function Cards({
  cardImg,
  bedrooms,
  bathrooms,
  size,
  title,
  price,
  desc,
  status,
  btn,
}) {
  const navigate = useNavigate();

  return (
    <div className="max-w-110.5 h-auto border border-[#EAEAEA] rounded-2xl shadow-Card hover:shadow-xl">
      <div className="relative">
        <img src={cardImg} className="rounded-t-2xl w-full h-56 md:h-[284px] object-cover" />
        {status == "AVAILABLE" ? (
          <span className="absolute top-7 right-2 bg-[#21E008] text-white font-lato font-bold rounded px-5 py-1">
            {status}
          </span>
        ) : (
          <p className="absolute top-7 right-2 bg-[#bf2828] text-white font-lato font-bold rounded px-5 py-1">
            {status}
          </p>
        )}
      </div>
      <div className="flex flex-wrap gap-1 justify-around items-center border border-[#CEC7C7] py-2.25">
        <div className="flex justify-center items-center gap-1 ">
          <img src={BedroomIcon} />
          <span className="text-[#A18E77] text-sm md:text-base whitespace-nowrap">{bedrooms} Bedrooms</span>
          <div className="h-5 w-px bg-[#CEC7C7] ml-1 md:ml-3"></div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={BathroomIcon} />
          <span className="text-[#A18E77] text-sm md:text-base whitespace-nowrap">{bathrooms} Bathrooms</span>
          <div className="h-5 w-px bg-[#CEC7C7] ml-1 md:ml-3"></div>
        </div>
        <div className="flex justify-center items-center gap-1">
          <img src={SizeIcon} />
          <span className="text-[#A18E77] text-sm md:text-base whitespace-nowrap">{size}m</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-between items-center mx-4 mt-[14px] mb-[21px]">
        <p className="font-heading text-[22px] text-[#8E1616] font-semibold">
          {title}{" "}
        </p>
        <p className="text-[#A18E77] text-[26px] font-bold font-lato">
          {price}
        </p>
      </div>
      <div>
        <p className="text-[#847D7D] font-lato text-[16px] ml-[13px]">{desc}</p>
      </div>
      <div className="m-5">{btn}</div>
    </div>
  );
}

export default Cards;
