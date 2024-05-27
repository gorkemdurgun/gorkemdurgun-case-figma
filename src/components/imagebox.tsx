type Props = {
  image: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export const ImageBox: React.FC<Props> = ({ image, alt, className, imgClassName }) => {
  return (
    <div className={`relative ${className}`}>
      <img className={`object-cover w-full h-full ${imgClassName}`} src={image} alt={alt} />
    </div>
  );
};
