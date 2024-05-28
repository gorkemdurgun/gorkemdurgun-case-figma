import { useRef } from "react";
import { svg } from "../assets/images";
import { TestimonialCard } from "../components";

const testimonials = [
  {
    logo: svg.ZoomerLogo,
    title: "Zoomerr",
    description: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Helen Jummy",
    position: "Team Lead",
  },
  {
    logo: svg.ShellsLogo,
    title: "SHELLS",
    description:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla..",
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Helena John",
    position: "Co-founder",
  },
  {
    logo: svg.ArtVenueLogo,
    title: "ArtVenue",
    description:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "David Oshodi",
    position: "Manager",
  },
  {
    logo: svg.WaLogo,
    title: "WA",
    description: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    avatar: "https://i.pravatar.cc/150?img=4",
    name: "Olivia Ritter",
    position: "Lead Developer",
  },
];

export const SectionTestimonials = () => {
  const testimonialListRef = useRef<HTMLDivElement>(null);

  function handleScrollSmoothly(scrollOffset: number) {
    if (testimonialListRef.current) {
      testimonialListRef.current.scrollBy({
        left: scrollOffset,
        behavior: "smooth",
      });
    }
  }

  return (
    <section className="because-they-love-us">
      <div className="flex flex-col items-center justify-center py-[48px] md:py-[80px] gap-[32px] md:gap-[48px] bh-white md:bg-eggWhite">
        {/* Because they love us heading */}
        <div className="w-full flex flex-row items-center justify-center md:justify-between gap-[48px] px-[16px] md:px-[80px]">
          <h2 className="h5 md:h2 text-darkBlue">Because they love us</h2>
          <span className="hidden md:flex flex-row items-center gap-[24px]">
            <button className="btn border-[2px] border-peanut rounded-[30px] p-[12px]" onClick={() => handleScrollSmoothly(-300)}>
              <img src={svg.ArrowIcon} alt="Arrow Left" />
            </button>
            <button className="border-[2px] border-peanut rounded-[30px] p-[12px] rotate-180" onClick={() => handleScrollSmoothly(300)}>
              <img src={svg.ArrowIcon} alt="Arrow Right" />
            </button>
          </span>
        </div>
        {/* Because they love us cards */}
        <div className="relative overflow-hidden w-full">
          <div className="z-0 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] md:w-[95vw] h-[95%] bg-[#FDE68A]" />
          <div ref={testimonialListRef} className="z-10 flex flex-row items-stretch justify-between gap-[24px] px-[16px] md:px-[80px] overflow-x-auto">
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
