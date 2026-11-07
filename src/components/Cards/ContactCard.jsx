import Buttons from "../Buttons/Buttons";
function ContactCard() {
  return (
    <div className="w-full h-auto border border-[#E2E2E2] shadow-Card rounded-2xl ">
      <div className="px-7.5">
        <h2 className="font-heading font-semibold text-[26px] mb-8.75 mt-8.5">
          Send us a message
        </h2>
      </div>
      <form className="px-7.5">
        <div className="flex flex-col mb-[27px]">
          <label htmlFor="name" className="font-heading mb-2 ">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="border border-[#CEC7C7] bg-[#F7F7F7] rounded-lg w-full h-[58px] outline-none focus:border-[#8E1616]"
          />
        </div>
        <div className="flex flex-col mb-[16px]">
          <label htmlFor="email" className="font-heading">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border border-[#CEC7C7] bg-[#F7F7F7] rounded-lg w-full h-[58px] outline-none focus:border-[#8E1616]"
          />
        </div>
        <div className="flex flex-col mb-[16px]">
          <label htmlFor="phone" className="font-heading">
            Phone
          </label>
          <input
            id="phone"
            type="number"
            className="border border-[#CEC7C7] bg-[#F7F7F7] rounded-lg w-full h-[58px] outline-none focus:border-[#8E1616]"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-heading">
            Messages
          </label>
          <textarea
            id="message"
            rows="5"
            className="border border-[#CEC7C7] bg-[#F7F7F7] rounded-lg w-full h-auto outline-none focus:border-[#8E1616]"
          />
        </div>
      </form>
      <div className="flex justify-center items-center px-7.5 mt-11 mb-7">
        <Buttons
          btnStyle={
            "w-full h-[49px] font-heading text-white hover:brightness-120 transition duration-200"
          }
          btnTitle={"Send Message"}
        />
      </div>
    </div>
  );
}

export default ContactCard;
