import { png, svg } from "../assets/images";
import { ImageBox } from "../components";

export const SectionWhyJoinUs = () => {
  return (
    <section className="why-join-us ">
      <div className="relative overflow-hidden flex flex-col items-center justify-center py-[16px] pb-16 md:py-[160px] px-[16px] md:px-[80px] gap-[80px] bg-white md:bg-eggWhite">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[32px] md:gap-[80px] py-[32px] px-[16px] md:p-[80px] rounded-[30px] bg-white shadow-combine-darks-xl ">
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
          <div className="relative -my-[20px]">
            <div className="
           -ml-6 mt-4 md:m-0
            absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-[3/1] w-[120%] md:w-[666px] h-[auto] md:h-[217px] bg-[#FDE68A] -rotate-45" />
            <div className="absolute -top-4 md:-top-12 right-10 md:right-8 w-[36px] md:w-[60px] h-[36px] md:h-[60px] rounded-[50px] bg-[#0369A1] opacity-75" />
            <div className="absolute top-12 md:top-10 -left-6 md:left-4 w-[55px] md:w-[90px] h-[55px] h-[90px] rounded-[30px] bg-[#B45309] opacity-75" />
            <div className="z-10 absolute -bottom-6 md:-bottom-4 left-10 md:left-28 transform -translate-y-1/2 w-[50px] md:w-[90px] h-[50px] md:h-[90px] rounded-[50%] bg-[#15803D] opacity-75" />
            <div className="absolute -bottom-10 md:-bottom-20 -right-12 md:-right-32 w-[134px] md:w-[218px] h-[134px] md:h-[218px] rounded-[50px] bg-[#BE185D] opacity-75" />
            {/* <div className="absolute bottom-4 right-14 w-[74px] h-[74px] rounded-[30px] bg-[#A21CAF] opacity-75" /> */}
            <ImageBox alt="WhyJoinUs" className="scale-[1.15] md:scale-1 w-full h-auto rounded-t-[10px] mt-8 md:mt-0" imgClassName="rounded-t-[4px]" image={png.WhyJoinUs} />
          </div>
        </div>
      </div>
    </section>
  );
};
