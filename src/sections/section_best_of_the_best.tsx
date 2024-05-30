import { jpeg } from "../assets/images";
import { BestCard } from "../components";

export const SectionBestOfTheBest = () => {
  return (
    <section className="best-of-best">
      <div className="bg-darkBlue">
        <div className="container flex flex-col items-center justify-center py-[48px] md:py-[80px] gap-[32px] md:gap-[80px] bg-darkBlue">
          {/* Best of the best heading */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[32px] md:gap-[80px]">
            <h2 className="h5 md:h2 text-white">The best of the best</h2>
            <button className="btn btn-xl-outline text-white border-white py-[20px] px-[48px]">Sign up now</button>
          </div>
          {/* Best of the best cards */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-[32px] md:gap-[48px] ">
            <div className="relative">
              <BestCard image={jpeg.BestCard1} title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
              <div className="z-1 absolute -bottom-8 md:bottom-8 left-6 md:-left-8 w-[202px] md:w-[271px] h-[202px] md:h-[271px] rounded-[50px] bg-[#BE185D] opacity-75" />
            </div>
            <div className="relative">
              <BestCard image={jpeg.BestCard2} title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
              <div className="z-1 absolute top-36 md:-top-8 -right-4 md:-left-4 w-[120px] md:w-[161px] h-[120px] md:h-[161px] rounded-[50px] bg-[#0369A1] opacity-75" />
              <div className="hidden md:flex z-0 absolute bottom-8 -right-4 w-[130px] h-[130px] rounded-[30px] bg-[#B45309] opacity-75" />
            </div>
            <div className="relative">
              <BestCard image={jpeg.BestCard3} title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
              <div className="hidden md:flex z-1 absolute top-4 -right-12 w-[232px] h-[232px] rounded-[50px] bg-[#15803D] opacity-75" />
              <div className="z-0 absolute top-12 md:top-auto bottom-auto md:-bottom-6 -left-4 md:left-auto right-auto md:right-32 w-[150px] md:w-[202px] h-[150px] md:h-[202px] rounded-[30px] bg-[#A21CAF] opacity-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
