type Props = {
  logo: string;
  title: string;
  description: string;
  avatar: string;
  name: string;
  position: string;
};

export const TestimonialCard = ({ logo, title, description, avatar, name, position }: Props) => {
  return (
    <div className="z-10 grid grid-cols-1 flex flex-col justify-between min-w-[80vw] md:min-w-[384px] gap-[8px] md:gap-[16px] p-[24px] md:p-[32px] my-[16px] rounded-[20px] text-start bg-white shadow-combine-darks-l ">
      <div className=" flex flex-row items-center gap-[8px] py-[16px]">
        <img className="w-[32px] h-[32px]" src={logo} alt="Brand Logo" />
        <h6 className="h6 text-logoGray">{title}</h6>
      </div>
      <p className=" body-m md:body-xxl text-darkBlue max-w-[320px]">{description}</p>
      <div className=" flex flex-row items-center gap-[16px] py-[16px]">
        <div className="w-[64px] h-[64px] rounded-[100px] overflow-hidden">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="flex flex-col text-start">
          <p className="body-l text-black">{name}</p>
          <p className="body-m text-logoGray">{position}</p>
        </div>
      </div>
    </div>
  );
};
