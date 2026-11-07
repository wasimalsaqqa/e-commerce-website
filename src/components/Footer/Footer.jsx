import Logo from "../../assets/Logo.svg"
import facebook from "../../assets/facebook.svg"
import linkedin from "../../assets/Linkedin.svg"
import twitter from "../../assets/Twitter.svg"
import arrow from "../../assets/arrow.svg"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="h-auto pb-6 bg-[#EBEBEB]">
    <div className="mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-4 lg:gap-5 py-10 px-4 lg:px-25">
    <div className="flex flex-col justify-between items-center gap-3">
      <img src={Logo} className="h-28.75 w-28.75"/>
      <a href="#" className="text-[#0A142F] text-[16px]">+1 (7635) 547-12-97</a>
      <a href="#" className="text-[#0A142F] text-[16px]">support@lift.agency</a>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="font-bold py-6">Quick Links</h1>
      <div className="flex flex-col items-center gap-2.5">
      <Link to="/" className="text-[#0A142F] opacity-65 hover:opacity-100 hover:text-[#8E1616] transition duration-200">Home</Link>
      <Link to="/units" className="text-[#0A142F] opacity-65 hover:opacity-100 hover:text-[#8E1616] transition duration-200">Inventories</Link>
      <Link to="/zones" className="text-[#0A142F] opacity-65 hover:opacity-100 hover:text-[#8E1616] transition duration-200">Zones</Link>
      <Link to="/developers" className="text-[#0A142F] opacity-65 hover:opacity-100 hover:text-[#8E1616] transition duration-200">Developers</Link>
      <Link to="/contact" className="text-[#0A142F] opacity-65 hover:opacity-100 hover:text-[#8E1616] transition duration-200">Contact Us</Link>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <h1 className="font-bold py-6">About</h1>
      <div className="flex flex-col items-center gap-2.5">
      <Link to="/" className="text-[#0A142F] opacity-65 hover:opacity-100 hover:text-[#8E1616] transition duration-200">Grand Atlas</Link>
      <p className="text-[#0A142F] opacity-65 ">Privacy Policy</p>
      <p className="text-[#0A142F] opacity-65 ">Legal</p>
      <Link to="/contact" className="text-[#0A142F] opacity-65 hover:opacity-100 hover:text-[#8E1616] transition duration-200">Help</Link>
      <Link to="/contact" className="text-[#0A142F] opacity-65 hover:opacity-100 hover:text-[#8E1616] transition duration-200">Support</Link>
      </div>
    </div>
    <div className="flex flex-col items-center gap-8 ">
      <h1 className="text-[#0A142F] font-semibold pt-6 ">Get In Touch</h1>
      <div className="flex items-center">
      <input type="text"name="product updates" placeholder="Get Product Updates"className="border border-[#8E1616] border-[1px] solid h-11.5 rounded-l-md py-[15px] px-[15px]"/>
      <button className="bg-[#8E1616] w-12.5 h-11.5 rounded-r-md flex justify-center items-center"><img src={arrow}/></button>
      </div>
      <div className="flex flex-row gap-3.75">
        <img src={linkedin}/>
        <img src={facebook}/>
        <img src={twitter}/>
      </div>
    </div>
    </div>
      <div className="mx-auto max-w-7xl px-6">
    <hr className="border-[#0A142F] opacity-15" />
    <p className="pb-2 pt-2 text-center text-sm text-[#0A142F] text-[16px]">
      © 2020 Lift Media. All rights reserved
    </p>
  </div>
    </footer>
  )
}

export default Footer


