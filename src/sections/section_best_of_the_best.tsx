import { jpeg } from "../assets/images";
import { BestCard } from "../components";

export const SectionBestOfTheBest = () => {
  return (
    <section className="best-of-best">
      <div className="flex flex-col items-center justify-center py-[80px] gap-[80px] bg-darkBlue">
        {/* Best of the best heading */}
        <div className="w-full flex flex-row items-center justify-between px-[80px] gap-[80px]">
          <h2 className="h2 text-white">The best of the best</h2>
          <button className="btn btn-xl-outline text-white border-white py-[20px] px-[48px]">Sign up now</button>
        </div>
        {/* Best of the best cards */}
        <div className="relative flex flex-row items-center justify-between gap-[48px] px-[80px]">
          <div className="relative">
            <BestCard image={jpeg.Card1Photo} title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
            <div className="z-1 absolute bottom-8 -left-8 w-[271px] h-[271px] rounded-[50px] bg-[#BE185D] opacity-75" />
          </div>
          <div className="relative">
            <BestCard image={jpeg.Card1Photo} title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
            <div className="z-1 absolute -top-8 -left-4 w-[161px] h-[161px] rounded-[50px] bg-[#0369A1] opacity-75" />
            <div className="z-0 absolute bottom-8 -right-4 w-[130px] h-[130px] rounded-[30px] bg-[#B45309] opacity-75" />
          </div>
          <div className="relative">
            <BestCard image={jpeg.Card1Photo} title="Title" description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse." />
            <div className="z-1 absolute top-4 -right-12 w-[232px] h-[232px] rounded-[50px] bg-[#15803D] opacity-75" />
            <div className="z-0 absolute -bottom-6 right-32 w-[202px] h-[202px] rounded-[30px] bg-[#A21CAF] opacity-75" />
          </div>
        </div>
      </div>
    </section>
  );
};
