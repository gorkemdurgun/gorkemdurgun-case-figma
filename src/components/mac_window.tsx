type Props = {
  className?: string;
  bodyClassName?: string;
  image: string;
  imageClassname?: string;
};

export const MacWindow = ({ className, bodyClassName, image, imageClassname }: Props) => {
  return (
    <div className={`relative flex flex-col shadow-combine-darks-xxl rounded-[20px] bg-white ${className}`}>
      {/* Mac Window Header */}
      <div className="flex flex-row gap-[4px] p-[16px] rounded-t-[20px] bg-white">
        <div className="flex flex-row items-center gap-[5px] rounded-t-[20px]">
          <div className="w-[10px] h-[10px] rounded-full bg-red" />
          <div className="w-[10px] h-[10px] rounded-full bg-yellow" />
          <div className="w-[10px] h-[10px] rounded-full bg-green" />
        </div>
      </div>
      {/* Mac Window Body */}
      <div className={`relative p-[4px] pt-0 rounded-b-[20px] ${bodyClassName}`}>
        <img className={`w-full h-auto rounded-b-[20px] object-cover ${imageClassname}`} src={image} alt="Mac Window" />
      </div>
    </div>
  );
};
