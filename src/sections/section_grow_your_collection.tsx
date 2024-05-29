import { jpeg, svg } from "../assets/images";
import { ImageBox, MacWindow } from "../components";

export const SectionGrowYourCollection = () => {
  const buttons = [
    { icon: svg.ShieldCheckIcon, text: "Cras eget" },
    { icon: svg.RocketIcon, text: "Dolor pharetra" },
    { icon: svg.ScreenIcon, text: "Amet, fringilla" },
    { icon: svg.PodcastIcon, text: "Amet nibh" },
    { icon: svg.SettingsAltIcon, text: "Sad velit" },
  ];

  const GrowButton = ({ icon, text }: { icon: string; text: string }) => (
    <button className="btn btn-l min-w-max justify-start text-start whitespace-nowrap p-[16px] rounded-[8px] text-darkBlue">
      <img src={icon} alt={text} className="w-[24px] h-[24px]" />
      <span className="pl-[16px] pr-[8px]">{text}</span>
    </button>
  );
  const GrowHeadButton = ({ icon, text }: { icon: string; text: string }) => (
    <button className="btn btn-l min-w-max justify-start text-start whitespace-nowrap p-[16px] rounded-[8px] text-darkBlue bg-white shadow-combine-darks-m">
      <img src={icon} alt={text} className="w-[24px] h-[24px]" />
      <span className="pl-[16px] pr-[8px]">{text}</span>
      <img src={svg.ArrowBlackIcon} alt="Arrow Right" className="w-[24px] h-[24px]" />
    </button>
  );

  return (
    <section className="grow-your-collection">
      <div className="relative flex flex-col items-center justify-center pt-[48px] md:pt-[80px] pb-[96px] md:pb-[128px] gap-[32px] gap-[32px] md:gap-[80px] bg-white md:bg-lightCream">
        <div className="z-0 absolute bottom-0 left-0 md:w-[100vw]">
          <img src={svg.Waves} alt="Waves" className="-mb-48 md:-mb-32 md:w-[100vw]" />
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
        <div className="z-10 w-full flex flex-col md:flex-row justify-between items-start gap-[32px] md:gap-[80px] px-0 md:px-[80px]">
          {/* Buttons */}
          <div className="w-full md:w-auto overflow-y-scroll md:overflow-visible flex flex-row md:flex-col whitespace-nowrap items-stretch justify-start md:gap-[16px] p-2 md:p-0 pl-[16px]">
            <GrowHeadButton icon={svg.SearchIcon} text="Bibendum tellus" />
            {buttons.map((button, index) => (
              <GrowButton key={index} icon={button.icon} text={button.text} />
            ))}
          </div>
          {/* Windows */}
          {/* <div className="relative w-full flex items-start max-w-[100vw]">
            <div className="relative w-full">
              <div className="absolute top-0 left-[16px] md:left-0 z-0">
                <div className="relative">
                  <MacWindow image={jpeg.WhyJoinUs} imageClassname={"md:w-[760px] md:max-h-[400px]"} />
                  <div className="absolute top-24 -right-24 z-0">
                    <div className="relative">
                      <MacWindow image={jpeg.BestCard2} className="w-full" imageClassname={"md:w-[760px] md:max-h-[400px]"} />
                      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-60 -right-60 z-10">
                        <div className="border border-[5px] border-white w-full h-full rounded-[10px] bg-white">
                          <img src={jpeg.GrowSquare} alt="Grow Square" className="md:w-[256px] md:h-[286px] rounded-[10px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
