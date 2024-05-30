import { jpeg, svg } from "../assets/images";
import { ImageBox, MacWindow } from "../components";

export const SectionWhyJoinUs = () => {
  const YellowAndBlueBox = () => {
    return (
      <div className="absolute">
        <div className="relative h-[135px] w-[411px] md:h-[218px] md:w-[667px] bg-[#FDE68A] -rotate-45 shadow-darker-xxl">
          <div className="absolute -translate-y-1/2  top-1/2 -right-[18.5px] md:-mr-[12px] h-[37px] w-[37px] md:h-[60px] md:w-[60px] rounded-[30px] bg-[#0369A1] opacity-75 "></div>
        </div>
      </div>
    );
  };
  const PinkAndVioletBox = () => {
    return (
      <div className="absolute">
        <div className="relative h-[135px] w-[135px] md:h-[218px] md:w-[218px] rounded-[50px] bg-[#BE185D] opacity-75 ">
          <div className="absolute top-1/2 -translate-y-1/2 -left-[24px] md:-left-[36px] h-[46px] w-[46px] md:h-[74px] md:w-[74px] rounded-[30px] bg-[#A21CAF] opacity-75"></div>
        </div>
      </div>
    );
  };
  const BrownBox = () => {
    return <div className="absolute h-[55px] w-[55px] md:h-[90px] md:w-[90px] rounded-[30px] bg-[#B45309] opacity-75"></div>;
  };
  const GreenCircle = () => {
    return <div className="absolute h-[50px] w-[50px] md:h-[85px] md:w-[85px] rounded-[50px] bg-[#15803D] opacity-75"></div>;
  };

  return (
    <section className="why-join-us ">
      <div className="bg-white md:bg-lightCream">
      <div className="container relative overflow-hidden flex flex-col items-center justify-center py-[16px] pb-16 md:py-[160px] px-[16px] md:px-[80px] gap-[80px]">
        <div className="w-full flex flex-col md:grid md:grid-cols-2 items-center justify-between gap-[32px] md:gap-[80px] py-[32px] px-[16px] md:p-[80px] rounded-[30px] bg-white shadow-combine-darks-xl ">
          {/* Why join us left side */}
          <div className="z-10 flex flex-col items-center md:items-start gap-[24px] text-center md:text-start">
            <h2 className="h5 md:h2 text-darkBlue">Why join us</h2>
            <div className="flex flex-col text-start gap-[8px] md:gap-0">
              {/* Why join us point 1 */}
              <span className="flex flex-row items-start md:items-center gap-[8px] radius-[20px]">
                <img className="w-[24px] h-[24px] p-1" src={svg.CheckIcon} alt="Check Icon" />
                <p className="body-m md:body-xl text-darkBlue">Est et in pharetra magna adipiscing ornare aliquam.</p>
              </span>
              {/* Why join us point 2 */}
              <span className="flex flex-row items-start md:items-center gap-[8px] radius-[20px]">
                <img className="w-[24px] h-[24px] p-1" src={svg.CheckIcon} alt="Check Icon" />
                <p className="body-m md:body-xl text-darkBlue">Tellus arcu sed consequat ac velit ut eu blandit.</p>
              </span>
              {/* Why join us point 3 */}
              <span className="flex flex-row items-start md:items-center gap-[8px] radius-[20px]">
                <img className="w-[24px] h-[24px] p-1" src={svg.CheckIcon} alt="Check Icon" />
                <p className="body-m md:body-xl text-darkBlue">Ullamcorper ornare in et egestas dolor orci.</p>
              </span>
            </div>
            <button className="btn btn-l-outline w-fit py-[16px] px-[32px]">Sign up now</button>
          </div>
          {/* Why join us right side */}
          <div className="relative w-full h-full">
            <div className="absolute w-full bottom-[175px] md:bottom-[270px] -left-[70px] md:-left-[90px]">
              <YellowAndBlueBox />
            </div>
            <div className="absolute w-full bottom-[70px] md:bottom-[100px] -right-[250px] md:-right-[420px]">
              <PinkAndVioletBox />
            </div>
            <div className="absolute w-full top-[20px] -left-[20px]">
              <BrownBox />
            </div>
            <div className="z-10 absolute w-full bottom-[30px] md:bottom-[50px] left-[50px] md:left-[80px]">
              <GreenCircle />
            </div>
            <MacWindow className="z-1" image={jpeg.WhyJoinUs} />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
