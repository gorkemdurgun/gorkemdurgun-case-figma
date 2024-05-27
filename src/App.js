import React from "react";

import "./App.css";
import { BestCard, ImageBox, Navbar } from "./components";
import { jpeg, svg } from "./assets/images";

function App() {
  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <Navbar />
      {/* Hero Section */}
      <section className="hero">
        <div className="relative flex flex-col px-[80px] bg-gradient-to-tl from-50% from-egg to-eggWhite to-50%">
          {/* Hero Image Section */}
          <div className="relative flex flex-row items-center justify-between py-[80px] gap-[80px]">
            <div className="flex flex-col gap-[32px]  text-start">
              <h1 className="h1-m text-darkBlue text-nowrap">Collectible Sneakers</h1>
              <p className="body-l text-darkBlue max-w-[714px]">
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </p>
              <div className="flex flex-row gap-[16px]">
                <button className="btn btn-l-outline py-[16px] px-[32px]">Sign up now</button>
                <button className="btn btn-m gap-[8px] py-[12px] px-[8px]">
                  <img className="w-[24px] h-[24px]" src={svg.WatchIcon} alt="Watch Icon" />
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <div className="z-10">
                <img src={svg.Sneaker1} className="" alt="Sneaker" />
              </div>
              <div className="!z-0 absolute top-10 w-[367px] h-[372px] rounded-[50px] bg-[#FBBF24]" />
            </div>
          </div>
          {/* Hero Features Section */}
          <div className="flex flex-row items-center justify-between gap-[80px] py-[80px]">
            <div className="flex flex-col gap-[16px] text-start">
              <div className="flex flex-row items-center relative w-fit">
                <img src={svg.TrophyIcon} className=" z-10 w-[64px] h-[64px]" alt="Trophy Icon" />
                <img className="!z-0 absolute -top-0 -right-5" src={svg.TrophyBadge} alt="Trophy Badge" />
              </div>
              <h2 className="subtitle-xl text-darkBlue">Nibh viverra</h2>
              <p className="body-l text-darkBlue max-w-[373px]">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </div>
            <div className="flex flex-col gap-[16px] text-start">
              <div className="flex flex-row items-center relative w-fit">
                <img src={svg.TunnelIcon} className=" z-10 w-[64px] h-[64px]" alt="Tunnel Icon" />
                <img className="!z-0 absolute -top-0 -right-0" src={svg.TunnelBadge} alt="Tunnel Badge" />
              </div>
              <h2 className="subtitle-xl text-darkBlue">Cursus amet</h2>
              <p className="body-l text-darkBlue max-w-[373px]">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </div>
            <div className="flex flex-col gap-[16px] text-start">
              <div className="flex flex-row items-center relative w-fit">
                <img src={svg.TvIcon} className=" z-10 w-[64px] h-[64px]" alt="Tv Icon" />
                <img className="!z-0 absolute -top-0 -right-6" src={svg.TvBadge} alt="Tv Badge" />
              </div>
              <h2 className="subtitle-xl text-darkBlue">Ipsum fermentum</h2>
              <p className="body-l text-darkBlue max-w-[373px]">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* The best of the best section */}
      <section className="best-of-best">
        <div className="flex flex-col items-center justify-center py-[80px] gap-[80px] bg-darkBlue">
          {/* Best of the best heading */}
          <div className="w-full flex flex-row items-center justify-between px-[80px] gap-[80px]">
            <h2 className="h2 text-white">The best of the best</h2>
            <button className="btn btn-xl-outline text-white border-white py-[20px] px-[48px]">Sign up now</button>
          </div>
          {/* Best of the best cards */}
          <div className="relative flex flex-row items-center justify-between gap-[48px] px-[80px]">
            <div className="relative">
              <BestCard image={jpeg.Card1Photo} title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
              <div className="z-1 absolute bottom-8 -left-8 w-[271px] h-[271px] rounded-[50px] bg-[#BE185D] opacity-75" />
            </div>
            <div className="relative">
              <BestCard image={jpeg.Card1Photo} title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
              <div className="z-1 absolute -top-8 -left-4 w-[161px] h-[161px] rounded-[50px] bg-[#0369A1] opacity-75" />
              <div className="z-0 absolute bottom-8 -right-4 w-[130px] h-[130px] rounded-[30px] bg-[#B45309] opacity-75" />
            </div>
            <div className="relative">
              <BestCard image={jpeg.Card1Photo} title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
              <div className="z-1 absolute top-4 -right-12 w-[232px] h-[232px] rounded-[50px] bg-[#15803D] opacity-75" />
              <div className="z-0 absolute -bottom-8 right-32 w-[202px] h-[202px] rounded-[30px] bg-[#A21CAF] opacity-75" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
