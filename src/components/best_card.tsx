import { jpeg, svg } from "../assets/images";
import { ImageBox } from "./imagebox";

type Props = {
  image: string;
  title: string;
  description: string;
};

export const BestCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className="relative z-10 flex flex-col gap-[10px] text-start rounded-[10px] bg-darkBlue shadow-custom-heavy">
      {/* Card Header */}
      <div className="relative w-full h-[220px] rounded-t-[10px]">
        <ImageBox alt="Card 1" className="w-full h-full rounded-t-[10px]" imgClassName="rounded-t-[4px]" image={image} />
      </div>
      {/* Card Body */}
      <div className="flex flex-col gap-[16px] p-[32px] pb-0">
        <h6 className="h6 text-white">{title}</h6>
        <p className="body-l text-white">{description}</p>
      </div>
      {/* Card Footer */}
      <div className="flex p-[32px]">
        <button className="btn btn-l-outline w-full text-white border-white gap-[16px] p-[16px]">
          <img src={svg.ShoppingIcon} alt="Shopping Icon" className="w-[24px] h-[24px]" />
          Buy Now
        </button>
      </div>
    </div>
  );
};
