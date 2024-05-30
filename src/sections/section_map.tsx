import { jpeg, svg } from "../assets/images";
import { ImageBox } from "../components";

export const SectionMap = () => {
  return (
    <section className="section-map">
      <div className="relative overflow-hidden flex flex-col items-center mt-[250px] md:mt-60 px-[16px] p-[48px] md:p-[80px] bg-peanut">
        <div className="relative w-[300%] md:w-auto ml-auto mr-0 md:m-0">
          <img src={svg.Map} alt="Map" className="w-full h-auto opacity-50" />
          <div className="absolute -top-12 left-24 inset-0 flex items-center justify-center">
            <img src={svg.MapEllipses} alt="Ellipses" className="w-auto h-auto" />
          </div>
          <div className="absolute top-1/2 left-[17%] md:left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col">
              <span className="h3 md:h1-l text-white">11,658,467</span>
              <span className="h5 md:h2 text-white">Shoes Collected</span>
            </div>
          </div>
          <div className="absolute top-[240px] left-[150px] w-[32px] h-[32px] bg-[#D9F99D] border border-[3px] border-[#A3E635] rounded-full">
            <div className="relative">
              <img src={svg.ArrowBottom} alt="Caret" className="absolute top-[2px] left-[7px]" />
              <div className="absolute -top-[60px] -left-[106px] w-[250px] text-start rounded-[5px] p-[16px] pb-[8px] bg-[#E2E8F0] body-s shadow-combine-darks-xxl">
                Emma Simpson collected one pair of <span className="subtitle-s">Cool Shoes.</span>
              </div>
              <div className="absolute -top-[248px] -left-[113px] shadow-combine-darks-xl">
                <ImageBox
                  image={jpeg.MapOutstand}
                  alt="Best Card 3"
                  className="w-[262px] h-[200px] p-[5px] bg-white rounded-[10px]"
                  imgClassName="w-full h-full object-cover rounded-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
