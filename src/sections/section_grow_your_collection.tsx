import { png, svg } from "../assets/images";
import { ImageBox } from "../components";

export const SectionGrowYourCollection = () => {
  const buttons = [
    { icon: svg.ShieldCheckIcon, text: "Cras eget" },
    { icon: svg.RocketIcon, text: "Dolor pharetra" },
    { icon: svg.ScreenIcon, text: "Amet, fringilla" },
    { icon: svg.PodcastIcon, text: "Amet nibh" },
    { icon: svg.SettingsAltIcon, text: "Sad velit" },
  ];

  const GrowButton = ({ icon, text }: { icon: string; text: string }) => (
    <button className="btn btn-l justify-start text-start text-nowrap p-[16px] rounded-[8px] text-darkBlue">
      <img src={icon} alt={text} className="w-[24px] h-[24px]" />
      <span className="pl-[16px] pr-[8px]">{text}</span>
    </button>
  );

  return (
    <section className="grow-your-collection">
      <div className="relative flex flex-col items-center justify-center pt-[48px] md:pt-[80px] pb-[96px] md:pb-[128px] gap-[32px] gap-[32px] md:gap-[80px] bg-white md:bg-lightCream">
        <div className="z-0 absolute bottom-0 left-0 w-[100vw]">
          <img src={svg.Waves} alt="Waves" className=" w-[100vw]" />
        </div>
        {/* Grow your collection heading */}
        <div className="z-10 w-full flex flex-col items-center md:items-start justify-center text-center md:text-start gap-[32px] px-[16px] md:px-[80px]">
          <h2 className="h5 md:h2 text-darkBlue">Grow your collection</h2>
          <p className="body-m md:body-l text-darkBlue">
            Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien,
            fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
          </p>
        </div>
        {/* Grow your collection body */}
        <div className="z-10 w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-[32px] md:px-[80px] md:mb-24">
          {
            // TODO: Slideable buttons not working for mobile view
          }
          <div className="overflow-scroll max-w-[100vw] flex flex-row md:flex-col md:items-stretch justify-start md:justify-center gap-[16px]">
            <button className="btn btn-l min-w-max justify-start text-start text-nowrap p-[16px] rounded-[8px] text-darkBlue bg-white shadow-combine-darks-m">
              <img src={svg.SearchIcon} alt="Search icon" className="w-[24px] h-[24px]" />
              <span className="pl-[16px] pr-[8px]">Bibendum tellus</span>
              <img src={svg.ArrowBlackIcon} alt="Arrow right" className="w-[24px] h-[24px]" />
            </button>
            {buttons.map((button, index) => (
              <GrowButton key={index} icon={button.icon} text={button.text} />
            ))}
          </div>
          <div className="hidden md:flex md:-mb-36">
            <ImageBox image={png.GrowYourCollection} alt="Grow your collection" />
          </div>
          <div className="md:hidden">
            <ImageBox image={png.GrowYourCollectionMobile} alt="Grow your collection" />
          </div>
        </div>
      </div>
    </section>
  );
};
