import React from "react";
import { svg } from "../assets/images";

export const Navbar = () => {
  const links = [
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Solutions",
      href: "/solutions",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "Resources",
      href: "/resources",
    },
    {
      title: "Log In",
      href: "/login",
    },
    {
      title: "Sign up now",
      href: "/signup",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav
      className={`${
        isMobileMenuOpen ? "fixed" : "relative"
      } md:relative z-50 w-full flex justify-between items-center py-[16px] md:py-[24px] bg-white md:bg-eggWhite`}
    >
      <div className="container flex justify-between items-center">
      {/* Logo */}
      <a href="/" className="h5 text-peanut">
        Collers
      </a>
      {/* Navigation Links */}
      <div className="hidden md:flex gap-[16px]">
        {links.slice(0, -1).map((link, index) => (
          <button key={index} className="btn btn-m py-[12px] px-[8px]">
            {link.title}
          </button>
        ))}
        {links.slice(-1).map((link, index) => (
          <button key={index} className="btn btn-m-outline py-[12px] px-[28px]">
            {link.title}
          </button>
        ))}
      </div>
      <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <img src={svg.MenuToggle} alt="Menu Toggle" />
      </button>
      {/* Mobile Drawer Menu - with animation */}
      <div
        className={`${isMobileMenuOpen ? "animate-fadeIn" : "animate-fadeOut"} ${
          isMobileMenuOpen ? "flex" : "hidden"
        } md:hidden flex-col gap-[8px] absolute top-[64px] left-0 right-0 bg-white p-[16px] rounded-b-[20px] z-10 shadow-lg`}
      >
        {links.slice(0, -1).map((link, index) => (
          <button key={index} className="btn btn-m py-[12px] px-[8px]">
            {link.title}
          </button>
        ))}
        {links.slice(-1).map((link, index) => (
          <button key={index} className="btn btn-m-outline py-[12px] px-[28px]">
            {link.title}
          </button>
        ))}
      </div>
    </div>
    </nav>
  );
};
