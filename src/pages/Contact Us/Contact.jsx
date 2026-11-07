import Hero from "../../components/Hero section/Hero";
import contact from "../../assets/contact.png";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ContactCard from "../../components/Cards/ContactCard";
import Map from "../../assets/Map.svg";
import Email from "../../assets/Email.svg";
import Mobile from "../../assets/Mobile.svg";
import Telephone from "../../assets/Telephone.svg";
import facebook from "../../assets/facebook.svg";
import x from "../../assets/Xred.svg";
import instagram from "../../assets/Insta.svg";
import tiktok from "../../assets/TiktokIcon.svg";

function Contact() {
  return (
    <div>
      <Hero
        bg={contact}
        title={"Connected Globally. Available Locally."}
        desc={
          "With experts positioned in the world’s most influential markets, we are never more than a conversation away. Reach out to our team to experience a new standard of real estate advisory."
        }
      />

      <div className="grid grid-cols-1 gap-5 lg:grid lg:grid-cols-2 mx-9.25 mt-[119px] mb-[99px] ">
        <div>
          <div className="flex-col mb-[38px]">
            <h3 className="font-heading font-semibold text-[32px]">
              Contact Information
            </h3>
            <p className="font-lato text-[#847D7D] text-[20px]">
              Our team is available for private consultations and off-market
              inquiries. We operate with absolute discretion to ensure your real
              estate objectives are met with precision.
            </p>
          </div>
          <div className="flex-col">
            <div className="flex justify-start gap-3 p-2 ">
              {" "}
              <img src={Map} />{" "}
              <p className="text-[#8E1616] text-[20px] font-lato font-medium">
                Minusio, Lake Maggiore, Switzerland — ref. LOC1771
              </p>
            </div>
            <div className="flex justify-start gap-3 p-2">
              {" "}
              <img src={Email} />{" "}
              <p className="text-[#8E1616] text-[20px] font-lato font-medium">
                Grand .Atlas.Support@gmail.com
              </p>
            </div>
            <div className="flex justify-start gap-4 p-2">
              {" "}
              <img src={Mobile} />{" "}
              <p className="text-[#8E1616] text-[20px] font-lato font-medium">
                01247859622
              </p>
            </div>
            <div className="flex justify-start gap-3 p-2">
              {" "}
              <img src={Telephone} />{" "}
              <p className="text-[#8E1616] text-[20px] font-lato font-medium">
                035987124
              </p>
            </div>
          </div>
          <div className="flex-col my-9">
            <h3 className="text-[#847D7D] font-heading font-semibold text-[22px] mb-5">
              Follow us on social media
            </h3>
            <div className="flex gap-2">
              <img
                src={facebook}
                className="color-[#8E1616] border-3 border-[#8E1616] rounded-full p-1 cursor-pointer hover:scale-110 transition duration-150"
              />
              <img
                src={x}
                className="color-[#8E1616] border-3 border-[#8E1616] rounded-full p-2 cursor-pointer hover:scale-110 transition duration-150"
              />
              <img
                src={instagram}
                className="color-[#8E1616] border-3 border-[#8E1616] rounded-full p-1 cursor-pointer hover:scale-110 transition duration-150"
              />
              <img
                src={tiktok}
                className="color-[#8E1616] border-3 border-[#8E1616] rounded-full p-2 cursor-pointer hover:scale-110 transition duration-150"
              />
            </div>
          </div>
          <div>
            <h3 className="text-[#847D7D] font-heading font-semibold text-[22px] mb-5">
              Working Hours
            </h3>
            <div className="flex gap-4 md:gap-8.75">
              <div>
                <p className="text-[#8E1616] font-lato font-medium text-base md:text-[20px] whitespace-nowrap mb-2.75">
                  Saturday :
                </p>
                <p className="text-[#8E1616] font-lato font-medium text-base md:text-[20px] whitespace-nowrap mb-2.75">
                  Sunday :
                </p>
                <p className="text-[#8E1616] font-lato font-medium text-base md:text-[20px] whitespace-nowrap mb-2.75">
                  Monday :
                </p>
                <p className="text-[#8E1616] font-lato font-medium text-base md:text-[20px] whitespace-nowrap mb-2.75">
                  Tuesday :
                </p>
                <p className="text-[#8E1616] font-lato font-medium text-base md:text-[20px] whitespace-nowrap">
                  Wednesday :
                </p>
              </div>
              <div>
                <p className="text-[#847D7D] font-lato font-medium text-base md:text-[20px] whitespace-nowrap mb-2.75">
                  9:00AM - 5:00 PM
                </p>
                <p className="text-[#847D7D] font-lato font-medium text-base md:text-[20px] whitespace-nowrap mb-2.75">
                  9:00AM - 5:00 PM
                </p>
                <p className="text-[#847D7D] font-lato font-medium text-base md:text-[20px] whitespace-nowrap mb-2.75">
                  9:00AM - 5:00 PM
                </p>
                <p className="text-[#847D7D] font-lato font-medium text-base md:text-[20px] whitespace-nowrap mb-2.75">
                  9:00AM - 5:00 PM
                </p>
                <p className="text-[#847D7D] font-lato font-medium text-base md:text-[20px] whitespace-nowrap">
                  9:00AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default Contact;
