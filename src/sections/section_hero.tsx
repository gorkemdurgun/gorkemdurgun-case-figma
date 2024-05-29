import { svg } from "../assets/images";

export const SectionHero = () => {
  return (
    <section className="hero">
      <div className="relative overflow-hidden flex flex-col px-[16px] md:px-[80px] md:bg-eggWhite">
        <div
          className="absolute bottom-0 right-0 hidden w-[200%] bg-egg md:block md:aspect-[30/8]"
          style={{
            clipPath: "polygon(100% 0, 0 200%, 100% 100%)",
          }}
        ></div>
        <div className="md:hidden z-0 absolute bottom-0 left-0 w-[260vw] h-[80%] bg-gradient-to-tl from-[75%] from-egg to-white to-[75%] " />
        {/* Hero Image Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-between py-[48px] md:py-[80px] gap-[32px] md:gap-[80px]">
          <div className="flex flex-col gap-[32px] text-center md:text-start">
            <h1 className="h2 md:h1-m text-darkBlue md:text-nowrap">Collectible Sneakers</h1>
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
              <img src={svg.Sneaker1} alt="Sneaker" />
            </div>
            <div className="!z-0 absolute top-10 w-[75%] aspect-square md:w-[367px] h-auto md:h-[372px] rounded-[50px] bg-[#FBBF24]" />
          </div>
        </div>
        {/* Hero Features Section */}
        <div className="z-10 flex flex-col md:flex-row items-center justify-between gap-[32px] md:gap-[80px] py-[80px]">
          <div className="flex flex-col items-center md:items-start gap-[16px] text-center md:text-start">
            <div className="flex flex-row items-center relative w-fit">
              <img src={svg.TrophyIcon} className=" z-10 w-[64px] h-[64px]" alt="Trophy Icon" />
              <img className="!z-0 absolute -top-0 -right-5" src={svg.TrophyBadge} alt="Trophy Badge" />
            </div>
            <h2 className="subtitle-xl text-darkBlue">Nibh viverra</h2>
            <p className="body-l text-darkBlue max-w-[373px]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[16px] text-center md:text-start">
            <div className="flex flex-row items-center relative w-fit">
              <img src={svg.TunnelIcon} className=" z-10 w-[64px] h-[64px]" alt="Tunnel Icon" />
              <img className="!z-0 absolute -top-0 -right-0" src={svg.TunnelBadge} alt="Tunnel Badge" />
            </div>
            <h2 className="subtitle-xl text-darkBlue">Cursus amet</h2>
            <p className="body-l text-darkBlue max-w-[373px]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-[16px] text-center md:text-start">
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
  );
};
