import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Buttons from "../../components/Buttons/Buttons";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Units", path: "/units" },
    { name: "Zones", path: "/zones" },
    { name: "Developers", path: "/developers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `text-base lg:text-lg font-lato font-bold transition-colors hover:text-[#8E1616] hover:underline hover:underline-offset-8 ${
      isActive
        ? "text-[#8E1616] underline underline-offset-8"
        : "text-[#847D7D]"
    }`;

  return (
    <nav className="h-26.25 bg-[#EBEBEB] px-4 md:px-6 flex justify-between items-center sticky top-0 z-50 shadow-sm">
      <NavLink to="/" end className="flex items-center h-full">
        <img src={Logo} alt="Logo" className="h-full w-auto object-contain" />
      </NavLink>

      <div className="hidden md:flex items-center gap-12 lg:gap-20">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === "/"}
            className={linkClass}
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:block">
        <Buttons
          btnTitle={"Register"}
          btnStyle={"font-lato text-white py-2 px-6 rounded-md"}
        />
      </div>

      <button
        onClick={() => setMenu(true)}
        className="md:hidden p-2 text-[#847D7D]"
        aria-label="Open menu"
      >
        <svg width="32" height="32" viewBox="0 0 512 512" fill="currentColor">
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </button>

      <div
        onClick={() => setMenu(false)}
        className={`fixed inset-0 bg-black/40 md:hidden transition-opacity duration-300 ${
          menu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed top-0 right-0 h-screen w-64 bg-[#EBEBEB] shadow-lg md:hidden flex flex-col p-6 gap-6 transition-transform duration-300 ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenu(false)}
          className="self-end p-2 text-[#847D7D]"
          aria-label="Close menu"
        >
          <svg width="28" height="28" viewBox="0 0 512 512" fill="currentColor">
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </button>

        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.path === "/"}
            onClick={() => setMenu(false)}
            className={linkClass}
          >
            {link.name}
          </NavLink>
        ))}

        <div onClick={() => setMenu(false)}>
          <Buttons
            btnTitle={"Register"}
            btnStyle={"font-lato text-white py-2 px-6 rounded-md"}
          />
        </div>
      </aside>
    </nav>
  );
}
