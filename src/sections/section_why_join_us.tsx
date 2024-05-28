import { png, svg } from "../assets/images";
import { ImageBox } from "../components";

export const SectionWhyJoinUs = () => {
  return (
    <section className="why-join-us">
      <div className="flex flex-col items-center justify-center py-[160px] px-[80px] gap-[80px] bg-eggWhite">
        <div className="w-full flex flex-row items-center justify-between gap-[80px] p-[80px] rounded-[30px] bg-white shadow-combine-darks-xl">
          {/* Why join us left side */}
          <div className="flex flex-col gap-[24px] text-start">
            <h2 className="h2 text-darkBlue">Why join us</h2>
            <div className="flex flex-col text-start">
              {/* Why join us point 1 */}
              <span className="flex flex-row items-center gap-[8px] radius-[20px]">
                <img className="w-[16px] h-[16px]" src={svg.CheckIcon} alt="Check Icon" />
                <p className="body-xl text-darkBlue">Est et in pharetra magna adipiscing ornare aliquam.</p>
              </span>
              {/* Why join us point 2 */}
              <span className="flex flex-row items-center gap-[8px] radius-[20px]">
                <img className="w-[16px] h-[16px]" src={svg.CheckIcon} alt="Check Icon" />
                <p className="body-xl text-darkBlue">Tellus arcu sed consequat ac velit ut eu blandit.</p>
              </span>
              {/* Why join us point 3 */}
              <span className="flex flex-row items-center gap-[8px] radius-[20px]">
                <img className="w-[16px] h-[16px]" src={svg.CheckIcon} alt="Check Icon" />
                <p className="body-xl text-darkBlue">Ullamcorper ornare in et egestas dolor orci.</p>
              </span>
            </div>
            <button className="btn btn-l-outline w-fit p-[16px]">Sign up now</button>
          </div>
          {/* Why join us right side */}
          <div className="relative -my-[20px]">
            {/* Yellow Rectangle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[666px] h-[217px] bg-[#FDE68A] -rotate-45" />
            {/* Blue Circle */}
            <div className="absolute -top-12 right-8 w-[60px] h-[60px] rounded-[50px] bg-[#0369A1] opacity-75" />
            {/* Brown Square */}
            <div className="absolute top-10 left-4 w-[90px] h-[90px] rounded-[30px] bg-[#B45309] opacity-75" />
            {/* Green Circle */}
            <div className="z-10 absolute -bottom-4 left-28 transform -translate-y-1/2 w-[90px] h-[90px] rounded-[50%] bg-[#15803D] opacity-75" />
            {/*Pink Square */}
            <div className="absolute -bottom-20 -right-32 w-[218px] h-[218px] rounded-[50px] bg-[#BE185D] opacity-75" />
            {/* Violet Rectangle */}
            <div className="absolute bottom-4 right-14 w-[74px] h-[74px] rounded-[30px] bg-[#A21CAF] opacity-75" />
            {/* Image */}
            <ImageBox alt="WhyJoinUs" className="w-full h-auto rounded-t-[10px]" imgClassName="rounded-t-[4px]" image={png.WhyJoinUs} />
          </div>
        </div>
      </div>
    </section>
  );
};
