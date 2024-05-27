import React from "react";

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

  return (
    <nav className="w-full flex justify-between items-center py-[24px] px-[80px] bg-eggWhite">
      {/* Logo */}
      <a href="/" className="h5 text-peanut">
        Collers
      </a>
      {/* Navigation Links */}
      <div className="flex gap-[16px]">
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
    </nav>
  );
};
